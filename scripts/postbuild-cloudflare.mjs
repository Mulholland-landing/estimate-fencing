import fs from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const tmp = path.resolve('.dist-tmp-copy');
const sub = path.join(dist, 'estimate-fencing');

await fs.rm(tmp, { recursive: true, force: true });
await fs.cp(dist, tmp, { recursive: true, force: true });
await fs.rm(sub, { recursive: true, force: true });
await fs.mkdir(sub, { recursive: true });
await fs.cp(tmp, sub, { recursive: true, force: true });
await fs.rm(tmp, { recursive: true, force: true });
console.log('Nested dist/estimate-fencing/ created successfully for Cloudflare Pages.');
