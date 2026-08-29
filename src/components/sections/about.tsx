import { User } from "lucide-react";

import { Btn } from "@/components/btn";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { contacts, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-b">
      <Container className="flex flex-col md:flex-row">
      {/* Заглушка под фото */}
      <div className="flex aspect-square items-center justify-center border-b bg-paper-2 md:w-[38%] md:border-b-0 md:border-r">
        <User className="size-16 text-caption" />
      </div>

      <div className="flex-1 px-5 py-10 md:px-10 md:py-16">
        <Eyebrow>{site.about.title}</Eyebrow>
        <p className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
          {site.about.name}
        </p>
        <p className="mt-1 text-sm text-caption">{site.about.role}</p>
        <p className="mt-5 max-w-xl text-caption">{site.about.text}</p>

        <div className="mt-8">
          <Btn href={contacts.instagram.href} external>
            {site.about.instagramLabel}
          </Btn>
        </div>
      </div>
      </Container>
    </section>
  );
}
