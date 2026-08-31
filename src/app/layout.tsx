import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import { YandexMetrica } from "@/components/analytics/yandex-metrica";
import { contacts, site } from "@/content/site";

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
    default: site.seo.title,
    template: `%s · ${site.brand.name}`,
  },
  description: site.seo.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "создание сайтов",
    "разработка сайтов",
    "сайт под ключ",
    "лендинг",
    "интернет-магазин",
    "телеграм-бот",
    "сайт Брест",
    "разработка сайтов Беларусь",
    "заказать сайт СНГ",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: site.brand.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

const businessId = `${siteUrl}/#business`;

// Пакет как Offer: числовую цену вытаскиваем из строки («от $350» → 350),
// для «по задаче» цену не указываем.
function packageOffer(pkg: (typeof site.services.packages)[number]) {
  const price = pkg.price.match(/\d+/)?.[0];
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: pkg.name,
      description: pkg.description,
    },
    ...(price ? { price, priceCurrency: "USD" } : {}),
  };
}

// JSON-LD граф: бизнес (LocalBusiness + гео), сайт и FAQ для сниппетов в SERP.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: site.brand.name,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.png`,
      description: site.seo.description,
      priceRange: site.business.priceRange,
      areaServed: site.business.areaServed.map((code) => ({
        "@type": "Country",
        name: code,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: site.business.city,
        addressRegion: site.business.region,
        addressCountry: site.business.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.business.geo.lat,
        longitude: site.business.geo.lng,
      },
      sameAs: [contacts.instagram.href, contacts.telegram.href],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contacts.email.handle,
        url: contacts.telegram.href,
        availableLanguage: ["ru"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: site.services.title,
        itemListElement: site.services.packages.map(packageOffer),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.brand.name,
      inLanguage: "ru-RU",
      publisher: { "@id": businessId },
    },
  ],
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
