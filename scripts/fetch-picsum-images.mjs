import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root is one level up from /scripts
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_FILE = path.join(ROOT, "src", "data", "products.js");
const OUT_DIR = path.join(ROOT, "public", "product-images");

function readProductIds() {
  const txt = fs.readFileSync(PRODUCTS_FILE, "utf8");
  const ids = [];
  const re = /"id"\s*:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(txt)) !== null) ids.push(m[1]);
  // de-dupe while preserving order
  return [...new Set(ids)];
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function request(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "RomanServicesImageFetcher/1.0" } }, (res) => {
      resolve(res);
    }).on("error", reject);
  });
}

async function downloadFollowRedirects(url, outPath, maxRedirects = 5) {
  let current = url;
  for (let i = 0; i <= maxRedirects; i++) {
    const res = await request(current);

    // Follow redirects
    if (res.statusCode && [301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
      current = new URL(res.headers.location, current).toString();
      res.resume();
      continue;
    }

    if (res.statusCode !== 200) {
      res.resume();
      throw new Error(`Failed (${res.statusCode}) for ${current}`);
    }

    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(outPath);
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
      file.on("error", reject);
    });
    return;
  }
  throw new Error(`Too many redirects for ${url}`);
}

async function main() {
  ensureDir(OUT_DIR);

  const ids = readProductIds();
  console.log(`Found ${ids.length} products/services. Downloading images to ${path.relative(ROOT, OUT_DIR)} ...`);

  let ok = 0, skipped = 0, failed = 0;

  for (const id of ids) {
    const outPath = path.join(OUT_DIR, `${id}.jpg`);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      skipped++;
      continue;
    }

    const url = `https://picsum.photos/seed/${encodeURIComponent(id)}/800/600`;
    try {
      await downloadFollowRedirects(url, outPath);
      ok++;
      process.stdout.write(".");
    } catch (e) {
      failed++;
      console.error(`\n[ERROR] ${id}: ${e.message}`);
    }
  }

  console.log(`\nDone. Downloaded: ${ok}, skipped: ${skipped}, failed: ${failed}.`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
