import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import { YandexMetrica } from "@/components/analytics/yandex-metrica";
import { site } from "@/content/site";

const yandexMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

// Эталон использует Archivo, но у него нет кириллицы. Inter Tight — его же
// фолбэк из эталона: тот же гротеск, но с поддержкой кириллицы.
const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const siteUrl = `https://${site.brand.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.brand.name} — ${site.brand.tagline}`,
    template: `%s · ${site.brand.name}`,
  },
  description: site.hero.subtitle,
  keywords: [
    "сайт для бизнеса",
    "лендинг",
    "интернет-магазин",
    "телеграм-бот",
    "разработка сайтов",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: site.brand.name,
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description: site.hero.subtitle,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description: site.hero.subtitle,
  },
};

// JSON-LD разметка организации — базовая, расширим на этапе SEO.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand.name,
  url: siteUrl,
  description: site.hero.subtitle,
  areaServed: "RU",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {yandexMetricaId && <YandexMetrica counterId={yandexMetricaId} />}
      </body>
    </html>
  );
}
