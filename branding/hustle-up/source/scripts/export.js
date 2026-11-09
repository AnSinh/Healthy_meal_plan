// Xuất từng logo ra PNG nền trong suốt (x3) vào final/logo/.
// Chạy: cd branding/hustle-up/source && node scripts/export.js
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const out = path.resolve('../final/logo'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 3 });
  p.on('pageerror', e => console.log('pageerror:', e.message));
  await p.goto('file://' + path.resolve('export.html')); await p.waitForSelector('body[data-done]', { timeout: 15000 }); await p.waitForTimeout(400);
  const names = JSON.parse(await p.evaluate(() => document.body.dataset.jobs));
  for (const n of names) { await (await p.$('#' + n)).screenshot({ path: path.join(out, n + '.png'), omitBackground: true }); }
  await b.close(); console.log(names.length, 'files');
})();
