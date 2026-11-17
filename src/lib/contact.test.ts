import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "./contact";

const valid = { name: "Jane Doe", email: "jane@acme.com", subject: "Internship", message: "We'd love to chat about a role." };

describe("contact form", () => {
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });

  it("addresses the prefilled email to Reshani with the subject encoded", () => {
    const url = buildMailto("reshanisamarakoon@gmail.com", valid);
    expect(url.startsWith("mailto:reshanisamarakoon@gmail.com?subject=Internship&body=")).toBe(true);
    expect(decodeURIComponent(url.split("body=")[1] ?? "")).toContain("Jane Doe (jane@acme.com)");
  });
});
