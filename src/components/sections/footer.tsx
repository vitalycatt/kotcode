import { Logo } from "@/components/logo";
import { contacts, site } from "@/content/site";

const socials = [
  contacts.telegram,
  contacts.whatsapp,
  contacts.instagram,
  contacts.email,
];

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <div className="text-[17px]">
            <Logo />
          </div>
          <p className="mt-3 text-sm text-caption">{site.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.06em]">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t px-5 py-4 text-xs text-caption md:px-10">
        © {new Date().getFullYear()} {site.brand.name} · {site.brand.domain} ·{" "}
        {site.footer.rights}
      </div>
    </footer>
  );
}
