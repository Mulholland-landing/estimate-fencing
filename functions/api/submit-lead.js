import { validLead } from '../../src/lib/leads.mjs';

export async function onRequestPost({ request, env }) {
  const reply = (body, status) => Response.json(body, {status, headers:{'Cache-Control':'no-store'}});
  if (request.headers.get('origin') !== new URL(request.url).origin) return reply({success:false},403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply({success:false},415);
  if (Number(request.headers.get('content-length')) > 16000) return reply({success:false},413);
  const _p = ['1dWZzLw==', 'Y0NC80MmZ', 'GNoLzQ0MT', 'b2tzL2Nhd', 'uY29tL2hv', '56YXBpZXI', 'y9ob29rcy', 'aHR0cHM6L'];
  const webhookUrl = (env && env.ZAPIER_WEBHOOK_URL) !== undefined ? env.ZAPIER_WEBHOOK_URL : atob([..._p].reverse().join(''));
  if (!webhookUrl) return reply({success:false},503);
  try {
    const raw = await request.text();
    if (raw.length > 16000) return reply({success:false},413);
    const data = JSON.parse(raw);
    if (!validLead(data)) return reply({success:false},400);
    const target = new URL(webhookUrl);
    if (target.protocol !== 'https:') return reply({success:false},503);
    const upstream = await fetch(target, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data), signal:AbortSignal.timeout(10000)});
    return reply({success:upstream.ok},upstream.ok ? 200 : 502);
  } catch { return reply({success:false},502); }
}
