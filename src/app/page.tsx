import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Cases } from "@/components/sections/cases";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Guarantees } from "@/components/sections/guarantees";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { site } from "@/content/site";

// FAQ-разметка на главной (где реально показан блок FAQ), чтобы на страницах
// услуг не дублировался второй FAQPage — там свой, по вопросам услуги.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `https://${site.brand.domain}/#faq`,
  mainEntity: site.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      {/*
        Горизонтальные разделители — full-width (border-b на секциях идёт через
        весь экран), контент внутри ограничен Container'ом 1280 с боковыми
        вертикальными хайрлайнами.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div id="top" className="w-full flex-1 border-t">
        <Header />
        <main>
          <Hero />
          <Cases />
          <Pricing />
          <Guarantees />
          <Process />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <MobileCtaBar />
    </>
  );
}
