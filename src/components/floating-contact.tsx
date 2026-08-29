import { Send } from "lucide-react";

import { primaryContact, site } from "@/content/site";

/** Плавающая кнопка «написать» — только на мобильных. */
export function FloatingContact() {
  return (
    <a
      href={primaryContact.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.cta.writeIn(primaryContact.label)}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center border border-ink bg-accent text-on-accent transition-colors hover:bg-on-accent hover:text-accent md:hidden"
    >
      <Send className="size-6" />
    </a>
  );
}
