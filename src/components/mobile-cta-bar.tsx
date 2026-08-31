"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";

import { GoalLink } from "@/components/goal-link";
import { cn } from "@/lib/utils";
import { primaryContact, site } from "@/content/site";

/**
 * Липкая полоса действий внизу экрана — только на мобильных.
 * Слева текстовый CTA к форме, справа иконка Telegram. Появляется после
 * первого экрана, чтобы не спорить с CTA в шапке на самом верху.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 flex h-14 border-t bg-paper transition-transform duration-200 md:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <GoalLink
        href="#contact"
        goal="cta_contact"
        goalParams={{ place: "mobile_bar" }}
        className="flex flex-1 items-center px-5 text-[13px] font-medium uppercase tracking-[0.06em]"
      >
        {site.cta.bar}
      </GoalLink>
      <GoalLink
        href={primaryContact.href}
        target="_blank"
        rel="noopener noreferrer"
        goal="msg_telegram"
        goalParams={{ place: "mobile_bar" }}
        aria-label={site.cta.writeIn(primaryContact.label)}
        className="flex w-14 items-center justify-center border-l bg-accent text-on-accent transition-colors hover:bg-on-accent hover:text-accent"
      >
        <Send className="size-5" />
      </GoalLink>
    </div>
  );
}
