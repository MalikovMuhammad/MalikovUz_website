/**
 * Cloudflare Worker: relays the landing page contact form to a Telegram chat.
 *
 * Deploy: paste this file into a new Cloudflare Worker (dash.cloudflare.com ->
 * Workers & Pages -> Create -> "Hello World" -> Edit code -> paste, replacing
 * the default content).
 *
 * Required Worker secrets/vars (Settings -> Variables):
 *   BOT_TOKEN       - secret  - token from @BotFather
 *   CHAT_ID         - secret  - your numeric Telegram chat id
 *   ALLOWED_ORIGIN  - var     - e.g. https://malikov.uz (your site's origin)
 */

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || '*';

    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400, corsHeaders);
    }

    const name = String(data.name || '').trim().slice(0, 200);
    const phone = String(data.phone || '').trim().slice(0, 50);
    const message = String(data.message || '').trim().slice(0, 2000);

    if (!name || !phone) {
      return jsonResponse({ ok: false, error: 'Missing required fields' }, 400, corsHeaders);
    }

    const text =
      '📩 Новая заявка с сайта\n\n' +
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      (message ? `Сообщение: ${message}\n` : '');

    const tgResponse = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text }),
    });

    if (!tgResponse.ok) {
      return jsonResponse({ ok: false, error: 'Telegram delivery failed' }, 502, corsHeaders);
    }

    return jsonResponse({ ok: true }, 200, corsHeaders);
  },
};

function jsonResponse(body, status, corsHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
