const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:1430}});
await p.goto('file://'+process.cwd()+'/face9.html');await p.waitForSelector('body[data-done]');await p.waitForTimeout(300);await p.screenshot({path:'face9.png',fullPage:true});await b.close();})();
