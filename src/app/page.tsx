import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Cases } from "@/components/sections/cases";
import { Pricing } from "@/components/sections/pricing";
import { Guarantees } from "@/components/sections/guarantees";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
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
