import {
  endpoints,
  type EndpointName,
  type EndpointRequestMap,
  type EndpointResponseMap,
  type UploadFile,
} from './generated/endpoints.js';

export interface OceanEngineClientOptions {
  accessToken?: string;
  baseUrl?: string;
  headers?: HeadersInit;
  fetch?: typeof globalThis.fetch;
  timeoutMs?: number;
  sandbox?: boolean;
  operatorIp?: string;
  rateLimiter?: OceanEngineRateLimiter;
  onRequest?: OceanEngineRequestHook;
  onResponse?: OceanEngineResponseHook;
  onError?: OceanEngineErrorHook;
}

export interface RequestOptions {
  accessToken?: string;
  headers?: HeadersInit;
  signal?: AbortSignal;
  timeoutMs?: number;
  sandbox?: boolean;
  operatorIp?: string;
}

export interface OceanEngineRateLimitContext {
  method: 'GET' | 'POST';
  path: string;
  url: URL;
}

export interface OceanEngineRateLimiter {
  acquire(context: OceanEngineRateLimitContext): void | Promise<void>;
}

export interface OceanEngineRequestHookContext extends OceanEngineRateLimitContext {
  init: RequestInit;
  request: CommonRequest;
  state: Map<unknown, unknown>;
}

export interface OceanEngineResponseHookContext extends OceanEngineRequestHookContext {
  response: Response;
  elapsedMs: number;
}

export interface OceanEngineErrorHookContext extends OceanEngineRequestHookContext {
  error: unknown;
  elapsedMs: number;
}

export type OceanEngineRequestHook = (
  context: OceanEngineRequestHookContext,
) => void | Promise<void>;

export type OceanEngineResponseHook = (
  context: OceanEngineResponseHookContext,
) => void | Promise<void>;

export type OceanEngineErrorHook = (
  context: OceanEngineErrorHookContext,
) => void | Promise<void>;

export interface CommonRequest extends RequestOptions {
  method: 'GET' | 'POST';
  path: string;
  responseType?: 'json' | 'bytes' | 'text';
  query?: Record<string, unknown>;
  body?: unknown;
  form?: Record<string, unknown>;
  files?: Record<string, UploadFile>;
}

export interface OceanEngineResponse<T> {
  data: T;
  response: Response;
}

export class OceanEngineApiError extends Error {
  readonly status: number;
  readonly headers: Headers;
  readonly body: string;

  constructor(response: Response, body: string) {
    super(`Ocean Engine API request failed with status ${response.status}`);
    this.name = 'OceanEngineApiError';
    this.status = response.status;
    this.headers = response.headers;
    this.body = body;
  }
}

export class OceanEngineClient {
  readonly baseUrl: string;
  private accessToken?: string;
  private readonly headers: Headers;
  private readonly fetchImpl: typeof globalThis.fetch;
  private readonly timeoutMs: number;
  private readonly sandbox: boolean;
  private readonly operatorIp?: string;
  private readonly rateLimiter?: OceanEngineRateLimiter;
  private readonly onRequest?: OceanEngineRequestHook;
  private readonly onResponse?: OceanEngineResponseHook;
  private readonly onError?: OceanEngineErrorHook;

  constructor(options: OceanEngineClientOptions = {}) {
    this.baseUrl = (options.baseUrl ?? 'https://api.oceanengine.com').replace(/\/$/, '');
    this.accessToken = options.accessToken;
    this.headers = new Headers(options.headers);
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.timeoutMs = options.timeoutMs ?? 60_000;
    this.sandbox = options.sandbox ?? false;
    this.operatorIp = options.operatorIp;
    this.rateLimiter = options.rateLimiter;
    this.onRequest = options.onRequest;
    this.onResponse = options.onResponse;
    this.onError = options.onError;
  }

  setAccessToken(accessToken: string | undefined): void {
    this.accessToken = accessToken;
  }

