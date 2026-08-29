import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Pricing } from "@/components/sections/pricing";
import { Cases } from "@/components/sections/cases";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingContact } from "@/components/floating-contact";

export default function Home() {
  return (
    <>
      {/* Рамка эталона: 1px, max-width 1280, всё внутри разделено хайрлайнами */}
      <div id="top" className="mx-auto w-full max-w-[1280px] flex-1 border">
        <Header />
        <main>
          <Hero />
          <Problems />
          <Pricing />
          <Cases />
          <Process />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingContact />
    </>
  );
}
