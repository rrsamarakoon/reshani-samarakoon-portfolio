import { Briefcase, GraduationCap, Target } from "lucide-react";
import type { ReactNode } from "react";
import { education, experience, profile } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function TimelineItem({ icon, children, delay }: { icon: ReactNode; children: ReactNode; delay: number }) {
  return (
    <Reveal delay={delay} className="relative pl-14">
      <span className="absolute top-0 left-0 grid h-10 w-10 place-items-center rounded-full border border-primary-ink/50 bg-background text-primary-ink shadow-glow-sm">
        {icon}
      </span>
      <div className="card-surface p-6 transition-colors hover:border-primary-ink/40 sm:p-7">{children}</div>
    </Reveal>
  );
}

export function Journey() {
  return (
    <section id="experience" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Education & Experience"
          title={<>My Journey <span className="text-gold">So Far</span></>}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              <GraduationCap className="h-4 w-4 text-primary-ink" /> Education
            </h3>
            <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-linear-to-b before:from-primary-ink before:to-transparent">
              {education.map((e, i) => (
                <TimelineItem key={e.degree} icon={<GraduationCap className="h-5 w-5" />} delay={i * 0.1}>
                  <p className="font-mono text-xs text-primary-ink">{e.graduation}</p>
                  <h4 className="mt-2 font-display text-2xl font-semibold">{e.degree}</h4>
                  <p className="mt-1 text-muted-foreground">{e.institution}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-ink">
                      Specialization: {e.specialization}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">{e.level}</span>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-3 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              <Briefcase className="h-4 w-4 text-primary-ink" /> Experience
            </h3>
            <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-linear-to-b before:from-primary-ink before:to-transparent">
              {experience.map((x, i) => (
                <TimelineItem key={x.role + x.company} icon={<Briefcase className="h-5 w-5" />} delay={i * 0.1}>
                  <p className="font-mono text-xs text-primary-ink">Since {x.start}</p>
                  <h4 className="mt-2 font-display text-2xl font-semibold">{x.role}</h4>
                  <p className="mt-1 text-muted-foreground">{x.company}</p>
                  {x.details.length > 0 && (
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {x.details.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </TimelineItem>
              ))}

              <TimelineItem icon={<Target className="h-5 w-5" />} delay={0.2}>
                <p className="font-mono text-xs text-primary-ink">Next step</p>
                <h4 className="mt-2 font-display text-2xl font-semibold">{profile.status}</h4>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-ink hover:text-foreground"
                >
                  Let's talk about opportunities →
                </a>
              </TimelineItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
