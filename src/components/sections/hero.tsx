import { Play } from "lucide-react";

import { Btn } from "@/components/btn";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <>
      {/* Сплит-герой: слева синяя плашка 46%, справа видео-ячейка */}
      <section className="border-b">
        <Container className="flex flex-col md:flex-row">
        <div className="bg-accent px-5 pb-10 pt-14 text-on-accent md:w-[46%] md:border-r md:px-10">
          <h1 className="text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
            {site.hero.title}
          </h1>
          <p className="my-8 max-w-[34ch] text-base leading-[1.5]">
            {site.hero.subtitle}
          </p>
          <Btn
            href="#contact"
            variant="onAccent"
            goal="cta_contact"
            goalParams={{ place: "hero" }}
          >
            {site.cta.primary}
          </Btn>
        </div>

        {/* Видео-ячейка: заглушка paper-2 с play-кнопкой (место под <video>) */}
        <div className="relative flex min-h-[240px] flex-1 items-center justify-center border-t bg-paper-2 md:min-h-[460px] md:border-t-0">
          {/*
            Место под фоновое видео:
            <video muted autoPlay loop playsInline poster="/hero-poster.jpg" ... />
            На мобильных — статичный постер вместо автоплея.
          */}
          <div className="flex size-16 items-center justify-center border">
            <Play className="size-5" />
          </div>
          <div className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.06em] text-caption">
            {site.hero.videoCaption}
          </div>
        </div>
        </Container>
      </section>

      {/* Полоса из трёх метрик, разделённых хайрлайнами */}
      <section className="border-b">
        <Container className="flex flex-col sm:flex-row">
          {site.metrics.map((m, i) => (
            <div
              key={m.l}
              className={
                "flex-1 px-5 py-5 " +
                (i < site.metrics.length - 1
                  ? "border-b sm:border-b-0 sm:border-r"
                  : "")
              }
            >
              <div className="text-[30px] font-semibold tracking-[-0.02em]">
                {m.n}
              </div>
              <div className="mt-1 text-xs text-caption">{m.l}</div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
