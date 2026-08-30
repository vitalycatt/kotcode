import { ArrowUpRight, ImageIcon } from "lucide-react";

import { Container } from "@/components/container";
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
            {/* Заглушка под скриншот — 16:10, кликабельна на живой сайт */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[16/10] items-center justify-center border-b bg-ink transition-colors hover:bg-[#181818]"
            >
              <ImageIcon className="size-10 text-paper/30 transition-colors group-hover:text-paper/50" />
            </a>

            <div className="px-5 py-8 md:px-8 md:py-10">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-paper px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em]"
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
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-paper hover:text-accent"
              >
                Открыть сайт
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
