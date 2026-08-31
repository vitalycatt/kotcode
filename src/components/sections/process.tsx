import { site } from "@/content/site";
import { Eyebrow } from "@/components/section";
import { Container } from "@/components/container";

export function Process() {
  return (
    <section id="process" className="border-b">
      <Container>
        <div className="px-5 pt-16 md:px-10 md:pt-24">
          <Eyebrow>Как я работаю</Eyebrow>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {site.process.title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:border-t">
          {site.process.steps.map((step, i) => (
            <div
              key={step.step}
              className={
                "flex-1 px-5 py-8 md:px-8 md:py-12 " +
                (i < site.process.steps.length - 1
                  ? "border-b md:border-b-0 md:border-r"
                  : "")
              }
            >
              <div className="text-2xl font-semibold tracking-[-0.02em] text-accent">
                {step.step}
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-caption">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Гарантии — полоса UPPERCASE-меток через хайрлайны */}
        {/* <div className="flex flex-col border-t sm:flex-row">
          {site.process.guarantees.map((g, i) => (
            <div
              key={g}
              className={
                "flex-1 px-5 py-4 text-xs font-medium uppercase tracking-[0.06em] " +
                (i < site.process.guarantees.length - 1
                  ? "border-b sm:border-b-0 sm:border-r"
                  : "")
              }
            >
              {g}
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  );
}
