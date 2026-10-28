// Read-only smoke check. This never submits an inquiry or sends a test email.
const base=process.env.AUDIT_BASE_URL||'https://www.tontongear.com';
const paths=['/','/customization/sublimated-rash-guards','/products/blue-team-rash-guard','/products/high-split-grappling-shorts','/solutions/bjj-academy-uniforms','/solutions/private-label-fightwear','/project-builder'];
let failed=false;
for(let start=0;start<paths.length;start+=3){
 const results=await Promise.all(paths.slice(start,start+3).map(async path=>{
  const r=await fetch(base+path,{signal:AbortSignal.timeout(25000)});const html=await r.text();
  const result={path,status:r.status,h1:(html.match(/<h1[\s>]/g)||[]).length,canonical:(html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1] || "").replace(/\/$/, "") === (`https://www.tontongear.com${path}`).replace(/\/$/, ""),noindex:/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html)};
  if(!r.ok||result.h1!==1||!result.canonical||result.noindex)failed=true;
  return result;
 }));results.forEach(result=>console.log(JSON.stringify(result)));
}
const rfq=await fetch(base+'/api/rfq',{signal:AbortSignal.timeout(20000)});const capability=await rfq.json();console.log(JSON.stringify({path:'/api/rfq',status:rfq.status,onlineSubmissionAvailable:capability.onlineSubmissionAvailable,scope:'GET only; mail delivery not tested'}));
if(failed)process.exitCode=1;
