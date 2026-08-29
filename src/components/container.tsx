import { cn } from "@/lib/utils";

/**
 * Контейнер контента: ширина 1280 по центру с вертикальными боковыми
 * хайрлайнами. Горизонтальные разделители секций живут на внешнем
 * full-width элементе и проходят через весь экран, пересекая эти вертикали.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] border-x", className)}>
      {children}
    </div>
  );
}
