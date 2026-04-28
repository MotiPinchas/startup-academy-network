import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: 'Missing env vars' }, { status: 500 });
  }

  const text = `🔔 חיבור חדש!\nמישהו לחץ "קבע איתי" על *${name}*`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });

  return NextResponse.json({ ok: true });
}
