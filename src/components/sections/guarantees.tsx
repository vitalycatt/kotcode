import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * «Риск на мне» — четыре гарантии в ряд с вертикальными хайрлайнами.
 * Та же сетка и токены, что и в прайсе; на мобильном — колонка с
 * горизонтальными хайрлайнами. Без иконок и плашек.
 */
export function Guarantees() {
  return (
    <section id="guarantees" className="border-b">
      <Container>
        <div className="px-5 pt-16 md:px-10 md:pt-24">
          <Eyebrow>{site.risk.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {site.risk.title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:border-t">
          {site.risk.items.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "flex-1 px-5 py-8 md:px-8 md:py-12",
                i < site.risk.items.length - 1 &&
                  "border-b md:border-b-0 md:border-r",
              )}
            >
              <h3 className="text-base font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-caption">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
