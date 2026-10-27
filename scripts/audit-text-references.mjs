import fs from 'node:fs';
const base='.next/server/app/';
const urls=[...fs.readFileSync(base+'sitemap.xml.body','utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
const short=fs.readFileSync('public/llms.txt','utf8');
const full=fs.readFileSync('public/llms-full.txt','utf8');
const fullUrls=[...full.matchAll(/^Canonical URL: (.+)$/gm)].map(x=>x[1]);
if(new Set(fullUrls).size!==urls.length||fullUrls.length!==urls.length)throw Error('Text reference page count differs from sitemap');
for(const url of urls){
 if(!short.includes(`](${url})`)||!fullUrls.includes(url))throw Error(`Missing text reference: ${url}`);
 const pathname=new URL(url).pathname;
 const html=fs.readFileSync(base+(pathname==='/'?'index':pathname.slice(1))+'.html','utf8');
 const og=html.match(/<meta property="og:url" content="([^"]+)"/);
 if(!og||new URL(og[1]).pathname!==new URL(url).pathname)throw Error(`Wrong social canonical URL: ${url}`);
 if(!html.includes('name="twitter:title"'))throw Error(`Missing social title: ${url}`);
}
if(/<script\b|__next_f\.push/.test(full))throw Error('Text reference contains framework code');
console.log(`TEXT REFERENCE AUDIT PASSED: ${urls.length} canonical pages, matching social URLs and clean public text.`);
