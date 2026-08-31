"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

import { trackGoal } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const form = site.contact.form;

type Status = "idle" | "submitting" | "error" | "success";

// Поля на синей плашке: прозрачный фон, белая рамка, белый текст.
const fieldClass =
  "w-full border border-on-accent/40 bg-transparent px-4 py-3.5 text-on-accent " +
  "placeholder:text-on-accent/50 transition-colors focus:border-on-accent focus:outline-none";

const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.06em] text-on-accent/70";

/** Форма «Прислать разбор» — заявка уходит в Telegram через /api/lead. */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      site: String(data.get("site") ?? ""),
      contact: String(data.get("contact") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    if (!payload.site.trim() || !payload.contact.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`lead request failed: ${res.status}`);
      trackGoal("lead_submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-on-accent/40 p-6 sm:p-8">
        <div className="flex size-11 items-center justify-center border border-on-accent">
          <Check className="size-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
          {form.thanks.title}
        </h3>
        <ul className="mt-3 space-y-1 text-on-accent/90">
          {form.thanks.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      {/* honeypot: скрыт от людей, ловит ботов */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Компания
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="lead-site" className={labelClass}>
            {form.site.label}
          </label>
          <input
            id="lead-site"
            name="site"
            type="text"
            required
            maxLength={500}
            placeholder={form.site.placeholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="lead-contact" className={labelClass}>
            {form.contact.label}
          </label>
          <input
            id="lead-contact"
            name="contact"
            type="text"
            required
            maxLength={500}
            placeholder={form.contact.placeholder}
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 border border-on-accent",
          "bg-on-accent px-6 py-3.5 text-xs font-medium uppercase tracking-[0.08em] text-accent",
          "transition-colors hover:bg-transparent hover:text-on-accent",
          "disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
        )}
      >
        <Send className="size-4" />
        {submitting ? form.sending : form.submit}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-on-accent/90">{form.error}</p>
      )}
    </form>
  );
}
