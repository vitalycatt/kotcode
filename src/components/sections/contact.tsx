import { Mail, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contacts, site } from "@/content/site";

const channels = [
  { data: contacts.telegram, icon: Send, primary: true },
  { data: contacts.whatsapp, icon: MessageCircle, primary: false },
  { data: contacts.email, icon: Mail, primary: false },
];

export function Contact() {
  return (
    <section id="contact" className="border-t bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {site.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {site.contact.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {channels.map(({ data, icon: Icon, primary }) => (
            <Button
              key={data.label}
              size="lg"
              variant={primary ? "default" : "outline"}
              className="w-full sm:w-auto"
              render={
                <a href={data.href} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Icon className="size-4" />
              {data.handle ?? data.label}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{site.contact.note}</p>
      </div>
    </section>
  );
}
