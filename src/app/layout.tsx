import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
