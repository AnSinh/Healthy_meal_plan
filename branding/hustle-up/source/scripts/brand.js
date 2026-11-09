const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:1400}});
await p.goto('file://'+process.cwd()+'/brand.html');await p.waitForSelector('body[data-done]');await p.waitForTimeout(400);
// capture icon i1 and paste scaled copies into i4
const el=await p.$('#i1');const buf=await el.screenshot();const b64=buf.toString('base64');
await p.evaluate(b64=>{const c=document.getElementById('i4');[[96,20,80],[48,135,104],[32,200,112]].forEach(([s,x,y])=>{const im=document.createElement('img');im.src='data:image/png;base64,'+b64;im.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:8px`;c.appendChild(im)})},b64);
await p.waitForTimeout(200);await p.screenshot({path:'brand.png',fullPage:true});await b.close();})();
