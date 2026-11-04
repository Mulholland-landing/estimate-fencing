export function makePayload(form, interest, win, doc) {
  const get = key => String(form.get(key) || '').trim();
  const now = new Date();
  const params = new URL(win.location.href).searchParams;
  return {
    full_name: get('full_name'), name: get('full_name'), email: get('email'), phone: get('phone'),
    zip_code: get('zip_code'), zip: get('zip_code'), sms_opt_in: form.get('sms_opt_in') ? 'Yes' : 'No',
    Interest: interest || get('Interest') || 'Select a fencing style', interest: interest || get('Interest') || 'Select a fencing style',
    Url: win.location.href, Title: doc.title.trim(), landing: 'instant-project-estimator',
    ...Object.fromEntries(['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].map(key => [key, params.get(key) || ''])),
    submission_date_time: now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' (PT)',
    submission_date_iso: now.toISOString(), user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen_resolution: `${win.screen.width}x${win.screen.height}`, website: get('website'),
  };
}

export function validLead(data) {
  return !!data && typeof data === 'object' && !data.website &&
    typeof data.full_name === 'string' && data.full_name.trim().length >= 2 && data.full_name.length <= 180 &&
    typeof data.email === 'string' && data.email.length <= 180 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.phone === 'string' && data.phone.replace(/\D/g, '').length >= 7 && data.phone.length <= 40 &&
    typeof data.zip_code === 'string' && /^\d{5}(-\d{4})?$/.test(data.zip_code) &&
    typeof data.Interest === 'string' && data.Interest.length <= 1000;
}
