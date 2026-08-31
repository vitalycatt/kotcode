import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Btn } from "@/components/btn";
import { Container } from "@/components/container";
import { GoalLink } from "@/components/goal-link";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/content/site";

const siteUrl = `https://${site.brand.domain}`;

function getPage(slug: string) {
  return site.servicePages.find((p) => p.slug === slug);
}

// Генерируем только перечисленные страницы услуг, остальные пути — 404.
export function generateStaticParams() {
  return site.servicePages.map((p) => ({ service: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = getPage(service);
  if (!page) return {};

  const url = `${siteUrl}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      url,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const page = getPage(service);
  if (!page) notFound();

  const pkg = site.services.packages.find((p) => p.id === page.packageId);
  const cases = site.cases.items.filter((c) =>
    (page.relatedCaseIds as readonly string[]).includes(c.id),
  );
  const others = site.servicePages.filter((p) => p.slug !== page.slug);
  const price = pkg?.price.match(/\d+/)?.[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.h1,
        serviceType: pkg?.name ?? page.h1,
        description: page.description,
        url: `${siteUrl}/${page.slug}`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: site.business.areaServed.map((code) => ({
          "@type": "Country",
          name: code,
        })),
        ...(price
          ? { offers: { "@type": "Offer", price, priceCurrency: "USD" } }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: `${siteUrl}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.breadcrumb,
            item: `${siteUrl}/${page.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full flex-1 border-t">
        <Header />
        <main>
          {/* Хлебные крошки + герой */}
          <section className="border-b">
            <Container className="px-5 py-16 md:px-10 md:py-24">
              <nav
                aria-label="Хлебные крошки"
                className="text-xs uppercase tracking-[0.06em] text-caption"
              >
                <Link href="/" className="hover:text-accent">
                  Главная
                </Link>
                <span className="px-2">/</span>
                <Link href="/#services" className="hover:text-accent">
                  Услуги
                </Link>
                <span className="px-2">/</span>
                <span className="text-ink">{page.breadcrumb}</span>
              </nav>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {page.h1}
              </h1>

              {pkg && (
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-[32px] font-semibold tracking-[-0.02em]">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-caption">· {pkg.term}</span>
                </div>
              )}

              <div className="mt-8 max-w-2xl space-y-4 text-foreground">
                {page.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8">
                <Btn
                  href="#contact"
                  goal="cta_contact"
                  goalParams={{ place: "service", service: page.slug }}
                >
                  {site.cta.primary}
                </Btn>
              </div>
            </Container>
          </section>

          {/* Что входит */}
          {pkg && (
            <section className="border-b">
              <Container className="px-5 py-16 md:px-10 md:py-24">
                <div className="text-xs font-medium uppercase tracking-[0.06em] text-caption">
                  Что входит
                </div>
                <ul className="mt-6 max-w-2xl border-t border-ink">
                  {pkg.features.map((f) => (
                    <li key={f} className="border-b border-ink py-3 text-sm">
                      {f}
                    </li>
                  ))}
                </ul>
              </Container>
            </section>
          )}

          {/* Пример работы — связанный кейс */}
          {cases.length > 0 && (
            <section className="border-b">
              <Container className="px-5 py-16 md:px-10 md:py-24">
                <div className="text-xs font-medium uppercase tracking-[0.06em] text-caption">
                  Пример работы
                </div>
                <div className="mt-6 space-y-8">
                  {cases.map((c) => (
                    <div key={c.id} className="max-w-2xl">
                      <h2 className="text-xl font-semibold tracking-[-0.02em]">
                        {c.name}
                      </h2>
                      {"result" in c && c.result && (
                        <p className="mt-3 text-sm text-caption">{c.result}</p>
                      )}
                      <GoalLink
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        goal="case_visit"
                        goalParams={{ case: c.id, place: "service" }}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] hover:text-accent"
                      >
                        Открыть сайт
                        <ArrowUpRight className="size-4" />
                      </GoalLink>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/#cases"
                    className="text-sm underline underline-offset-4 hover:text-accent"
                  >
                    Все кейсы →
                  </Link>
                </div>
              </Container>
            </section>
          )}

          {/* FAQ страницы */}
          <section className="border-b">
            <Container className="px-5 py-16 md:px-10 md:py-24">
              <div className="text-xs font-medium uppercase tracking-[0.06em] text-caption">
                Вопросы
              </div>
              <div className="mt-6 max-w-2xl">
                <Accordion multiple={false} className="w-full">
                  {page.faq.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="py-4 text-left text-base font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-caption">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Container>
          </section>

          {/* Другие услуги — внутренняя перелинковка */}
          <section className="border-b">
            <Container className="px-5 py-16 md:px-10 md:py-24">
              <div className="text-xs font-medium uppercase tracking-[0.06em] text-caption">
                Другие услуги
              </div>
              <div className="mt-6 flex max-w-2xl flex-col">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/${o.slug}`}
                    className="group flex items-center justify-between border-b border-ink py-4 hover:text-accent"
                  >
                    <span className="text-base font-medium">{o.breadcrumb}</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
      <MobileCtaBar />
    </>
  );
}
