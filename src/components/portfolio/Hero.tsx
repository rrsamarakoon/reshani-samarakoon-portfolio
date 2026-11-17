import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";
import { cvLinkProps, handleCvClick } from "./cv";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { NeuralBackground } from "./NeuralBackground";
import { ProfilePortrait } from "./ProfilePortrait";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 lg:min-h-screen lg:pt-32">
      <NeuralBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="eyebrow">Hello, I'm Reshani Samarakoon</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl xl:text-[4.25rem]">
            Building Intelligent Solutions Through <span className="text-gold">AI &amp; Technology.</span>
          </h1>
          <p className="mt-6 text-base font-medium text-foreground/90">{profile.headline}</p>

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
        </motion.div>

        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <ProfilePortrait />
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-ink/40 bg-accent px-4 py-2 text-xs font-semibold text-primary-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to internships
          </div>
          <p className="mt-6 font-display text-2xl leading-snug font-semibold">
            {profile.status}
          </p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{profile.intro}</p>

          <a
            href="#contact"
            className="group mt-7 inline-flex items-center gap-2 border-b border-primary-ink pb-1 text-sm font-semibold text-primary-ink transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> Contact Me
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <div className="mt-8 flex items-center gap-3">
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
    </section>
  );
}
