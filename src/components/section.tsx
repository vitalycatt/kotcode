import { cn } from "@/lib/utils";

/** Мелкая uppercase-метка секции (11–12px, letter-spacing 0.06em). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xs font-medium uppercase tracking-[0.06em] text-caption",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Заголовок секции: крупный, вес 600, letter-spacing -0.03em. */
export function SectionHead({
  label,
  title,
  subtitle,
  className,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {label && <Eyebrow className="mb-4">{label}</Eyebrow>}
      <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-caption">{subtitle}</p>}
    </div>
  );
}
