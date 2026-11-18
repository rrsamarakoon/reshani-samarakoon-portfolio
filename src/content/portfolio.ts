import portraitAsset from "@/assets/reshani-portrait.jpg.asset.json";

/**
 * All portfolio copy and links live here so content can be updated without touching layout code.
 * Leave a URL as null until a real one exists: buttons for missing links are hidden, never faked.
 */

export const profile = {
  name: "Reshani Samarakoon",
  firstName: "Reshani",
  headline: "Aspiring AI Engineer | AI & Machine Learning Enthusiast",
  tagline: "Aspiring AI Engineer | Technology Enthusiast",
  status: "Currently Seeking AI / Machine Learning Internship Opportunities",
  intro:
    "I'm an Artificial Intelligence undergraduate at SLIIT, passionate about transforming innovative ideas into intelligent, real-world solutions through Machine Learning, Computer Vision, and modern software technologies.",
  email: "reshanisamarakoon@gmail.com",
  phone: "+94 70 277 6659",
  phoneHref: "tel:+94702776659",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/reshani-samarakoon-157771309/",
  github: "https://github.com/rrsamarakoon",
  /** Path or URL to the CV PDF. null = not supplied yet. */
  cvUrl: null as string | null,
  /** Path or URL to the real profile photograph. null = show monogram frame. */
  photoUrl: portraitAsset.url,
};

/** Hero "modern AI" details. Everything here is drawn from Reshani's real interests, skills and projects. */
export const heroAI = {
  exploring: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "RAG Systems",
    "AI Agents with LangGraph",
  ],
  prompt: "Who is Reshani?",
  stack: [
    "Python",
    "Scikit-learn",
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "ChromaDB",
    "FastAPI",
    "NumPy",
    "Seaborn",
    "RAG",
  ],
  visionLabel: "reshani · ai_engineer",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm an undergraduate specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology (SLIIT), with a passion for exploring the potential of AI to build smart solutions for real-world applications.",
    "My interests lie at the intersection of Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing. I enjoy exploring new technologies and applying them to solve real-world challenges.",
    "I believe in continuous learning, practical implementation, and transforming knowledge into meaningful technological solutions.",
  ],
  statement: "Driven by curiosity. Inspired by innovation. Focused on intelligent solutions.",
  facts: [
    { label: "Name", value: "Reshani Samarakoon" },
    { label: "Education", value: "BSc (Hons) in Information Technology" },
    { label: "Specialization", value: "Artificial Intelligence" },
    { label: "Institution", value: "SLIIT" },
    { label: "Academic Status", value: "3rd Year, 1st Semester" },
    { label: "Expected Graduation", value: "2028" },
    { label: "Location", value: "Sri Lanka" },
    { label: "Current Status", value: "Seeking Internship Opportunities" },
  ],
  interests: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
};

export const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    specialization: "Artificial Intelligence",
    level: "3rd Year, 1st Semester",
    graduation: "Expected 2028",
  },
];

export type Experience = {
  role: string;
  company: string;
  start: string;
  /** Add bullet points here once confirmed. Empty = nothing extra is shown. */
  details: string[];
};

export const experience: Experience[] = [
  {
    role: "Annotator",
    company: "Trident Corporation (Private) Limited",
    start: "12 June 2025",
    details: [],
  },
];

export type Project = {
  number: string;
  title: string;
  kind: "disaster" | "clinical";
  description: string;
  tech: string[];
  /** Tech tags rendered in gold to flag the AI parts of the stack. */
  aiTech: string[];
  /** Pipeline stages taken from the project description, shown as a schematic. */
  flow: string[];
  contributions: string[];
  githubUrl: string | null;
  demoUrl: string | null;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AI-Based Disaster Volunteer Coordination System",
    kind: "disaster",
    description:
      "Contributed to an AI-assisted disaster response system integrating incident management, volunteer matching, safety validation, resource tracking, and dispatch coordination.",
    tech: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "PostgreSQL",
      "React",
      "Flutter",
      "Python",
      "LangGraph",
    ],
    aiTech: ["Python", "LangGraph"],
    flow: ["Incident", "Safety validation", "Volunteer matching", "Dispatch agent", "Human approval"],
    contributions: [
      "Developed the Coordinator/Dispatch Agent using Python and LangGraph.",
      "Generated structured dispatch proposals based on safety-validated volunteers, matching scores, and incident resource information.",
      "Implemented volunteer ranking and availability filtering.",
      "Developed resource shortage detection.",
      "Implemented a human-in-the-loop approval workflow.",
      "Tested approval, revision, and rejection scenarios.",
    ],
    githubUrl: null,
    demoUrl: null,
  },
  {
    number: "02",
    title: "AI-Based Clinical Question Answering System",
    kind: "clinical",
    description:
      "Developed an AI-powered Medical Retrieval-Augmented Generation (RAG) Assistant to answer hypertension-related queries using Sri Lanka's National Hypertension Guidelines.",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "Hugging Face", "RAG Architecture"],
    aiTech: ["LangChain", "ChromaDB", "Hugging Face", "RAG Architecture"],
    flow: ["Guidelines", "Preprocessing", "Embeddings", "Semantic search", "Answer + page refs"],
    contributions: [
      "Built the end-to-end RAG pipeline.",
      "Implemented document preprocessing and embedding generation.",
      "Developed semantic search functionality.",
      "Integrated FastAPI for deployment.",
      "Implemented metadata-based page tracking.",
      "Applied prompt engineering to improve response accuracy and traceability.",
    ],
    githubUrl: null,
    demoUrl: null,
  },
];
