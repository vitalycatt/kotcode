import { Btn } from "@/components/btn";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Pricing() {
  return (
    <section id="services" className="border-b">
      <Container>
      <div className="px-5 pt-16 md:px-10 md:pt-24">
        <Eyebrow>Услуги и цены</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {site.services.title}
        </h2>
        <p className="mt-4 max-w-2xl text-caption">{site.services.subtitle}</p>
      </div>

      <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:border-t">
        {site.services.packages.map((pkg, i) => {
          const accent = pkg.popular;
          return (
            <div
              key={pkg.id}
              className={cn(
                "flex flex-1 flex-col px-5 py-8 md:px-8 md:py-12",
                i < site.services.packages.length - 1 &&
                  "border-b md:border-b-0 md:border-r",
                accent && "bg-accent text-on-accent",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {pkg.name}
                </h3>
                {accent && (
                  <span className="border border-on-accent px-2 py-1 text-[12px] font-medium uppercase tracking-[0.08em]">
                    Популярное
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[32px] font-semibold tracking-[-0.02em]">
                  {pkg.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    accent ? "text-on-accent/70" : "text-caption",
                  )}
                >
                  · {pkg.term}
                </span>
              </div>

              <p
                className={cn(
                  "mt-3 text-sm",
                  accent ? "text-on-accent/90" : "text-foreground",
                )}
              >
                {pkg.description}
              </p>

              <ul
                className={cn(
                  "mt-6 flex-1 border-t",
                  accent ? "border-on-accent/40" : "border-ink",
                )}
              >
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "border-b py-2.5 text-sm",
                      accent ? "border-on-accent/40" : "border-ink",
                    )}
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <p
                className={cn(
                  "mt-6 text-sm",
                  accent ? "text-on-accent/80" : "text-caption",
                )}
              >
                {pkg.forWho}
              </p>

              <div className="mt-6">
                <Btn
                  href="#contact"
                  variant={accent ? "onAccent" : "onLight"}
                  className="w-full"
                  goal="cta_contact"
                  goalParams={{ place: "pricing", plan: pkg.id }}
                >
                  {site.cta.primary}
                </Btn>
              </div>
            </div>
          );
        })}
      </div>
      </Container>
    </section>
  );
}
