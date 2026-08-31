import { AtSign, Mail, Send } from "lucide-react";

import { Container } from "@/components/container";
import { GoalLink } from "@/components/goal-link";
import { LeadForm } from "@/components/lead-form";
import { contacts, site } from "@/content/site";

const channels = [
  { data: contacts.telegram, goal: "msg_telegram", Icon: Send },
  { data: contacts.instagram, goal: "msg_instagram", Icon: AtSign },
  { data: contacts.email, goal: "msg_email", Icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="border-b">
      <Container className="bg-accent px-5 py-16 text-on-accent md:px-10 md:py-24">
        <div className="text-xs font-medium uppercase tracking-[0.06em] text-on-accent/70">
          Контакты
        </div>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {site.contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-on-accent/90">{site.contact.subtitle}</p>

        {/* Слева форма (основной путь), справа — прямые каналы отдельным блоком. */}
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-[1.5fr_1fr]">
          <LeadForm />

          <aside className="md:border-l md:border-on-accent/40 md:pl-12">
            <div className="text-xs font-medium uppercase tracking-[0.06em] text-on-accent/70">
              {site.contact.form.direct}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {channels.map(({ data, goal, Icon }) => (
                <GoalLink
                  key={data.label}
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  goal={goal}
                  goalParams={{ place: "contact" }}
                  className="group flex items-center justify-between gap-3 border border-on-accent/40 px-4 py-3.5 transition-colors hover:border-on-accent hover:bg-on-accent hover:text-accent"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-4 shrink-0" />
                    <span className="text-sm">{data.handle ?? data.label}</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.06em] text-on-accent/50 transition-colors group-hover:text-accent/60">
                    {data.label}
                  </span>
                </GoalLink>
              ))}
            </div>
          </aside>
        </div>

        <p className="mt-8 text-sm text-on-accent/70">{site.contact.note}</p>
      </Container>
    </section>
  );
}
