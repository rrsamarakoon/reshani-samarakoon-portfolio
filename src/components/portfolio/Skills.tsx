import type { ComponentType } from "react";
import {
  SiC, SiCplusplus, SiCss, SiDotnet, SiExpress, SiFastapi, SiFlutter, SiGit, SiGithub, SiHtml5,
  SiHuggingface, SiJavascript, SiLangchain, SiMongodb, SiNumpy, SiOpenjdk, SiPostgresql, SiPython,
  SiReact, SiScikitlearn, SiSpringboot,
} from "react-icons/si";
import {
  BarChart3, Boxes, Brain, Code2, Cpu, Database, FileCode2, Layers, Network, Server, Smartphone,
  Sparkles, Waypoints, Wrench, Globe,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Icon = ComponentType<{ className?: string }>;
type Skill = { name: string; icon: Icon };
type Category = { title: string; icon: Icon; skills: Skill[]; featured?: boolean };

const categories: Category[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    featured: true,
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: Waypoints },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "NumPy", icon: SiNumpy },
      { name: "Seaborn", icon: BarChart3 },
      { name: "Retrieval-Augmented Generation (RAG)", icon: Sparkles },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "MERN Stack", icon: Layers },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React", icon: SiReact },
      { name: "Express.js", icon: SiExpress },
      { name: "ASP.NET Core Web API", icon: SiDotnet },
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Server,
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "JSP", icon: FileCode2 },
      { name: "Servlets", icon: FileCode2 },
    ],
  },
  {
    title: "Database Technologies",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Microsoft SQL Server", icon: Database },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Entity Framework Core", icon: SiDotnet },
    ],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Core Concepts & Tools",
    icon: Wrench,
    skills: [
      { name: "Object-Oriented Programming (OOP)", icon: Boxes },
      { name: "Software Architecture", icon: Network },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title={<>My Technical <span className="text-gold">Arsenal</span></>}
          description="The languages, frameworks and AI tooling I use to take ideas from concept to working software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) * 0.08}
              className={cat.featured ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : ""}
            >
              <div
                className={
                  cat.featured
                    ? "group card-surface h-full border-primary/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                    : "group card-surface h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <cat.icon className="h-5 w-5" />
                    </span>
                    <h3 className="truncate text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {String(cat.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <s.icon className="h-4 w-4 text-primary" />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div className="bg-gold flex h-full flex-col justify-between rounded-[calc(var(--radius)+8px)] p-7 text-primary-foreground">
              <Cpu className="h-8 w-8" />
              <p className="mt-10 font-display text-2xl leading-snug font-bold">
                Always learning. Currently going deeper into ML, Computer Vision & NLP.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
