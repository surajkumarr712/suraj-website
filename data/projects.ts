export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Software" | "Cloud & DevOps" | "AI & Data" | "Automation";
  github?: string;
  live?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "PostgreSQL Migration Pipeline",
    description:
      "A production-minded deployment gate that tracks migration checksums, prevents concurrent runs with advisory locks, and rolls back failed transactions safely.",
    tech: ["Python 3.11", "PostgreSQL", "Docker", "GitHub Actions"],
    category: "Cloud & DevOps",
    github: "https://github.com/surajkumarr712/postgresql-migration-pipeline",
    status: "Deployment tooling",
    featured: true,
  },
  {
    title: "GitHub Context Command",
    description:
      "A Python Git extension that maps cross-language dependencies, reports repository metadata, scans for secrets, and emits structured JSON for coding tools.",
    tech: ["Python", "Git", "Static Analysis", "JSON"],
    category: "Software",
    github: "https://github.com/surajkumarr712/impact-command",
    status: "Developer tooling",
    featured: true,
  },
  {
    title: "Dual Momentum + News Tracker",
    description:
      "A Streamlit market assistant that evaluates HDFC and ICICI momentum, then passes the signals through a LangGraph workflow with a pluggable news-summary stage to produce a Bank Nifty outlook.",
    tech: ["Python", "LangGraph", "LangChain", "yfinance", "Streamlit"],
    category: "AI & Data",
    github: "https://github.com/surajkumarr712/Dual_momentum_tracker",
    status: "Stock & news intelligence",
    featured: true,
  },
  {
    title: "InvestIQ",
    description:
      "An interactive stock ROI calculator that turns share count, purchase price, and current price into clear return and profit figures with a company-results view.",
    tech: ["React", "Material UI", "JavaScript", "Financial UX"],
    category: "Software",
    github: "https://github.com/surajkumarr712/InvestIQ",
    status: "Stock application",
  },
  {
    title: "Kubernetes Secrets Manager",
    description:
      "A secure Kubernetes workflow for storing application credentials as Secrets and injecting them into workloads without hard-coding sensitive values in application code or deployment manifests.",
    tech: ["Kubernetes", "Secrets", "YAML", "DevOps Security"],
    category: "Cloud & DevOps",
    status: "Infrastructure security",
  },
];
