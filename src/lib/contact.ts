import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a short subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** The site has no mail backend, so the form hands a prefilled email to the visitor's mail app. */
export function buildMailto(to: string, data: ContactInput) {
  const body = `${data.message}\n\n— ${data.name} (${data.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
}
