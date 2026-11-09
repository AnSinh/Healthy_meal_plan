// Xuất bảng 5 phương án biểu tượng "Hu". Chạy: cd branding/hustle-up/source && node scripts/hu-options.js
const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 1000 } });
  p.on('pageerror', e => console.log('pageerror:', e.message));
  await p.goto('file://' + path.resolve('hu-options.html')); await p.waitForSelector('body[data-done]', { timeout: 15000 }); await p.waitForTimeout(400);
  await p.screenshot({ path: '../explorations/hu-5-phuong-an-moi.png', fullPage: true }); await b.close(); })();
