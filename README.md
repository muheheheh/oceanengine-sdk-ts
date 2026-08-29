# Ocean Engine SDK for TypeScript

巨量引擎开放平台 TypeScript SDK。本项目为非官方社区实现。

- 1,209 个强类型 API 方法
- 10,573 个请求、响应模型与枚举
- 支持 GET、JSON POST、文件上传和二进制下载
- 方法注释包含官方 API 文档地址
- 支持 Node.js 18+ 和 Bun，零运行时依赖

## 安装

```bash
bun add oceanengine-sdk-ts
```

也可以使用 `npm`、`pnpm` 或 `yarn`。本包仅提供 ESM。

## 使用

```ts
import { OceanEngineClient } from 'oceanengine-sdk-ts';

const client = new OceanEngineClient({
  accessToken: Bun.env.OCEANENGINE_ACCESS_TOKEN,
});

const result = await client.projectListV30({
  advertiser_id: 123456789,
  page: 1,
  page_size: 20,
});

console.log(result.data?.list);
```

每个 API 都有独立的请求类型、响应类型、方法注释和官方文档链接。

### 获取 Access Token

```ts
const result = await client.oauth2AccessToken({
  app_id: 123456789,
  secret: Bun.env.OCEANENGINE_APP_SECRET!,
  auth_code: 'AUTH_CODE',
});
```

### 文件上传

```ts
await client.advertiserAvatarUploadV2({
  advertiser_id: 123456789,
  image_file: {
    data: imageBlob,
    filename: 'avatar.png',
  },
});
```

文件字段接受 `Blob` 或 `{ data: Blob, filename?: string }`。

### 二进制下载

```ts
const bytes = await client.asyncTaskDownloadV2({
  advertiser_id: 123456789,
  task_id: 987654321,
});
```

下载结果为 `Uint8Array`，可以使用 `Bun.write()` 或 Node.js `writeFile()` 保存。

## 配置

```ts
const client = new OceanEngineClient({
  accessToken: 'ACCESS_TOKEN',
  timeoutMs: 60_000,
  sandbox: false,
  operatorIp: '1.2.3.4',
});
```

支持 `baseUrl`、`timeoutMs`、`sandbox`、`operatorIp`、`headers`、`fetch`、`rateLimiter` 以及请求、响应、错误钩子。

具体方法的第二个参数可以覆盖单次请求配置：

```ts
await client.projectListV30(request, {
  timeoutMs: 10_000,
  sandbox: true,
  signal: abortController.signal,
});
```

日志、指标和 OpenTelemetry 可以通过钩子接入。SDK 默认不自动重试，避免非幂等 POST 请求产生重复操作。

## 错误与底层调用

HTTP 请求失败会抛出 `OceanEngineApiError`，其中包含 `status`、`headers` 和 `body`。HTTP 200 也可能包含业务错误，请检查响应的 `code` 和 `message`。

- 动态调用：`client.execute(endpoint, request)`
- 获取原始响应：`client.executeWithResponse(endpoint, request)`
- 调用未生成接口：`client.request(request)`
- 查询文档地址：`endpoints.ProjectListV30.docsUrl`

## License

Apache-2.0
