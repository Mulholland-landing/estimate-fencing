import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const manifest = {};
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (/\.(jpe?g|png|webp)$/i.test(file)) {
      const source = '/' + file.replaceAll('\\', '/').replace(/^public\//, '');
      const metadata = await sharp(file).metadata();
      const widths = [...new Set([600, 800, 1000, 1920, 2048].map(w => Math.min(w, metadata.width)))];
      manifest[source] = [];
      for (const width of widths) {
        const target = `${source.replace(/\.[^.]+$/, '')}-${width}.webp`.replace('/assets/', '/responsive/');
        await fs.mkdir(path.dirname('public' + target), { recursive: true });
        await sharp(file).rotate().resize({width, withoutEnlargement:true}).sharpen({sigma:0.5}).webp({quality:86}).toFile('public' + target);
        manifest[source].push({width, src:target});
      }
    }
  }
}
await walk('public/assets');
await fs.mkdir('src/data', {recursive:true});
await fs.writeFile('src/data/images.json', JSON.stringify(manifest));
console.log(`Optimized ${Object.keys(manifest).length} images without upscaling.`);
