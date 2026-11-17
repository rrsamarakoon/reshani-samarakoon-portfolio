import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: LinkedInIcon, label: "LinkedIn", value: "reshani-samarakoon", href: profile.linkedin, external: true },
  { icon: GitHubIcon, label: "GitHub", value: "rrsamarakoon", href: profile.github, external: true },
];

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary-ink focus:outline-hidden focus:ring-2 focus:ring-primary-ink/25";

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof ContactInput, v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    window.location.href = buildMailto(profile.email, result.data);
    setSent(true);
    setValues(empty);
  };

  const field = (key: keyof ContactInput, label: string, props: Record<string, unknown> = {}) => (
    <div>
      <label htmlFor={key} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {key === "message" ? (
        <textarea
          id={key}
          rows={5}
          value={values[key]}
          onChange={(e) => update(key, e.target.value)}
          aria-invalid={!!errors[key]}
          className={cn(fieldClass, "resize-none", errors[key] && "border-destructive")}
          {...props}
        />
      ) : (
        <input
          id={key}
          value={values[key]}
          onChange={(e) => update(key, e.target.value)}
          aria-invalid={!!errors[key]}
          className={cn(fieldClass, errors[key] && "border-destructive")}
          {...props}
        />
      )}
      {errors[key] && <p className="mt-1.5 text-xs text-destructive">{errors[key]}</p>}
    </div>
  );

  return (
    <section id="contact" className="relative border-t border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={<>Let's Build Something <span className="text-gold">Intelligent Together.</span></>}
          description="I'm always interested in connecting with technology professionals, exploring innovative ideas, and discovering opportunities to grow in the field of Artificial Intelligence."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ul className="space-y-3">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary-ink">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block truncate font-semibold">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="card-surface flex items-center gap-4 p-4 transition-all hover:translate-x-1 hover:border-primary-ink/50"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="card-surface flex items-center gap-4 p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center" role="status">
                  <CheckCircle2 className="h-14 w-14 text-success" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">Your email is ready to send</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Your email app opened with the message filled in — just hit send. If nothing opened, write to{" "}
                    <a className="text-primary-ink underline" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                    .
                  </p>
                  <Button variant="subtle" size="xl" className="mt-6" onClick={() => setSent(false)}>
                    Write another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {field("name", "Name", { placeholder: "Your name", autoComplete: "name" })}
                    {field("email", "Email", { type: "email", placeholder: "you@company.com", autoComplete: "email" })}
                  </div>
                  {field("subject", "Subject", { placeholder: "Internship opportunity" })}
                  {field("message", "Message", { placeholder: "Tell me a little about the role or idea…" })}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">Opens your email app with this message ready to send.</p>
                    <Button type="submit" variant="gold" size="xl">
                      Send Message <Send />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
