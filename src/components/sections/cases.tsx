import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { CaseVideo } from "@/components/case-video";
import { Container } from "@/components/container";
import { GoalLink } from "@/components/goal-link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Cases() {
  return (
    <section id="cases" className="border-b">
      <Container className="surface-ink">
      <div className="px-5 pt-16 md:px-10 md:pt-24">
        <div className="text-xs font-medium uppercase tracking-[0.06em] text-paper/60">
          Кейсы
        </div>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {site.cases.title}
        </h2>
        <p className="mt-4 max-w-2xl text-paper/70">{site.cases.subtitle}</p>
      </div>

      <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:border-t">
        {site.cases.items.map((item, i) => (
          <div
            key={item.id}
            className={
              "flex-1 " +
              (i < site.cases.items.length - 1
                ? "border-b md:border-b-0 md:border-r"
                : "")
            }
          >
            {/*
              Скриншоты в тёмном медиа-блоке с отступами, зазором и рамкой у
              каждого кадра — чтобы светлые скриншоты визуально отделялись.
              Первый кадр — главный экран (16:10), остальные — внутренние (16:9).
            */}
            <div className="space-y-4 border-b p-4 md:space-y-6 md:p-6">
              {item.images.map((src, idx) => (
                <GoalLink
                  key={src}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  goal="case_visit"
                  goalParams={{ case: item.id }}
                  className={cn(
                    "relative block border border-paper/25 bg-paper-2 transition-colors hover:border-paper/60",
                    idx === 0 ? "aspect-[16/10]" : "aspect-[16/9]",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${item.name} — ${idx === 0 ? "главный экран" : "внутренний экран"}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className={cn(
                      "object-cover object-top",
                      // на десктопе первый кадр заменяет видео-запись проекта
                      idx === 0 && "video" in item && item.video && "md:hidden",
                    )}
                  />
                  {idx === 0 && "video" in item && item.video && (
                    <CaseVideo
                      src={item.video}
                      poster={src}
                      className="absolute inset-0 hidden size-full object-cover object-top md:block"
                    />
                  )}
                </GoalLink>
              ))}
            </div>

            <div className="px-5 py-8 md:px-8 md:py-10">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-paper px-2 py-1 text-[12px] font-medium uppercase tracking-[0.08em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                {item.name}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-paper/80">
                <p>
                  <span className="text-paper">Задача. </span>
                  {item.task}
                </p>
                <p>
                  <span className="text-paper">Решение. </span>
                  {item.solution}
                </p>
                {"result" in item && item.result && (
                  <p>
                    <span className="text-paper">Результат. </span>
                    {item.result}
                  </p>
                )}
              </div>

              <GoalLink
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                goal="case_visit"
                goalParams={{ case: item.id }}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-paper hover:text-accent"
              >
                Открыть сайт
                <ArrowUpRight className="size-4" />
              </GoalLink>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
