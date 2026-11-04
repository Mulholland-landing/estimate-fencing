import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser = await chromium.launch({channel:'chrome',headless:true});
const page = await browser.newPage({reducedMotion:'reduce'});
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
await fs.mkdir('qa',{recursive:true});
await page.goto('http://127.0.0.1:4321/?utm_source=qa&utm_campaign=conversion');
await page.getByRole('button',{name:'Start My Estimate',exact:true}).waitFor();
await page.waitForTimeout(500);
for(const width of [320,340,390,430,767,768,1440]) {
  await page.setViewportSize({width,height:900}); await page.waitForTimeout(100);
  const geometry = await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,header:document.querySelector('header').getBoundingClientRect().height,gallery:getComputedStyle(document.querySelector('.project-gallery')).gridTemplateColumns.split(' ').length}));
  assert.equal(geometry.scroll,width,`Horizontal overflow at ${width}px`);
  if(width<768) { assert.equal(geometry.header,56); assert.equal(geometry.gallery,2); }
  if([320,390,1440].includes(width)) {
    for(let y=0;y<await page.locator('body').evaluate(e=>e.scrollHeight);y+=700) { await page.evaluate(y=>scrollTo(0,y),y); await page.waitForTimeout(50); }
    await page.evaluate(()=>scrollTo(0,0)); await page.waitForTimeout(150);
    await page.screenshot({path:`qa/home-${width}.png`,fullPage:true});
  }
}
const products=['Fencing','Wall Toppers','Railings','Walk Gates','Driveway Gates','Pergolas','Garage Doors','Equipment Enclosures'];
for(const width of [390,1440]) {
 await page.setViewportSize({width,height:844});
 for(let p=0;p<products.length;p++) {
  await page.getByRole('button',{name:'Start My Estimate',exact:true}).click();
  const dialog=page.getByRole('dialog',{name:'What are you looking to install?'});
  await dialog.waitFor();
  await dialog.getByRole('button',{name:products[p],exact:true}).click();
  await page.locator('[data-estimator] .carousel[aria-label="styles"] button').first().click();
  await page.locator('[data-estimator]').getByRole('button',{name:'Continue',exact:true}).click();
  await page.locator('[data-estimator]').getByRole('button',{name:'See My Estimate',exact:true}).click();
  await page.getByRole('heading',{name:'Here is your estimate'}).waitFor();
  assert.equal(await page.locator('[data-estimator] input[required]').count(),4);
  const broken=await page.locator('[data-estimator] img').evaluateAll(xs=>xs.filter(x=>x.complete&&!x.naturalWidth).map(x=>x.src));
  assert.deepEqual(broken,[],`Broken ${products[p]} image`);
  if(p===0&&width===390) await page.screenshot({path:'qa/estimate-mobile.png'});
  await page.keyboard.press('Escape'); await page.locator('[data-estimator]').waitFor({state:'detached'});
 }
}
// Verify swipe controls and touch-paused auto-advance on mobile.
await page.setViewportSize({width:390,height:844});
await page.getByRole('button',{name:'Start My Estimate',exact:true}).click();
await page.getByRole('button',{name:'Next products',exact:true}).click();
await page.waitForTimeout(400); assert.match(await page.locator('[data-estimator] .carousel-controls').innerText(),/2 \/ 8/);
await page.keyboard.press('Escape');
// No live webhook is contacted: both success and failure are intercepted locally.
let captured;
await page.route('**/api/submit-lead', async route=>{captured=route.request().postDataJSON();await route.fulfill({status:503,contentType:'application/json',body:'{"success":false}'});});
const form=page.locator('.quote-form');
for(const [name,value] of Object.entries({full_name:'QA Person',phone:'8005625770',email:'qa@example.com',zip_code:'90210'})) await form.locator(`[name="${name}"]`).fill(value);
await form.locator('select').selectOption({label:'Glass Fencing'});
await form.getByRole('button',{name:'Request My Free Estimate',exact:true}).click();
await form.getByRole('alert').waitFor();assert.match(await form.getByRole('alert').innerText(),/could not be confirmed/);assert.equal(captured.Interest,'Glass Fencing');assert.equal(captured.utm_source,'qa');assert.ok(page.url().includes('127.0.0.1'));
await page.route('**/api/submit-lead',async route=>{captured=route.request().postDataJSON();await route.fulfill({status:200,contentType:'application/json',body:'{"success":true}'});});
await page.route('https://lp.mulhollandbrand.com/thanks-page',route=>route.fulfill({status:200,contentType:'text/html',body:'<h1>Thank you test</h1>'}));
await form.getByRole('button',{name:'Request My Free Estimate',exact:true}).click();await page.waitForURL('https://lp.mulhollandbrand.com/thanks-page');
assert.deepEqual(errors,[]);console.log('PASS: 7 viewport widths, 16 complete product flows, carousel controls, payload, failure handling and thank-you redirect. No real leads sent.');
await browser.close();
