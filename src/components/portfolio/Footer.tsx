import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/content/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold tracking-wide">
              RESHANI <span className="text-primary-ink">SAMARAKOON</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.tagline}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-muted-foreground transition-colors hover:text-primary-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Reshani Samarakoon. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary-ink hover:text-primary-ink">
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary-ink hover:text-primary-ink">
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a href="#home" aria-label="Back to top" className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
