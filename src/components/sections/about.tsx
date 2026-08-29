import { Camera, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contacts, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr]">
          {/* Заглушка под фото */}
          <div className="mx-auto flex size-40 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <User className="size-16 opacity-40" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {site.about.title}
            </h2>
            <p className="mt-2 text-lg font-medium">{site.about.name}</p>
            <p className="text-sm text-muted-foreground">{site.about.role}</p>
            <p className="mt-4 text-muted-foreground">{site.about.text}</p>

            <div className="mt-6 flex justify-center md:justify-start">
              <Button
                variant="outline"
                render={
                  <a
                    href={contacts.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Camera className="size-4" />
                {site.about.instagramLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
