import { ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/content/site";

export function Cases() {
  return (
    <section id="cases" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {site.cases.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{site.cases.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.cases.items.map((item) => (
            <Card key={item.id} className="overflow-hidden pt-0">
              {/* Заглушка под скриншот — соотношение 16:10 */}
              <div className="flex aspect-[16/10] items-center justify-center bg-muted text-muted-foreground">
                <ImageIcon className="size-10 opacity-40" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mt-2">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <span className="font-medium text-foreground">Задача. </span>
                  <span className="text-muted-foreground">{item.task}</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Решение. </span>
                  <span className="text-muted-foreground">{item.solution}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
