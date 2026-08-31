import { Container } from "@/components/container";
import { GoalLink } from "@/components/goal-link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-paper">
      <Container className="flex">
        {/* Монограмма в рамке слева */}
        <a
          href="#top"
          aria-label={site.brand.name}
          className="border-r px-5 py-4 text-[17px]"
        >
          <Logo />
        </a>

        {/* Навигация — UPPERCASE, мелкая, с трекингом */}
        <nav className="hidden flex-1 items-center gap-7 px-5 text-xs font-medium uppercase tracking-[0.06em] md:flex">
          {site.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Правый бокс в рамке — контурный CTA вместо языкового тумблера */}
        <GoalLink
          href="#contact"
          goal="cta_contact"
          goalParams={{ place: "header" }}
          className="ml-auto flex items-center border-l px-5 text-xs font-medium uppercase tracking-[0.06em] transition-colors hover:bg-ink hover:text-paper md:ml-0"
        >
          {site.cta.write}
        </GoalLink>

        {/* Гамбургер с якорями — только мобильный */}
        <MobileMenu />
      </Container>
    </header>
  );
}
