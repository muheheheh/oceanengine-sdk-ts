import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const goRoot = resolve(process.env.OCEANENGINE_GO_SDK ?? join(root, '..', 'ad_open_sdk_go'));
const modelDir = join(goRoot, 'models');
const apiDir = join(goRoot, 'api');
const outputDir = join(root, 'src', 'generated');
const docsMap = await readDocsMap();

await mkdir(outputDir, { recursive: true });

const modelFiles = (await readdir(modelDir)).filter((name) => name.startsWith('model_') && name.endsWith('.go')).sort();
const models = [];
for (const file of modelFiles) {
  const source = await readFile(join(modelDir, file), 'utf8');
  const declaration = generateModel(source);
  if (declaration) models.push(declaration);
}

await writeFile(
  join(outputDir, 'models.ts'),
  `// Generated from oceanengine/ad_open_sdk_go v1.1.93. Do not edit manually.\n\nexport type FormFileInfo = Blob | { data: Blob; filename?: string };\nexport type NullableTime = string | null;\n\n${models.join('\n\n')}\n`,
);

const apiFiles = (await readdir(apiDir))
  .filter((name) => name.startsWith('api_') && name.endsWith('.go') && name !== 'api_common.go')
  .sort();
const endpointList = [];
const skippedApiFiles = [];
for (const file of apiFiles) {
  const source = await readFile(join(apiDir, file), 'utf8');
  const endpoint = generateEndpoint(source, file);
  if (endpoint) endpointList.push(endpoint);
  else skippedApiFiles.push(file);
}

const endpointSource = generateEndpointFile(endpointList);
await writeFile(join(outputDir, 'endpoints.ts'), endpointSource);
await writeFile(join(outputDir, 'client.ts'), generateClientFile(endpointList));
console.log(`Generated ${models.length} models and ${endpointList.length} endpoints from ${goRoot}`);
if (skippedApiFiles.length > 0) console.warn(`Skipped API files without a callable operation: ${skippedApiFiles.join(', ')}`);

function generateModel(source) {
  const struct = source.match(/^type\s+(\w+)\s+struct\s*\{([\s\S]*?)^\}/m);
  if (struct) {
    const fields = [];
    for (const line of struct[2].split('\n')) {
      const field = line.match(/^\s*(\w+)\s+(.+?)\s+`json:"([^",]+)(,omitempty)?"`/);
      if (!field || field[3] === '-') continue;
      fields.push(`  ${JSON.stringify(field[3])}${field[4] ? '?' : ''}: ${goTypeToTs(field[2])};`);
    }
    return `export interface ${struct[1]} {\n${fields.join('\n')}\n}`;
  }

  const alias = source.match(/^type\s+(\w+)\s+([^\s{]+)\s*$/m);
  if (!alias) return undefined;
  const values = [...source.matchAll(/^\s*\w+\s+\w+\s+=\s+(.+)$/gm)]
    .map((match) => match[1].trim())
    .filter((value) => /^(?:"(?:[^"\\]|\\.)*"|-?\d+(?:\.\d+)?)$/.test(value));
  const type = values.length > 0 ? [...new Set(values)].join(' | ') : goTypeToTs(alias[2]);
  return `export type ${alias[1]} = ${type};`;
}

function generateEndpoint(source, file) {
  const service = source.match(/^type\s+(\w+)ApiService\s+/m)?.[1];
  const method = source.match(/localVarHTTPMethod\s*=\s*http\.Method(\w+)/)?.[1]?.toUpperCase();
  const path = source.match(/localVarPath\s*:=\s*localBasePath\s*\+\s*"([^"]+)"/)?.[1];
  const response = source.match(/localVarReturnValue\s+\*(\w+)/)?.[1]
    ?? (source.match(/localVarReturnValue\s+\[\]byte/) ? 'Uint8Array' : undefined);
  if (!service || !method || !path || !response) return undefined;

  const requestStruct = source.match(/^type\s+Api\w+Request\s+struct\s*\{([\s\S]*?)^\}/m)?.[1] ?? '';
  const fields = new Map();
  for (const line of requestStruct.split('\n')) {
    const field = line.match(/^\s*(\w+)\s+(.+?)\s*$/);
    if (field && !['ctx', 'ApiService'].includes(field[1])) fields.set(field[1], field[2].trim());
  }
  const required = new Set([...source.matchAll(/if\s+r\.(\w+)\s*==\s*nil/g)].map((match) => match[1]));
  const query = locationFields(source, 'localVarQueryParams', fields, required);
  const form = locationFields(source, 'localVarFormParams', fields, required);
  const files = [...source.matchAll(/formFiles\["([^"]+)"\]\s*=\s*r\.(\w+)/g)].map((match) => ({
    name: match[1],
    field: match[2],
    type: 'UploadFile',
    required: required.has(match[2]),
  }));
  const bodyField = source.match(/localVarPostBody\s*=\s*r\.(\w+)/)?.[1];
  const bodyType = bodyField ? stripPointer(fields.get(bodyField) ?? 'interface{}') : undefined;
  const contentTypes = source.match(/localVarHTTPContentTypes\s*:=\s*\[\]string\{([^}]*)\}/)?.[1] ?? '';
  const kind = contentTypes.includes('multipart/form-data') ? 'multipart' : bodyField ? 'json' : 'query';

  const responseKind = response === 'Uint8Array' ? 'bytes' : 'json';
  return { service, method, path, response, responseKind, query, form, files, bodyType, kind, file };
}

