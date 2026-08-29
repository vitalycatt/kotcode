import { cn } from "@/lib/utils";

/**
 * Лого-монограмма KOT / CODE в две строки — как у C40.
 * Латиница намеренно: работает и для RU (Кот и Код), и для будущего CatCode.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "block font-semibold leading-[1.05] tracking-[-0.02em]",
        className,
      )}
    >
      KOT
      <br />
      CODE
    </span>
  );
}
