import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/content/site";

export function Problems() {
  return (
    <section id="problems" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {site.problems.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{site.problems.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.problems.items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {item.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
