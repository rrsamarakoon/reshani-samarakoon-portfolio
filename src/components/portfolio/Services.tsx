import { Brain, Code2, Eye, LineChart, Server, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Brain, title: "AI/ML Solution Development", text: "Developing intelligent applications using AI and machine learning techniques." },
  { icon: LineChart, title: "Machine Learning Model Development", text: "Building and evaluating machine learning models for practical problems." },
  { icon: Eye, title: "Computer Vision Solutions", text: "Exploring image processing and computer vision applications." },
  { icon: Code2, title: "Full-Stack Web Application Development", text: "Developing modern web applications with frontend and backend technologies." },
  { icon: Server, title: "Backend API Development", text: "Building structured backend services and RESTful APIs." },
  { icon: Smartphone, title: "Mobile Application Development", text: "Creating cross-platform mobile applications." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Capabilities"
          title={<>What I Can <span className="text-gold">Build</span></>}
          description="Areas I work in and keep growing — the kinds of problems I'm excited to contribute to."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group card-surface relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-ink/50">
                <span className="bg-gold absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary-ink/30 bg-accent text-primary-ink transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
