# Ocean Engine SDK for TypeScript

巨量引擎开放平台 TypeScript SDK。本项目为非官方社区实现。

- 1,209 个强类型 API 方法
- 10,573 个请求、响应模型与枚举
- 支持 GET、JSON POST、文件上传和二进制下载
- 方法注释包含官方 API 文档地址
- 支持 Node.js 18+ 和 Bun，使用 lossless-json 处理 64 位整数

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

### 64 位整数（0.2.0）

Go 模型中的 `int64/uint64` 生成 `Int64 = number | bigint`。安全范围内的整数仍可传 `number`；大整数 ID 应从字符串构造 `bigint`，不能先经过 `Number(id)`。

```ts
const result = await client.projectListV30({
  advertiser_id: BigInt('1864603190230040'),
  filtering: { ids: [BigInt('9223372036854775807')] },
  page: 1,
  page_size: 20,
});
const projectIds = result.data?.list?.map(project => String(project.project_id));
```

SDK 将 `bigint` 序列化为不带引号的 JSON 数字，覆盖 POST、GET 嵌套参数及表单。生成方法和 `execute` 按上游模型解析响应：64 位整数字段在安全范围内返回 `number`，超出范围返回 `bigint`；浮点数、字符串和数值枚举保持各自类型。上游模型中的通用 JSON（`unknown`）也会保留不安全整数为 `bigint`，包括动态报表维度与组织树深层节点（0.2.1 修正）。传入不安全的 `number` 会在发送请求前报错，因为已经丢失的精度无法恢复。

业务 JSON 协议如需字符串 ID，请在 SDK 边界使用 `String(id)`。不要直接对包含 `bigint` 的响应调用 `JSON.stringify`。底层 `request` 没有接口模型信息，JSON 响应保留普通 `number` 行为；无损调用应使用生成方法或 `execute`。

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

## 生成与构建

生成源为官方 `oceanengine/ad_open_sdk_go` 的 `v1.1.93`。默认读取相邻的 `../ad_open_sdk_go`，可通过 `OCEANENGINE_GO_SDK` 指定路径。

```bash
npm ci
npm run generate
npm run build
npm pack --dry-run
```

修改生成规则应编辑 `scripts/generate.mjs`，传输和编解码逻辑分别在 `src/client.ts`、`src/json.ts`。`src/generated/` 中的方法、模型、endpoint 和整数元数据均应重新生成，不直接编辑。发布时生成文件与生成器一同提交。

## License

Apache-2.0