  async execute<K extends EndpointName>(
    endpoint: K,
    request: EndpointRequestMap[K],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap[K]> {
    const result = await this.executeWithResponse(endpoint, request, options);
    return result.data;
  }

  async executeWithResponse<K extends EndpointName>(
    endpoint: K,
    request: EndpointRequestMap[K],
    options: RequestOptions = {},
  ): Promise<OceanEngineResponse<EndpointResponseMap[K]>> {
    const definition = endpoints[endpoint];
    const common: CommonRequest = {
      ...options,
      method: definition.method,
      path: definition.path,
      responseType: definition.responseKind,
    };

    if (definition.kind === 'query') {
      common.query = request as Record<string, unknown>;
    } else if (definition.kind === 'json') {
      common.body = request;
    } else {
      const values = request as Record<string, unknown>;
      const fileFields = new Set<string>(definition.fileFields);
      common.form = Object.fromEntries(
        Object.entries(values).filter(([key]) => !fileFields.has(key)),
      );
      common.files = Object.fromEntries(
        Object.entries(values).filter(([key]) => fileFields.has(key)),
      ) as Record<string, UploadFile>;
    }

    return this.requestWithResponse<EndpointResponseMap[K]>(common);
  }

  async request<T = unknown>(request: CommonRequest): Promise<T> {
    const result = await this.requestWithResponse<T>(request);
    return result.data;
  }

  async requestWithResponse<T = unknown>(request: CommonRequest): Promise<OceanEngineResponse<T>> {
    const url = new URL(request.path, `${this.baseUrl}/`);
    appendQuery(url.searchParams, request.query);

    const headers = new Headers(this.headers);
    new Headers(request.headers).forEach((value, key) => headers.set(key, value));
    headers.set('Accept', 'application/json');
    headers.set('X-Sdk-Language', 'typescript');
    headers.set('X-Sdk-Language-Version', processVersion());
    headers.set('X-Sdk-Version', '1.1.93');

    const accessToken = request.accessToken ?? this.accessToken;
    if (accessToken) headers.set('Access-Token', accessToken);
    if (request.sandbox ?? this.sandbox) headers.set('X-Debug-Mode', '1');

    const operatorIp = request.operatorIp ?? this.operatorIp;
    if (operatorIp) headers.set('Operator-Ip', operatorIp);

    let body: BodyInit | undefined;
    if (request.files || request.form) {
      body = createFormData(request.form, request.files);
    } else if (request.body !== undefined) {
      headers.set('Content-Type', 'application/json');
      body = JSON.stringify(request.body);
    }

    const rateLimitContext: OceanEngineRateLimitContext = {
      method: request.method,
      path: request.path,
      url,
    };
    await this.rateLimiter?.acquire(rateLimitContext);

    const abort = createAbortSignal(request.signal, request.timeoutMs ?? this.timeoutMs);
    const init: RequestInit = {
      method: request.method,
      headers,
      body,
      signal: abort.signal,
    };
    const hookContext: OceanEngineRequestHookContext = {
      ...rateLimitContext,
      init,
      request,
      state: new Map(),
    };
    const startedAt = performance.now();
    try {
      await this.onRequest?.(hookContext);
      const response = await this.fetchImpl(url, init);
      await this.onResponse?.({
        ...hookContext,
        response,
        elapsedMs: performance.now() - startedAt,
      });
      if (!response.ok) throw new OceanEngineApiError(response, await response.text());

      let data: T;
      if (request.responseType === 'bytes') {
        data = new Uint8Array(await response.arrayBuffer()) as T;
      } else {
        const text = await response.text();
        data = (request.responseType === 'text' ? text : text ? JSON.parse(text) : undefined) as T;
      }
      return { data, response };
    } catch (error) {
      await this.onError?.({
        ...hookContext,
        error,
        elapsedMs: performance.now() - startedAt,
      });
      throw error;
    } finally {
      abort.cleanup();
    }
  }
}

function appendQuery(searchParams: URLSearchParams, query?: Record<string, unknown>): void {
  if (!query) return;
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    searchParams.append(key, typeof value === 'string' ? value : JSON.stringify(value));
  }
}

function createFormData(
  form?: Record<string, unknown>,
  files?: Record<string, UploadFile>,
): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(form ?? {})) {
    if (value === undefined || value === null) continue;
    data.append(key, typeof value === 'string' ? value : JSON.stringify(value));
  }
  for (const [key, file] of Object.entries(files ?? {})) {
    if (file instanceof Blob) data.append(key, file);
    else data.append(key, file.data, file.filename);
  }
  return data;
}

function processVersion(): string {
  const processLike = globalThis as typeof globalThis & { process?: { version?: string } };
  return processLike.process?.version ?? 'unknown';
}

function createAbortSignal(
  signal: AbortSignal | undefined,
  timeoutMs: number,
): { signal: AbortSignal | undefined; cleanup: () => void } {
  if (timeoutMs <= 0) return { signal, cleanup: () => undefined };

  const controller = new AbortController();
  const abortFromSignal = () => controller.abort(signal?.reason);
  if (signal?.aborted) abortFromSignal();
  else signal?.addEventListener('abort', abortFromSignal, { once: true });

  const timeout = setTimeout(
    () => controller.abort(new DOMException(`Request timed out after ${timeoutMs}ms`, 'TimeoutError')),
    timeoutMs,
  );

  return {
    signal: controller.signal,
    cleanup: () => {
      clearTimeout(timeout);
      signal?.removeEventListener('abort', abortFromSignal);
    },
  };
}
