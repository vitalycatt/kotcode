import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" aria-label={site.brand.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            render={<a href="#contact" />}
            className="hidden sm:inline-flex"
          >
            {site.cta.primary}
          </Button>
        </div>
      </div>
    </header>
  );
}
