/**
 * Post-build pre-rendering script.
 * Runs after `vite build` to produce static HTML for every route so that
 * Googlebot and other crawlers receive fully-rendered HTML instead of an
 * empty SPA shell.
 *
 * Usage (called automatically by `npm run build`):
 *   node scripts/prerender.mjs
 *
 * Environment variables:
 *   CHROME_PATH  – override the Chrome/Chromium executable (optional)
 *   PRERENDER_TIMEOUT_MS – extra ms to wait after networkidle0 (default: 2000)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 4934;
const EXTRA_WAIT_MS = Number(process.env.PRERENDER_TIMEOUT_MS ?? 2000);

const ROUTES = [
  '/',
  '/services',
  '/web-development',
  '/mobile-app-development',
  '/ai-automation',
  '/software-development',
  '/digital-marketing',
  '/logo-design',
  '/blog',
  '/blog/future-of-mobile-app-development-nvhotech',
  '/blog/ai-and-web-development-revolution',
  '/book-appointment',
  '/legal/privacy-policy',
  '/legal/terms-of-service',
  '/legal/refund-policy',
  '/legal/cookie-policy',
  '/legal/gdpr',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(DIST_DIR, urlPath);

    // SPA fallback: if path doesn't resolve to a file, serve index.html
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-cache');

    try {
      res.end(fs.readFileSync(filePath));
    } catch {
      res.statusCode = 404;
      res.end('Not found');
    }
  });

  return new Promise(resolve => server.listen(PORT, () => resolve(server)));
}

async function run() {
  console.log('\n[prerender] Starting pre-render process...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('[prerender] dist/ not found — run `vite build` first.');
    process.exit(1);
  }

  const server = await startServer();

  const launchArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];
  const launchOptions = {
    headless: true,
    args: launchArgs,
    ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}),
  };

  const browser = await puppeteer.launch(launchOptions);
  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      // Suppress expected browser noise; surface real errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          const text = msg.text();
          if (!text.includes('favicon') && !text.includes('NET::') && !text.includes('manifest')) {
            process.stderr.write(`  [browser:${route}] ${text}\n`);
          }
        }
      });

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });

      // Extra wait for React concurrent rendering / lazy Suspense boundaries
      if (EXTRA_WAIT_MS > 0) {
        await new Promise(r => setTimeout(r, EXTRA_WAIT_MS));
      }

      // react-helmet-async appends new tags with data-rh="true" alongside the
      // original hardcoded tags from index.html. Remove the originals so
      // Googlebot only sees one canonical/description/og per page.
      await page.evaluate(() => {
        document.querySelectorAll('[data-rh="true"]').forEach(rhEl => {
          const tag = rhEl.tagName.toLowerCase();
          const name = rhEl.getAttribute('name');
          const property = rhEl.getAttribute('property');
          const rel = rhEl.getAttribute('rel');
          const httpEquiv = rhEl.getAttribute('http-equiv');

          let selector = null;
          if (name)       selector = `${tag}[name="${name}"]:not([data-rh])`;
          else if (property) selector = `${tag}[property="${property}"]:not([data-rh])`;
          else if (rel)   selector = `link[rel="${rel}"]:not([data-rh])`;
          else if (httpEquiv) selector = `${tag}[http-equiv="${httpEquiv}"]:not([data-rh])`;

          if (selector) {
            document.querySelectorAll(selector).forEach(el => el.remove());
          }
        });
      });

      const html = await page.content();
      await page.close();

      const outputDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf-8');

      console.log(`  ✓ ${route}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n[prerender] Done — ${success} routes rendered, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

run().catch(err => {
  console.error('[prerender] Fatal:', err);
  process.exit(1);
});
