import { Camera, Mail, MessageCircle, Send } from "lucide-react";

import { Logo } from "@/components/logo";
import { contacts, site } from "@/content/site";

const socials = [
  { data: contacts.telegram, icon: Send },
  { data: contacts.whatsapp, icon: MessageCircle },
  { data: contacts.instagram, icon: Camera },
  { data: contacts.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">
            {site.footer.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ data, icon: Icon }) => (
            <a
              key={data.label}
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.brand.name} · {site.brand.domain} ·{" "}
        {site.footer.rights}
      </div>
    </footer>
  );
}
