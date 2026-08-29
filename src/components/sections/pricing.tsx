import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Pricing() {
  return (
    <section id="services" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {site.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{site.services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-start">
          {site.services.packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "relative h-full",
                pkg.popular && "border-primary shadow-lg md:scale-[1.03]",
              )}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Популярное
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">
                    · {pkg.term}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">{pkg.forWho}</p>
              </CardContent>

              <CardFooter>
                <Button
                  render={<a href="#contact" />}
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  {site.cta.primary}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
