"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const skills = [
  {
    stage: "01",
    group: "Build",
    summary: "Maintainable software and APIs",
    items: ["Python", "Java", "Django", "REST APIs"],
    evidence: "Applied across backend services, developer utilities, validation tooling, and high-throughput API workflows.",
  },
  {
    stage: "02",
    group: "Data",
    summary: "Reliable storage and processing",
    items: ["SQL", "PostgreSQL", "MongoDB", "Supabase", "Apache Spark"],
    evidence: "Used to build transactional migration safeguards, data validation automation, and scalable processing pipelines.",
  },
  {
    stage: "03",
    group: "Ship",
    summary: "Safe, repeatable delivery",
    items: ["Docker", "GitHub Actions", "Helm", "Git"],
    evidence: "Powers automated CI/CD, containerized releases, checksum validation, and safer database deployment gates.",
  },
  {
    stage: "04",
    group: "Operate",
    summary: "Cloud systems that stay dependable",
    items: ["AWS", "Azure", "Kubernetes", "Rancher"],
    evidence: "Used for Kubernetes troubleshooting, secrets management, production workloads, and cost-conscious cloud operations.",
  },
  {
    stage: "05",
    group: "Automate",
    summary: "Workflows that remove repetition",
    items: ["Celery", "Temporal", "Stagehand", "Selenium", "ACCELQ"],
    evidence: "Supports browser research, regression testing, durable job orchestration, and maintainable release automation.",
  },
  {
    stage: "06",
    group: "Intelligence",
    summary: "AI grounded in useful systems",
    items: ["LangGraph", "LangChain", "OpenAI API", "TensorFlow", "Hugging Face"],
    evidence: "Applied in the Dual Momentum + News Tracker, agentic research workflows, and production-ready AI systems.",
  },
] as const;

const petals = [
  [8, 2.5, 0.2, 11],
  [17, 3.1, 2.2, 16],
  [30, 3.7, 1.3, 12],
  [48, 4.2, 3.1, 18],
  [62, 3.3, 0.8, 13],
  [75, 4.5, 2.7, 16],
  [89, 3.8, 1.8, 12],
] as const;

