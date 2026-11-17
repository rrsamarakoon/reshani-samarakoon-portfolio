import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, ExternalLink, HeartPulse, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function FlowDiagram({ project }: { project: Project }) {
  const Icon = project.kind === "disaster" ? Siren : HeartPulse;
  return (
    <div className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-6">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="bg-spot absolute inset-0" aria-hidden="true" />
      <div className="relative flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-glow-sm">
          <Icon className="h-7 w-7" />
        </span>
        <span className="font-display text-6xl font-bold text-foreground/10">{project.number}</span>
      </div>
      <ol className="relative mt-8 space-y-2.5" aria-label="System flow">
        {project.flow.map((step, i) => (
          <li key={step} className="flex items-center gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/50 font-mono text-[0.65rem] text-primary">
              {i + 1}
            </span>
            <span
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-medium",
                i === project.flow.length - 1
                  ? "border-primary bg-accent text-primary"
                  : "border-border bg-surface text-foreground",
              )}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal>
      <article className="group card-surface relative overflow-hidden p-5 transition-all duration-500 hover:border-primary/40 hover:shadow-glow sm:p-7">
        <div className={cn("grid gap-8 lg:grid-cols-12", reverse && "lg:[&>*:first-child]:order-2")}>
          <div className="lg:col-span-5">
            <FlowDiagram project={project} />
          </div>
          <div className="flex flex-col lg:col-span-7">
            <p className="eyebrow">Project {project.number}</p>
            <h3 className="mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl">{project.title}</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    project.aiTech.includes(t)
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground",
                  )}
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="subtle"
                size="xl"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
              >
                {open ? "Hide my contributions" : "View my contributions"}
                <ChevronDown className={cn("transition-transform duration-300", open && "rotate-180")} />
              </Button>
              {project.githubUrl && (
                <Button asChild variant="outline-gold" size="xl">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button asChild variant="gold" size="xl">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 border-t border-border pt-8">
                <p className="eyebrow mb-5">My Contributions</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex gap-3 rounded-xl border border-border bg-background p-4 text-sm leading-relaxed">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Featured Projects"
          title={<>Projects That Bring <span className="text-gold">Ideas to Life</span></>}
          description="Two AI systems where I designed and built the intelligent core — from agent workflows to retrieval pipelines."
        />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.number} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
