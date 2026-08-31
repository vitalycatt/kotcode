/**
 * Приём заявки с формы «Прислать разбор» и доставка её в Telegram.
 *
 * Заявка уходит через Bot API (sendMessage) в личку — нужен бот от @BotFather
 * (TELEGRAM_BOT_TOKEN) и chat_id получателя (TELEGRAM_CHAT_ID, узнать у
 * @userinfobot). Обе переменные — серверные, в клиент не попадают.
 */
import type { NextRequest } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Разумный потолок на длину поля — от мусора и переполнения сообщения.
const MAX_LEN = 500;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const site = String(data.site ?? "").trim().slice(0, MAX_LEN);
  const contact = String(data.contact ?? "").trim().slice(0, MAX_LEN);
  const honeypot = String(data.company ?? "").trim();

  // Honeypot: живой человек это скрытое поле не видит и не заполняет.
  // Ботам отвечаем «ок», ничего не отправляя, чтобы не подсказывать логику.
  if (honeypot) return Response.json({ ok: true });

  if (!site || !contact) {
    return Response.json({ ok: false, error: "empty" }, { status: 422 });
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error(
      "[lead] TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы — заявка не отправлена",
    );
    return Response.json(
      { ok: false, error: "not_configured" },
      { status: 500 },
    );
  }

  // Без parse_mode: обычный текст, экранирование не нужно и инъекций разметки нет.
  const text =
    `🐈 Новая заявка на разбор\n\n` +
    `Сайт / ниша: ${site}\n` +
    `Контакт: ${contact}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("[lead] Telegram API вернул ошибку", res.status, detail);
      return Response.json({ ok: false, error: "telegram" }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] не удалось достучаться до Telegram", err);
    return Response.json({ ok: false, error: "network" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
