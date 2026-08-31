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

export default function Home() {
  return (
    <>
      {/*
        Горизонтальные разделители — full-width (border-b на секциях идёт через
        весь экран), контент внутри ограничен Container'ом 1280 с боковыми
        вертикальными хайрлайнами.
      */}
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
