import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makePayload, validLead } from '../src/lib/leads.mjs';
import { onRequestPost } from '../functions/api/submit-lead.js';

function payload() {
  const form = new FormData();
  for (const [key,value] of Object.entries({full_name:'Test Person',email:'test@example.com',phone:'8005625770',zip_code:'90210'})) form.set(key,value);
  return makePayload(form,'Fencing · Hi-Tech · 120 ft · Matte Black ($11,500 - $14,700)',{location:{href:'https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=campaign&utm_content=ad&utm_term=fence'},screen:{width:390,height:844}},{title:'  Mulholland Brand — Instant Project Estimator  '});
}
test('payload includes exact context, UTMs, contact fields, consent and estimate',()=>{
  const data=payload(); assert.equal(data.Title,'Mulholland Brand — Instant Project Estimator'); assert.match(data.Url,/utm_source=google/); assert.match(data.Interest,/120 ft/); assert.equal(data.name,data.full_name); assert.equal(data.zip,data.zip_code); assert.equal(data.sms_opt_in,'No'); assert.equal(data.screen_resolution,'390x844'); assert.equal(data.utm_campaign,'campaign'); assert.equal(data.utm_term,'fence'); assert.ok(Date.parse(data.submission_date_iso)); assert.match(data.submission_date_time,/\(PT\)$/); assert.ok(validLead(data));
});
test('invalid and bot submissions fail validation',()=>{
  const data=payload(); for(const overrides of [{website:'spam'},{email:'bad'},{zip_code:'123'},{phone:'1'},{full_name:1},{Interest:[]}])assert.equal(validLead({...data,...overrides}),false);
});
const request = (data, origin='https://example.com') => new Request('https://example.com/api/submit-lead',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(data)});
test('proxy rejects cross-origin requests and absent configuration',async()=>{
  assert.equal((await onRequestPost({request:request(payload(),'https://other.example'),env:{}})).status,403);
  assert.equal((await onRequestPost({request:request(payload()),env:{ZAPIER_WEBHOOK_URL:''}})).status,503);
});
test('proxy sends to configured webhook and reports upstream failure honestly',async()=>{
  const original=globalThis.fetch; let forwarded;
  try {
    globalThis.fetch=async(url,options)=>{forwarded=JSON.parse(options.body); return new Response('{}',{status:200});};
    const res=await onRequestPost({request:request(payload()),env:{ZAPIER_WEBHOOK_URL:'https://example.com/mock-webhook'}});
    assert.equal(res.status,200); assert.deepEqual(await res.json(),{success:true}); assert.equal(forwarded.email,'test@example.com');
    globalThis.fetch=async()=>new Response('{}',{status:500});
    assert.equal((await onRequestPost({request:request(payload()),env:{ZAPIER_WEBHOOK_URL:'https://example.com/mock-webhook'}})).status,502);
  } finally { globalThis.fetch=original; }
});
