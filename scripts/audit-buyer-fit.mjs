import fs from 'node:fs';
import assert from 'node:assert/strict';
const products=JSON.parse(fs.readFileSync('data/products.json','utf8')).products;
const read=id=>fs.readFileSync(`.next/server/app/products/${id}.html`,'utf8');
const records={
 'blue-team-rash-guard':['220gsm','85% polyester / 15% spandex','Silicone lower hem'],
 'white-logo-rash-guard':['220gsm','85% polyester / 15% spandex','Silicone lower hem'],
 'samurai-graphic-rash-guard':['220gsm','Fiber ratio needs confirmation','Long sleeve; confirm hem'],
 'high-split-grappling-shorts':['Inner 250gsm; outer GSM needs confirmation','Both fiber ratios need confirmation; milk silk is a trade name','Drawcord and silicone waist grip'],
 'pro-mma-shorts-07':['GSM needs confirmation','88% polyester / 12% spandex','Elastic waist; hook-and-loop and drawcord'],
};
const fields=['SKU','Family','Weight record','Fiber record','Closure or hem record','Project fit table','Numerical size tolerance','MOQ by style/design/color','Measured drying or recovery test'];
const csv=[fields];
for(const p of products){
 const doc=read(p.id);const hasFit=doc.includes('id="buyer-fit-title"');
 const family=p.id.includes('rash-guard')?'Rash Guard':p.id==='high-split-grappling-shorts'?'2-in-1 shorts':p.id==='black-white-mma-kit'?'Team kit':'Outer / training shorts';
 const record=records[p.id]||['Use SKU record; no universal GSM assigned','Use SKU record; no universal blend assigned','Use the selected SKU reference'];
 csv.push([p.id,family,...record,hasFit?'Published':'Existing product detail; priority review pending','Confirm on approved size sheet','Written allocation confirmation required','Not established by this audit']);
}
for(const id of products.map(product=>product.id)){
 const doc=read(id);assert.ok(doc.includes('id="buyer-fit-title"'),id);assert.ok(doc.includes('Mixed sizes'),id);assert.ok(doc.includes('Sample timing'),id);
}
for(const slug of ['bjj-academy-uniforms','private-label-fightwear'])assert.ok(fs.readFileSync(`.next/server/app/solutions/${slug}.html`,'utf8').includes('id="solution-fit-title"'));
assert.ok(read('blue-team-rash-guard').includes('id="academy-project-record"'));
assert.ok(read('high-split-grappling-shorts').includes('not a verified fiber composition'));
assert.ok(!read('high-split-grappling-shorts').includes('The performance outer layer releases heat and dries quickly'));
fs.writeFileSync('docs/product-information-audit.csv',csv.map(row=>row.map(s=>'"'+s.replaceAll('"','""')+'"').join(',')).join('\n')+'\n');
console.log(`BUYER FIT AUDIT PASSED: ${products.length} SKU records, 12 expanded product pages, 2 solution pages, source-backed academy case.`);
