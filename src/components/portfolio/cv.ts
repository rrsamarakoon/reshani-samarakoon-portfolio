import { toast } from "sonner";
import { profile } from "@/content/portfolio";

/** Download the CV when one is configured; otherwise offer to request it by email. */
export function handleCvClick(event: { preventDefault: () => void }) {
  if (profile.cvUrl) return;
  event.preventDefault();
  toast("My latest CV is being finalised", {
    description: "Send me an email and I'll share a copy straight away.",
    action: {
      label: "Request CV",
      onClick: () => {
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("CV request")}`;
      },
    },
  });
}

export const cvLinkProps = profile.cvUrl
  ? { href: profile.cvUrl, download: "Reshani-Samarakoon-CV.pdf" }
  : { href: "#contact" };
