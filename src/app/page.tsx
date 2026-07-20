import Image from "next/image";
import type { CSSProperties } from "react";
import ExperienceYears from "../components/ExperienceYears";

const links = {
  github: "https://github.com/saivinith",
  linkedin: "https://www.linkedin.com/in/saivinith",
  email:
    "mailto:saivinithyellapragada@gmail.com?subject=Hello%20from%20your%20website",
  mindvaultRepo: "https://github.com/saivinith/mindvault",
  freshMartRepo: "https://github.com/saivinith/FreshMart",
  shortestPathRepo:
    "https://github.com/saivinith/Shortest-path-Using-Image-Processing1",
};

const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    area: "Groceries & Retail",
    period: "Aug 2023 — Present",
    description:
      "Building backend services for inventory, fulfillment, reliability, and regional expansion workflows across groceries and retail.",
    technologies: ["Java", "Kotlin", "AWS", "Spring Boot"],
    current: true,
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Developer",
    area: null,
    period: "Oct 2018 — Dec 2020",
    description:
      "Built and supported enterprise applications, backend APIs, and database-driven workflows before moving into large-scale product engineering.",
    technologies: ["Java", "Spring Boot", "SQL", "Git"],
    current: false,
  },
];

const mindvaultStack = [
  "Next.js",
  "Spring Boot",
  "PostgreSQL",
  "pgvector",
  "FastAPI",
  "Ollama",
  "JWT",
  "Docker",
];

const mindvaultHighlights = [
  {
    title: "Authenticated workspaces",
    description:
      "Write, Reflect, and Library are protected by real accounts with per-user data isolation.",
  },
  {
    title: "Reviewable memory",
    description:
      "Entries remain authoritative while extracted memories can be reviewed before retrieval.",
  },
  {
    title: "Grounded reflection",
    description:
      "Semantic retrieval provides source memories for streamed, context-aware responses.",
  },
];

const publicProjects = [
  {
    index: "02",
    title: "FreshMart",
    type: "Full-stack application",
    description:
      "An online grocery application with sign-up, login, product browsing, cart management, and order placement.",
    stack: ["React", "Python", "MongoDB"],
    href: links.freshMartRepo,
  },
  {
    index: "03",
    title: "Shortest Path via Image Processing",
    type: "Algorithm project",
    description:
      "A Python project that identifies objects in images, compares similar objects, and explores shortest paths between visual or geographic inputs.",
    stack: ["Python", "Image Processing", "Pathfinding"],
    href: links.shortestPathRepo,
  },
];

type StarTone = "white" | "blue" | "violet" | "mint";
type StarDepth = "far" | "mid" | "near";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  tone: StarTone;
  depth: StarDepth;
  bright: boolean;
};

type StarStyle = CSSProperties & {
  "--drift-duration": string;
  "--drift-delay": string;
  "--drift-x": string;
  "--drift-y": string;
};

function createSeededRandom(seed: number) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let temp = value;
    temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
    temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
    return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
  };
}

function createStars(count: number): Star[] {
  const random = createSeededRandom(20260621);
  const tones: StarTone[] = ["white", "blue", "violet", "mint"];

  return Array.from({ length: count }, (_, index) => {
    const depthRoll = random();
    const bright = random() > 0.9;
    const depth: StarDepth =
      depthRoll < 0.5 ? "far" : depthRoll < 0.82 ? "mid" : "near";

    return {
      id: index,
      x: random() * 100,
      y: random() * 100,
      size: bright ? 1.6 + random() * 1.8 : 0.7 + random() * 1.4,
      opacity: bright ? 0.74 + random() * 0.24 : 0.3 + random() * 0.5,
      duration: 12 + random() * 18,
      delay: random() * 28,
      driftX: -24 + random() * 48,
      driftY: -16 + random() * 32,
      tone: tones[Math.floor(random() * tones.length)],
      depth,
      bright,
    };
  });
}

const stars = createStars(400);