function locationFields(source, location, fields, required) {
  const regex = new RegExp(`parameterAddToHeaderOrQuery\\(${location},\\s*"([^"]+)",\\s*r\\.(\\w+)\\)`, 'g');
  return [...source.matchAll(regex)].map((match) => ({
    name: match[1],
    field: match[2],
    type: goTypeToTs(fields.get(match[2]) ?? 'interface{}', 'Models.'),
    required: required.has(match[2]),
  }));
}

function generateEndpointFile(items) {
  const definitions = items.map((item) => {
    const fileFields = item.files.map((field) => JSON.stringify(field.name)).join(', ');
    const doc = docsMap[item.path];
    const docsUrl = doc?.url ?? `https://open.oceanengine.com/labels/search?s=${encodeURIComponent(item.path)}`;
    const title = doc?.title ?? item.service;
    return `  /**\n   * ${escapeComment(title)}\n   *\n   * ${item.method} ${item.path}\n   * @see ${docsUrl}\n   */\n  ${JSON.stringify(item.service)}: { method: ${JSON.stringify(item.method)}, path: ${JSON.stringify(item.path)}, title: ${JSON.stringify(title)}, docsUrl: ${JSON.stringify(docsUrl)}, kind: ${JSON.stringify(item.kind)}, responseKind: ${JSON.stringify(item.responseKind)}, fileFields: [${fileFields}] },`;
  });

  const requests = items.map((item) => {
    if (item.kind === 'json') return `  ${JSON.stringify(item.service)}: Models.${item.bodyType};`;
    const fields = item.kind === 'multipart' ? [...item.form, ...item.files] : item.query;
    const shape = fields.map((field) => `${JSON.stringify(field.name)}${field.required ? '' : '?'}: ${field.type}`).join('; ');
    return `  ${JSON.stringify(item.service)}: { ${shape} };`;
  });
  const responses = items.map((item) => `  ${JSON.stringify(item.service)}: ${item.responseKind === 'bytes' ? item.response : `Models.${item.response}`};`);

  return `// Generated from oceanengine/ad_open_sdk_go v1.1.93. Do not edit manually.\n\nimport type * as Models from './models.js';\n\nexport type UploadFile = Blob | { data: Blob; filename?: string };\n\nexport const endpoints = {\n${definitions.join('\n')}\n} as const;\n\nexport type EndpointName = keyof typeof endpoints;\n\nexport interface EndpointRequestMap {\n${requests.join('\n')}\n}\n\nexport interface EndpointResponseMap {\n${responses.join('\n')}\n}\n`;
}

function generateClientFile(items) {
  const methods = items.map((item) => {
    const methodName = lowerFirst(item.service);
    const doc = docsMap[item.path];
    const docsUrl = doc?.url ?? `https://open.oceanengine.com/labels/search?s=${encodeURIComponent(item.path)}`;
    const title = doc?.title ?? item.service;
    return `  /**
   * ${escapeComment(title)}
   *
   * ${item.method} ${item.path}
   * @see ${docsUrl}
   */
  ${methodName}(
    request: EndpointRequestMap[${JSON.stringify(item.service)}],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap[${JSON.stringify(item.service)}]> {
    return this.execute(${JSON.stringify(item.service)}, request, options);
  }`;
  });

  return `// Generated from oceanengine/ad_open_sdk_go v1.1.93. Do not edit manually.

import {
  OceanEngineClient as BaseOceanEngineClient,
  type RequestOptions,
} from '../client.js';
import type { EndpointRequestMap, EndpointResponseMap } from './endpoints.js';

/**
 * Ocean Engine Open API client with a concrete, typed method for every endpoint.
 */
export class OceanEngineClient extends BaseOceanEngineClient {
${methods.join('\n\n')}
}
`;
}

async function readDocsMap() {
  try {
    const source = await readFile(join(root, 'docs', 'docs-map.json'), 'utf8');
    return JSON.parse(source).docs ?? {};
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }
}

function escapeComment(value) {
  return String(value).replaceAll('*/', '*\\/').replaceAll('\n', ' ');
}

function stripPointer(type) {
  return type.replace(/^\*+/, '');
}

function lowerFirst(value) {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function goTypeToTs(input, namespace = '') {
  let type = input.trim().replace(/^\*+/, '');
  if (type.startsWith('[]')) return `${goTypeToTs(type.slice(2), namespace)}[]`;
  if (type.startsWith('map[')) {
    const match = type.match(/^map\[([^\]]+)\](.+)$/);
    return match ? `Record<${goTypeToTs(match[1], namespace)}, ${goTypeToTs(match[2], namespace)}>` : 'Record<string, unknown>';
  }
  if (type === 'interface{}' || type === 'any') return 'unknown';
  if (type === 'string') return 'string';
  if (type === 'bool') return 'boolean';
  if (/^(?:u?int(?:8|16|32|64)?|float32|float64)$/.test(type)) return 'number';
  if (type === 'byte' || type === '[]byte') return 'string';
  if (type === 'time.Time') return 'string';
  if (type === 'FormFile' || type === '*os.File' || type === 'os.File') return 'UploadFile';
  return `${namespace}${type.replace(/^models\./, '')}`;
}
