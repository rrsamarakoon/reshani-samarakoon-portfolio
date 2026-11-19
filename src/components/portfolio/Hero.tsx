import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroAI, profile } from "@/content/portfolio";
import { AIPromptCard } from "./AIPromptCard";
import { HeroStack } from "./HeroStack";
import { useTypewriter } from "./useTypewriter";
import { cvLinkProps, handleCvClick } from "./cv";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { NeuralBackground } from "./NeuralBackground";
import { ProfilePortrait } from "./ProfilePortrait";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Two vertical sections: the left one holds only the photograph, the right one holds everything else
 * stacked in a single column. On phones the two sections sit one above the other.
 */
export function Hero() {
  const exploring = useTypewriter(heroAI.exploring);
  return (
    <section id="home" className="relative isolate flex flex-col overflow-hidden pt-24 lg:min-h-screen lg:pt-28">
      <NeuralBackground />
      <div className="relative flex flex-1 flex-col lg:flex-row">
        {/* Part 1 — the photograph, on its own */}
        <div className="relative flex items-center justify-center border-b border-border bg-surface/80 px-5 py-12 backdrop-blur-sm lg:w-[38%] lg:border-r lg:border-b-0 lg:px-8">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-primary-ink/45 to-transparent lg:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <ProfilePortrait />
          </motion.div>
        </div>

        {/* Part 2 — everything else, in one vertical column */}
        <div className="flex flex-1 items-center px-5 py-12 sm:px-8 lg:px-12">
          <motion.div
            className="mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="eyebrow">Hello, I'm Reshani Samarakoon</p>
            <h1 className="mt-6 text-balance font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Building Intelligent Solutions Through <span className="text-gold">AI &amp; Technology.</span>
            </h1>
            <p className="mt-5 text-base font-medium text-foreground/90">{profile.headline}</p>

            <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs shadow-card backdrop-blur">
              <span className="text-primary-ink">&gt;</span>
              <span className="text-muted-foreground">exploring</span>
              <span className="truncate font-semibold text-foreground" aria-live="off">
                {exploring}
              </span>
              <span className="animate-caret inline-block h-3.5 w-[2px] shrink-0 bg-primary-ink" aria-hidden="true" />
              <span className="sr-only">Areas I explore: {heroAI.exploring.join(", ")}</span>
            </div>

            <AIPromptCard prompt={heroAI.prompt} answer={profile.intro} />

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <a href="#projects">
                  Explore My Projects <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline-gold" size="xl">
                <a {...cvLinkProps} onClick={handleCvClick}>
                  <Download /> Download My CV
                </a>
              </Button>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background/85 px-5 py-4 shadow-card backdrop-blur">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-primary via-primary to-primary-ink"
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 pl-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                    </span>
                    Open to internships
                  </span>
                  <p className="font-display text-lg leading-snug font-semibold text-foreground sm:text-xl">
                    {profile.status}
                  </p>
                </div>
              </div>
            </motion.div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 border-b border-primary-ink pb-1 text-sm font-semibold text-primary-ink transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:border-primary-ink hover:text-primary-ink"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:border-primary-ink hover:text-primary-ink"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <span className="ml-2 font-mono text-xs text-muted-foreground">{profile.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
      <HeroStack />
    </section>
  );
}
