import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";

const title = "Reshani Samarakoon — Aspiring AI Engineer";
const description =
  "AI undergraduate at SLIIT building intelligent solutions with Machine Learning, LangGraph and RAG. Seeking AI / ML internship opportunities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
