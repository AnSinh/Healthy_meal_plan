// Xuất trang hướng dẫn nhận diện ra PNG + PDF.
// Chạy: cd branding/hustle-up/source && node scripts/guideline.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 1 });
  p.on('console', m => { if (m.type() === 'error') console.log('console:', m.text()) });
  p.on('pageerror', e => console.log('pageerror:', e.message));
  await p.goto('file://' + path.resolve('guideline.html')); await p.waitForSelector('body[data-done]', { timeout: 15000 }); await p.waitForTimeout(400);
  await p.screenshot({ path: '../final/huong-dan-nhan-dien.png', fullPage: true });
  const h = await p.evaluate(() => document.body.scrollHeight);
  await p.pdf({ path: '../final/huong-dan-nhan-dien.pdf', width: '1200px', height: h + 'px', printBackground: true, pageRanges: '1' });
  await b.close();
})();
