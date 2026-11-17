import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export function LinkedInIcon({ className }: { className?: string }) {
  return <FaLinkedinIn className={className} aria-hidden="true" />;
}

export function GitHubIcon({ className }: { className?: string }) {
  return <SiGithub className={className} aria-hidden="true" />;
}
