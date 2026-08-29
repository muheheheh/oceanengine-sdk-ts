import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const goRoot = resolve(process.env.OCEANENGINE_GO_SDK ?? join(root, '..', 'ad_open_sdk_go'));
const apiDir = join(goRoot, 'api');
const outputFile = join(root, 'docs', 'docs-map.json');
const treeUrl = 'https://open.oceanengine.com/skiff/api/doc/client/tree/get/';
const labelTreeUrl = 'https://open.oceanengine.com/skiff/api/doc/client/label/tree/get/';
const categories = [
  { labelId: '7', name: '巨量营销' },
  { labelId: '12', name: '巨量千川' },
  { labelId: '37', name: '巨量本地推' },
  { labelId: '13', name: '巨量星图' },
  { labelId: '14', name: '企业号' },
  { labelId: '30', name: '群峰服务市场' },
];

const endpointPaths = new Set(await readEndpointPaths());
const labels = await fetchLabels();
const docs = new Map();

for (const category of categories) {
  const identifyKey = labels.get(category.labelId);
  if (!identifyKey) throw new Error(`Official docs label ${category.labelId} is unavailable`);
  const tree = await fetchTree(category.labelId, identifyKey);
  for (const node of flatten(tree.primary_doc_list ?? [])) {
    if (!endpointPaths.has(node.path) || docs.has(node.path)) continue;
    docs.set(node.path, {
      title: node.title,
      url: `https://open.oceanengine.com/labels/${category.labelId}/docs/${node.doc_id}`,
      docId: String(node.doc_id),
      labelId: category.labelId,
      identifyKey,
      category: category.name,
    });
  }
  console.log(`${category.name}: ${docs.size}/${endpointPaths.size} SDK paths matched`);
}

const entries = Object.fromEntries(
  [...docs.entries()].sort(([left], [right]) => left.localeCompare(right)),
);
const output = {
  $schema: './docs-map.schema.json',
  source: 'https://open.oceanengine.com/skiff/api/doc/client/tree/get/',
  syncedAt: new Date().toISOString(),
  matched: Object.keys(entries).length,
  total: endpointPaths.size,
  docs: entries,
};

await mkdir(dirname(outputFile), { recursive: true });
await writeFile(outputFile, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Saved ${output.matched}/${output.total} official document links to ${outputFile}`);

async function readEndpointPaths() {
  const files = (await readdir(apiDir))
    .filter((name) => name.startsWith('api_') && name.endsWith('.go') && name !== 'api_common.go')
    .sort();
  const paths = [];
  for (const file of files) {
    const source = await readFile(join(apiDir, file), 'utf8');
    const path = source.match(/localVarPath\s*:=\s*localBasePath\s*\+\s*"([^"]+)"/)?.[1];
    if (path) paths.push(path);
  }
  return paths;
}

async function fetchLabels() {
  const url = new URL(labelTreeUrl);
  url.searchParams.set('type', 'BUSINESS');
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Official labels tree failed with HTTP ${response.status}`);
  const payload = await response.json();
  if (payload.code !== 0) throw new Error(`Official labels tree failed: ${payload.msg}`);
  return new Map(
    [...flattenLabels(payload.data?.children ?? [])].map((label) => [String(label.id), label.identify_key]),
  );
}

async function fetchTree(labelId, identifyKey) {
  const url = new URL(treeUrl);
  url.searchParams.set('label_id', labelId);
  url.searchParams.set('identify_key', identifyKey);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Official docs tree failed with HTTP ${response.status}`);
  const payload = await response.json();
  if (payload.code !== 0) throw new Error(`Official docs tree failed: ${payload.msg}`);
  return payload.data ?? {};
}

function* flatten(nodes) {
  for (const node of nodes) {
    yield node;
    yield* flatten(node.child_docs ?? []);
  }
}

function* flattenLabels(labels) {
  for (const label of labels) {
    yield label;
    yield* flattenLabels(label.children ?? []);
  }
}