const experience = [
  {
    role: "Developer",
    company: "Rexera",
    dates: "Nov 2025 — Present",
    bullets: [
      "Built AI research and browser automation systems with Celery, LangGraph, Temporal, Gemini, and Stagehand.",
      "Engineered scalable APIs and production AI workflows with reliable orchestration, observability, and maintainable code.",
      "Reduced cloud costs and automated regression checks across production Kubernetes workflows.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "RealPage",
    dates: "Oct 2024 — Nov 2025",
    bullets: [
      "Built an internal Kubernetes and Rancher application that made cluster troubleshooting faster.",
      "Created Python and SQL validation automation to surface product-data mismatches.",
      "Supported reliable containerized automation across product and platform environments.",
    ],
  },
  {
    role: "Automation Engineer Intern",
    company: "ACCELQ",
    dates: "Feb 2024 — Sep 2024",
    bullets: [
      "Expanded regression coverage with maintainable end-to-end automated test cases.",
      "Translated product workflows into test scenarios and identified automation gaps.",
      "Partnered with engineering and QA teams to improve release reliability.",
    ],
  },
];

const roles = [
  "Software Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "AI Engineer",
  "Database Engineer",
] as const;
const projectFilters = ["All", "Software", "Cloud & DevOps", "AI & Data", "Automation"] as const;
const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=surajkpanda712%40gmail.com&su=Hello%20Suraj%20%E2%80%94%20Portfolio%20Enquiry&body=Hi%20Suraj%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20%5Ban%20opportunity%20%2F%20a%20project%5D.%0A%0AHere%20are%20a%20few%20details%3A%0A%5BWrite%20your%20message%20here%5D%0A%0ABest%2C%0A%5BYour%20name%5D";

function Seal({ label = "SP" }: { label?: string }) {
  return (
    <span className="seal" aria-hidden="true">
      {label}
    </span>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <Seal />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function Blossom({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className="blossom-svg">
      {[0, 72, 144, 216, 288].map((rotation) => (
        <ellipse key={rotation} cx="0" cy="-6" rx="4.4" ry="7" transform={`rotate(${rotation})`} />
      ))}
      <circle r="2.2" className="blossom-center" />
    </g>
  );
}

function BranchArt({ side }: { side: "left" | "right" }) {
  const flip = side === "right" ? "scale(-1 1) translate(-400 0)" : undefined;
  return (
    <svg
      className={`hero-branch hero-branch-${side}`}
      viewBox="0 0 400 600"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
    >
      <g transform={flip}>
        <path d="M-40 500 C70 445 72 330 185 286 C245 263 280 204 342 98" className="branch-main" />
        <path d="M83 411 C119 398 143 369 154 328" className="branch-thin" />
        <path d="M154 310 C122 279 111 244 118 206" className="branch-thin" />
        <path d="M193 281 C238 291 274 278 305 245" className="branch-thin" />
        <path d="M248 245 C228 207 231 170 250 139" className="branch-thin" />
        <path d="M294 186 C330 180 351 160 367 131" className="branch-thin" />
        <Blossom x={80} y={412} scale={0.9} />
        <Blossom x={122} y={375} />
        <Blossom x={154} y={327} scale={0.75} />
        <Blossom x={121} y={224} scale={1.05} />
        <Blossom x={194} y={279} scale={1.15} />
        <Blossom x={252} y={244} scale={0.85} />
        <Blossom x={303} y={243} />
        <Blossom x={250} y={144} scale={1.1} />
        <Blossom x={341} y={98} scale={0.9} />
        <circle cx="105" cy="389" r="3" className="bud" />
        <circle cx="134" cy="257" r="3" className="bud" />
        <circle cx="279" cy="211" r="3" className="bud" />
      </g>
    </svg>
  );
}

function InkAvatar() {
  return (
    <div
      className="avatar-art"
      tabIndex={0}
      aria-label="Portrait of Suraj Panda saying hello"
    >
      <Image
        className="portrait-image"
        src="/images/suraj-portrait-pencil.png"
        alt="Pencil portrait of Suraj Panda, software engineer"
        width={1131}
        height={1391}
        sizes="(max-width: 720px) 250px, 340px"
      />
      <span className="portrait-greeting" aria-hidden="true">
        Hi!
      </span>
      <div className="portrait-caption">
        <span>Suraj Panda</span>
        <small>Software Engineer</small>
      </div>
    </div>
  );
}

function SkillWorkflow() {
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[number]["group"]>("Build");
  const active = skills.find((skill) => skill.group === activeSkill) ?? skills[0];

  return (
    <div className="skills-workflow">
      <div className="workflow-track" role="list" aria-label="Engineering workflow and technical skills">
        {skills.map((skill) => (
          <div className="workflow-step" role="listitem" key={skill.group}>
            <motion.button
              type="button"
              className={`workflow-card${activeSkill === skill.group ? " is-active" : ""}`}
              whileHover={{ y: -5 }}
              onClick={() => setActiveSkill(skill.group)}
              aria-pressed={activeSkill === skill.group}
              aria-controls="skill-evidence"
            >
              <span className="workflow-node" aria-hidden="true" />
              <span className="workflow-stage">{skill.stage}</span>
              <strong>{skill.group}</strong>
              <small>{skill.summary}</small>
            </motion.button>
            <AnimatePresence initial={false}>
              {activeSkill === skill.group && (
                <motion.div
                  className="workflow-inline-evidence"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p>{skill.evidence}</p>
                  <div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          id="skill-evidence"
          className="skill-evidence hand-border"
          key={active.group}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          aria-live="polite"
        >
          <div className="skill-evidence-heading">
            <span>Selected practice · {active.stage}</span>
            <strong>{active.group}</strong>
          </div>
          <div className="skill-evidence-copy">
            <p>{active.evidence}</p>
            <div className="skill-evidence-tags">
              {active.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Portfolio() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [projectFilter, setProjectFilter] = useState<(typeof projectFilters)[number]>("All");
  const [copied, setCopied] = useState(false);
  const inkXRaw = useMotionValue(-400);
  const inkYRaw = useMotionValue(-400);
  const inkX = useSpring(inkXRaw, { stiffness: 90, damping: 24 });
  const inkY = useSpring(inkYRaw, { stiffness: 90, damping: 24 });
  const visibleProjects = projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3200);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("surajkpanda712@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7 },
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Suraj Panda, home">
          <Seal />
          <span>Suraj Panda</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="top"
        className="hero"
        aria-labelledby="hero-title"
        onPointerMove={(event) => {
          if (reduceMotion || event.pointerType === "touch") return;
          const rect = event.currentTarget.getBoundingClientRect();
          inkXRaw.set(event.clientX - rect.left - 130);
          inkYRaw.set(event.clientY - rect.top - 130);
        }}
        onPointerLeave={() => {
          inkXRaw.set(-400);
          inkYRaw.set(-400);
        }}
      >
        {!reduceMotion && <motion.div className="ink-cursor" style={{ x: inkX, y: inkY }} aria-hidden="true" />}
        <BranchArt side="left" />
        <BranchArt side="right" />
        <div className="ink-mist ink-mist-one" />
        <div className="ink-mist ink-mist-two" />
        {!reduceMotion && (
          <div className="petal-field" aria-hidden="true">
            {petals.map(([left, duration, delay, size], index) => (
              <motion.span
                key={index}
                className="falling-petal"
                style={{ left: `${left}%`, width: size, height: size * 0.55 }}
                animate={{ y: ["-8vh", "108vh"], x: [0, index % 2 ? 46 : -34, 12], rotate: [0, 170, 330] }}
                transition={{ duration: duration * 3, delay, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>
        )}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-overline">SOFTWARE ENGINEER · CLOUD &amp; PLATFORM</span>
          <h1 id="hero-title">Suraj Panda</h1>
          <button
            className="role-switcher"
            type="button"
            onClick={() => setRoleIndex((index) => (index + 1) % roles.length)}
            aria-label="Cycle engineering roles"
          >
            <span>I&apos;m a</span>
            <span className="role-window">
              <AnimatePresence mode="wait">
                <motion.strong
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 13 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -13 }}
                  transition={{ duration: 0.28 }}
                >
                  {roles[roleIndex]}
                </motion.strong>
              </AnimatePresence>
            </span>
            <span aria-hidden="true">↻</span>
          </button>
          <p className="hero-tagline">Software engineer building reliable cloud, DevOps, AI, and data systems.</p>
          <p className="hero-intro">
            I engineer high-throughput APIs, dependable CI/CD pipelines, maintainable software, production-ready AI workflows, and data systems designed to scale.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowIcon />
            </a>
            <a className="button button-ghost" href="#contact">
              Contact
            </a>
          </div>
          <div className="hero-metrics" aria-label="Career highlights">
            <span><strong>2+</strong> years</span>
            <span><strong>1M+</strong> API calls · sub-second responses</span>
            <span><strong>CI/CD</strong> automated delivery</span>
            <span><strong>Cloud</strong> scalable architecture</span>
            <span><strong>AI</strong> production-ready systems</span>
            <span><strong>Data</strong> reliable pipelines</span>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span>SCROLL</span>
            <i />
          </div>
        </motion.div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading eyebrow="01 · About" title="Engineering with quiet confidence." />
          </motion.div>
          <motion.div className="about-scroll hand-border" {...reveal}>
            <div className="scroll-rod scroll-rod-top" />
            <div className="about-copy">
              <p className="drop-cap">
                I’m a software engineer with 2+ years of experience designing, building, testing, and maintaining reliable software solutions.
              </p>
              <p>
                My work spans backend development, cloud platforms, APIs, automation, data processing, and AI-enabled applications. I enjoy the seam between product and infrastructure—where a small, thoughtful tool can make an entire team faster.
              </p>
              <div className="about-notes">
                <span>Based in India</span>
                <span>2+ years building</span>
                <span>Platform-minded</span>
              </div>
            </div>
            <InkAvatar />
            <div className="scroll-rod scroll-rod-bottom" />
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="mist-band" />
        <div className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading eyebrow="02 · Skills" title="How I build reliable systems." />
          </motion.div>
          <motion.p className="skills-intro" {...reveal}>
            A connected engineering practice—from maintainable code and data foundations to cloud operations, automation, and production AI.
          </motion.p>
          <motion.div {...reveal}>
            <SkillWorkflow />
          </motion.div>
          <div className="supporting-skills" aria-label="Additional skills">
            {[
              "Redis",
              "Playwright",
              "Gemini",
              "Amazon S3",
              "Athena",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading eyebrow="03 · Experience" title="Systems shaped in the real world." />
          </motion.div>
          <div className="timeline">
            <motion.div
              className="timeline-stem"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: reduceMotion ? 0 : 1.7, ease: "easeOut" }}
            />
            {experience.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: reduceMotion ? 0 : index % 2 === 0 ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <div className="timeline-blossom" aria-hidden="true">✿</div>
                <div className="timeline-card hand-border">
                  <div className="timeline-meta">
                    <span>{item.dates}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading eyebrow="04 · Projects" title="Useful things, made carefully." />
          </motion.div>
          <div className="project-filter" role="group" aria-label="Filter projects by category">
            {projectFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={projectFilter === filter ? "is-active" : ""}
                onClick={() => setProjectFilter(filter)}
                aria-pressed={projectFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                className={`project-card${project.featured ? " project-featured" : ""}`}
                key={project.title}
                layout
                style={{ rotate: index === 0 ? -1.2 : index === 1 ? 0.8 : -0.5 }}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: 0 }}
              >
                <div className="project-pin" aria-hidden="true" />
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Explore repository <ArrowIcon />
                    </a>
                  ) : (
                    <span>Repository coming soon</span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <ArrowIcon />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
            </AnimatePresence>
          </div>
          <a className="all-projects-link" href="https://github.com/surajkumarr712?tab=repositories" target="_blank" rel="noreferrer">
            See all projects on GitHub <ArrowIcon />
          </a>
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="section-shell education-shell">
          <motion.div {...reveal}>
            <SectionHeading eyebrow="05 · Education" title="Where the foundation was laid." />
          </motion.div>
          <motion.div className="education-card hand-border" {...reveal}>
            <div className="degree-mark">学</div>
            <div>
              <p className="education-date">2021 — 2025</p>
              <h3>B.Tech</h3>
              <p>Geethanjali College of Engineering and Technology</p>
            </div>
          </motion.div>
          <div className="certifications">
            <span>AWS Academy Cloud Foundations</span>
            <span>ACCELQ Automation Engineer Certification</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-branch" aria-hidden="true" />
        <motion.div className="contact-panel" {...reveal}>
          <Seal />
          <p className="contact-eyebrow">06 · CONTACT</p>
          <h2>Let’s build something dependable.</h2>
          <p>
            I’m always glad to talk about cloud platforms, developer tooling, automation, and the systems that quietly keep everything moving.
          </p>
          <a className="email-link" href={gmailComposeUrl} target="_blank" rel="noreferrer">
            surajkpanda712@gmail.com <ArrowIcon />
          </a>
          <button className="copy-email" type="button" onClick={copyEmail} aria-live="polite">
            {copied ? "Copied to clipboard ✓" : "Copy email"}
          </button>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/suraj-kumar-aa4042267" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/surajkumarr712" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+917981595260">+91 79815 95260</a>
          </div>
        </motion.div>
      </section>

      <footer>
        <div className="footer-mark"><Seal /></div>
        <p>Designed &amp; built with patience by Suraj Panda.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
