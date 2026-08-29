import { ArrowRight } from "lucide-react";

import { CatMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6">
            {site.hero.badge}
          </Badge>

          <div className="mb-6 flex justify-center">
            <CatMark className="size-12 text-primary" />
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            {site.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            {site.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="w-full sm:w-auto"
            >
              {site.cta.primary}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#services" />}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Услуги и цены
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{site.hero.note}</p>
        </div>
      </div>
    </section>
  );
}
