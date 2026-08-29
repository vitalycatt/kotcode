import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/** Минималистичный знак-кот: две уши-треугольника, без мультяшной иллюстрации. */
export function CatMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      {/* уши + голова одной линией */}
      <path d="M4 4l3.5 4M20 4l-3.5 4" />
      <path d="M6 8a6 6 0 0 1 12 0v3a6 6 0 0 1-12 0z" />
      {/* усы */}
      <path d="M9 13h.01M15 13h.01" />
      <path d="M11 15c.6.5 1.4.5 2 0" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold", className)}>
      <CatMark className="size-6 text-primary" />
      <span className="tracking-tight">{site.brand.name}</span>
    </span>
  );
}
