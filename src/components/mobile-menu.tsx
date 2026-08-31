"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Гамбургер-меню с якорями навигации — только на мобильных.
 * Панель раскрывается под шапкой (шапка — sticky и служит контейнером
 * позиционирования для абсолютной панели).
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        aria-label="Меню"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer items-center border-l px-5 transition-colors hover:bg-ink hover:text-paper"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Панель всегда в DOM — раскрывается плавно по высоте (grid-rows) и фейдом */}
      <div
        className={cn(
          "absolute inset-x-0 top-full grid overflow-hidden bg-paper transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]",
        )}
      >
        <nav
          aria-hidden={!open}
          className={cn(
            "flex min-h-0 flex-col overflow-hidden transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          {site.nav.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="border-t px-5 py-4 text-[13px] font-medium uppercase tracking-[0.06em] hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
