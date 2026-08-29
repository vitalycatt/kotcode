import { ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {site.process.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{site.process.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.steps.map((step) => (
            <Card key={step.step} className="h-full">
              <CardHeader>
                <span className="text-3xl font-bold text-primary/40">
                  {step.step}
                </span>
                <CardTitle className="mt-2 text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.text}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {site.process.guarantees.map((g) => (
            <Badge
              key={g}
              variant="outline"
              className="gap-1.5 px-3 py-1.5 text-sm"
            >
              <ShieldCheck className="size-4 text-primary" />
              {g}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
