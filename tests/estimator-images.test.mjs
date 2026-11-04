import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';

const styles = JSON.parse(await fs.readFile(new URL('../src/data/estimator-style-images.json', import.meta.url), 'utf8'));
const images = JSON.parse(await fs.readFile(new URL('../src/data/images.json', import.meta.url), 'utf8'));

test('all 55 non-fencing styles have distinct original photos and working local variants', async () => {
  assert.deepEqual(Object.fromEntries(Object.entries(styles).map(([key, entries]) => [key, entries.length])), {
    toppers: 8, railings: 8, walk: 8, drive: 8, pergolas: 9, garage: 7, enclosure: 7,
  });
  for (const [category, entries] of Object.entries(styles)) {
    assert.equal(new Set(entries.map(item => item.src)).size, entries.length, `${category}: repeated URLs`);
    assert.equal(new Set(entries.map(item => item.sha256)).size, entries.length, `${category}: repeated photos`);
    for (const entry of entries) {
      assert.equal(new URL(entry.sourceUrl).hostname, 'mulhollandbrand.com');
      const source = await fs.readFile(new URL('../public' + entry.src, import.meta.url));
      assert.equal(crypto.createHash('sha256').update(source).digest('hex'), entry.sha256, `${category}/${entry.name}: source mismatch`);
      assert.ok(images[entry.src]?.length, `${category}/${entry.name}: missing responsive image`);
      for (const variant of images[entry.src]) {
        assert.ok(variant.width <= entry.width, 'Never upscale source photographs');
        await fs.access(new URL('../public' + variant.src, import.meta.url));
      }
    }
  }
});