function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => {
        const style: StarStyle = {
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          opacity: star.opacity,
          "--drift-duration": `${star.duration}s`,
          "--drift-delay": `-${star.delay}s`,
          "--drift-x": `${star.driftX}vw`,
          "--drift-y": `${star.driftY}vh`,
        };

        return (
          <span
            key={star.id}
            className={[
              "star",
              `star--${star.tone}`,
              `star--${star.depth}`,
              star.bright ? "star--bright" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={style}
          />
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Starfield />

      <main className="page">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Go to homepage">
            <span className="brand-orb" />
            <span>sai.v</span>
          </a>

          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#connect">Connect</a>

            <a
              className="github-button"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </nav>

        <section id="top" className="hero">
          <div className="hero-copy">

            <h1>
              Hi, I’m Vinith.
              <br />
              <span>Curious by default. Building as I go.</span>
            </h1>

            <p className="hero-description">
              I’m a software engineer with <ExperienceYears />+ years of
              experience building backend systems. Away from the screen, I
              enjoy hiking, staying active, and exploring the Pacific
              Northwest.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                Explore Projects <span>↓</span>
              </a>

              <a className="secondary-action" href="#experience">
                View experience
              </a>
            </div>
          </div>

          <aside className="identity-card">
            <div className="identity-space-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-dot" />

            <div className="identity-header">
              <span>PROFILE</span>
            </div>

            <div className="portrait-shell">
              <Image
                src="/profile.jpg"
                alt="Sai Vinith"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 360px"
                className="profile-image"
              />
            </div>

            <div className="identity-info">
              <p className="identity-name">Sai Vinith</p>
              <p className="identity-meta">
                Software engineer · Pacific Northwest
              </p>
            </div>
          </aside>
        </section>

        <section id="experience" className="section section-bordered">
          <div className="section-heading">
            <p className="eyebrow">01 / Experience</p>
            <h2>Professional experience.</h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="experience-period">
                  <span>{item.period}</span>
                  {item.current ? <i>Current</i> : null}
                </div>

                <div className="experience-main">
                  <p className="experience-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  {item.area ? (
                    <p className="experience-area">{item.area}</p>
                  ) : null}
                  <p className="experience-description">{item.description}</p>

                  <div className="tech-list">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-bordered">
          <div className="section-heading">
            <p className="eyebrow">02 / Projects</p>
            <h2>A personal memory system, not another chatbot.</h2>
          </div>

          <article className="project-card project-card-featured">
            <div className="project-topbar">
              <span className="project-id">PROJECT_01</span>

              <div className="project-topbar-right">
                <a
                  className="project-repo-link"
                  href={links.mindvaultRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository ↗
                </a>

                <span className="project-status">
                  <i />
                  Active build
                </span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-copy">
                <p className="project-tagline">
                  Remember more. Reflect deeper. Think better.
                </p>

                <h3>MindVault</h3>

                <p>
                  A private, local-first AI companion for journaling and
                  long-term personal memory. Authenticated Write, Reflect, and
                  Library workspaces form a working end-to-end product loop.
                </p>

                <p className="project-subcopy">
                  Entries remain the source of truth. Reviewable memories and
                  semantic retrieval provide grounded context for streamed
                  reflections.
                </p>

                <div className="project-actions">
                  <a
                    className="primary-action"
                    href={links.mindvaultRepo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspect the repository ↗
                  </a>
                </div>
              </div>

              <div className="architecture-card">
                <p className="architecture-label">Current architecture</p>

                <div className="architecture-row">
                  <span>Next.js</span>
                  <b>→</b>
                  <span>Spring Boot</span>
                  <b>→</b>
                  <span>PostgreSQL</span>
                </div>

                <div className="architecture-row architecture-secondary">
                  <span>FastAPI + Ollama</span>
                  <b>→</b>
                  <span>pgvector retrieval</span>
                  <b>→</b>
                  <span>Grounded reflection</span>
                </div>

                <div className="tech-list">
                  {mindvaultStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mindvault-highlights">
              {mindvaultHighlights.map((highlight, index) => (
                <div className="highlight-card" key={highlight.title}>
                  <span>0{index + 1}</span>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="project-archive-heading">
            <div>
              <p className="eyebrow">Earlier projects</p>
              <h3>Other public work.</h3>
            </div>

            <p>
              Earlier repositories covering full-stack application development
              and algorithm-focused experiments.
            </p>
          </div>

          <div className="public-work-grid">
            {publicProjects.map((project) => (
              <a
                className="public-project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="public-project-header">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <strong>Open repository ↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section id="connect" className="section section-bordered">
          <div className="section-heading">
            <p className="eyebrow">03 / Connect</p>
            <h2>Elsewhere on the internet.</h2>
          </div>

          <div className="connect-grid">
            <a href={links.github} target="_blank" rel="noreferrer">
              <span>Public code and projects</span>
              <strong>GitHub ↗</strong>
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <span>Professional experience</span>
              <strong>LinkedIn ↗</strong>
            </a>

            <a href={links.email}>
              <span>Start a conversation</span>
              <strong>Email ↗</strong>
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Sai Vinith</span>
          <span>Built with curiosity.</span>
        </footer>
      </main>
    </>
  );
}