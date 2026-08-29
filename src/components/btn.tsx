import { cn } from "@/lib/utils";

type Variant = "onLight" | "onAccent" | "onInk";

const variants: Record<Variant, string> = {
  // на белой бумаге: рамка ink, hover — инверсия в чёрную плашку
  onLight: "border-ink text-ink hover:bg-ink hover:text-paper",
  // на синей плашке: рамка белая, hover — инверсия в белую плашку
  onAccent: "border-on-accent text-on-accent hover:bg-on-accent hover:text-accent",
  // на тёмной поверхности (кейсы): рамка белая, hover — белая плашка/чёрный текст
  onInk: "border-paper text-paper hover:bg-paper hover:text-ink",
};

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

/** Контурная кнопка-ссылка из эталона: 1px рамка, прямые углы, инверсия на hover. */
export function Btn({
  href,
  children,
  variant = "onLight",
  external = false,
  className,
}: BtnProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={cn(
        "inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
