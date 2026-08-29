import { Eyebrow } from "@/components/section";
import { site } from "@/content/site";

export function Problems() {
  return (
    <section id="problems" className="border-b">
      <div className="px-5 pt-16 md:px-10 md:pt-24">
        <Eyebrow>{site.problems.title}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {site.problems.subtitle}
        </h2>
      </div>

      <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:border-t">
        {site.problems.items.map((item, i) => (
          <div
            key={item.title}
            className={
              "flex-1 px-5 py-8 md:px-10 md:py-12 " +
              (i < site.problems.items.length - 1
                ? "border-b md:border-b-0 md:border-r"
                : "")
            }
          >
            <div className="text-sm font-medium text-caption">
              0{i + 1}
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="mt-3 text-caption">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
