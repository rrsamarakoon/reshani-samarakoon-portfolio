import { Quote } from "lucide-react";
import { about } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title={<>A Little <span className="text-gold">About Me</span></>} />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted-foreground first:text-foreground">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 pt-2">
                {about.interests.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <blockquote className="relative mt-6 rounded-2xl border-l-2 border-primary bg-accent py-6 pr-6 pl-8">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/30" aria-hidden="true" />
                <p className="font-display text-2xl leading-snug font-semibold italic sm:text-3xl">
                  {about.statement}
                </p>
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card-surface relative overflow-hidden p-7 sm:p-8">
              <div className="bg-gold absolute inset-x-0 top-0 h-1" />
              <p className="eyebrow">Profile Summary</p>
              <dl className="mt-6 divide-y divide-border">
                {about.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 py-3.5">
                    <dt className="text-sm text-muted-foreground">{f.label}</dt>
                    <dd
                      className={
                        f.label === "Current Status"
                          ? "text-sm font-semibold text-primary"
                          : "text-sm font-semibold text-foreground"
                      }
                    >
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
