import { Btn } from "@/components/btn";
import { contacts, site } from "@/content/site";

const channels = [contacts.telegram, contacts.whatsapp, contacts.email];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b bg-accent px-5 py-16 text-on-accent md:px-10 md:py-24"
    >
      <div className="text-xs font-medium uppercase tracking-[0.06em] text-on-accent/70">
        Контакты
      </div>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        {site.contact.title}
      </h2>
      <p className="mt-4 max-w-xl text-on-accent/90">{site.contact.subtitle}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {channels.map((c) => (
          <Btn key={c.label} href={c.href} variant="onAccent" external>
            {c.handle ?? c.label}
          </Btn>
        ))}
      </div>

      <p className="mt-6 text-sm text-on-accent/70">{site.contact.note}</p>
    </section>
  );
}
