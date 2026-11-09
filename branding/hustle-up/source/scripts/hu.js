const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:900}});
await p.goto('file://'+process.cwd()+'/hu.html');await p.waitForSelector('body[data-done]');await p.waitForTimeout(400);
const el=await p.$('#c1');const buf=await el.screenshot();const b64=buf.toString('base64');
await p.evaluate(b64=>{const c=document.getElementById('c4');[[96,14,80],[48,124,104],[32,186,112],[20,226,118]].forEach(([s,x,y])=>{const im=document.createElement('img');im.src='data:image/png;base64,'+b64;im.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px`;c.appendChild(im)})},b64);
await p.waitForTimeout(200);await p.screenshot({path:'hu.png',fullPage:true});await b.close();})();
