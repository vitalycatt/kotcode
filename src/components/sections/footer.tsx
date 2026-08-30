import { Container } from "@/components/container";
import { GoalLink } from "@/components/goal-link";
import { Logo } from "@/components/logo";
import { contacts, site } from "@/content/site";

const socials = [
  { data: contacts.telegram, goal: "msg_telegram" },
  { data: contacts.instagram, goal: "msg_instagram" },
  { data: contacts.email, goal: "msg_email" },
];

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <div className="text-[17px]">
            <Logo />
          </div>
          <p className="mt-3 text-sm text-caption">{site.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.06em]">
          {socials.map(({ data, goal }) => (
            <GoalLink
              key={data.label}
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              goal={goal}
              goalParams={{ place: "footer" }}
              className="hover:text-accent"
            >
              {data.label}
            </GoalLink>
          ))}
        </div>
      </Container>

      <div className="border-t">
        <Container className="px-5 py-4 text-xs text-caption md:px-10">
          © {new Date().getFullYear()} {site.brand.name} · {site.brand.domain} ·{" "}
          {site.footer.rights}
        </Container>
      </div>
    </footer>
  );
}
