import Image from "next/image";
import type { CSSProperties } from "react";

const links = {
  github: "https://github.com/saivinith",
  linkedin: "https://www.linkedin.com/in/saivinith",
  email:
    "mailto:saivinithyellapragada@gmail.com?subject=Hello%20from%20your%20website",
};

const projectStack = [
  "Next.js",
  "Spring Boot",
  "PostgreSQL",
  "FastAPI",
  "Docker",
  "Ollama",
  "Embeddings",
  "Semantic Retrieval",
  "RAG",
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
    const bright = random() > 0.88;

    const depth: StarDepth =
      depthRoll < 0.5 ? "far" : depthRoll < 0.82 ? "mid" : "near";

    return {
      id: index,
      x: random() * 100,
      y: random() * 100,
      size: bright ? 1.6 + random() * 2.2 : 0.7 + random() * 1.6,
      opacity: bright ? 0.72 + random() * 0.28 : 0.35 + random() * 0.55,
      duration: 18 + random() * 30,
      delay: random() * 45,
      driftX: -18 + random() * 36,
      driftY: -12 + random() * 24,
      tone: tones[Math.floor(random() * tones.length)],
      depth,
      bright,
    };
  });
}

const stars = createStars(520);

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
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Go to homepage">
            <span className="brand-orb" />
            <span>sai.v</span>
          </a>

          <div className="nav-links">
            <a href="#mindvault">MindVault</a>
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
              I’m a Software Engineer at Amazon, working on backend services and
              reliability at scale. Outside of work, I build projects, explore AI,
              and keep learning more about distributed systems.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#mindvault">
                Explore MindVault <span>↓</span>
              </a>

              <a
                className="secondary-action"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
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
              <span>PERSONAL SITE</span>
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

        <section id="mindvault" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">01 / Project</p>
            <h2>Currently building.</h2>
          </div>

          <article className="project-card">
            <div className="project-topbar">
              <span className="project-id">PROJECT_01</span>

              <span className="project-status">
                <i />
                in progress
              </span>
            </div>

            <div className="project-content">
              <div className="project-copy">
                <p className="project-tagline">
                  Remember more. Reflect deeper. Think better.
                </p>

                <h3>MindVault</h3>

                <p>
                  A private, context-aware AI companion for journaling and
                  long-term personal knowledge. MindVault is being built to
                  remember meaningful moments, surface relevant context, and
                  support more thoughtful reflection over time.
                </p>

                <p className="project-subcopy">
                  Its AI layer combines embeddings, semantic retrieval, and
                  retrieval-augmented generation (RAG) so reflections,
                  summaries, and questions can use relevant past entries and
                  conversations instead of acting like a generic chatbot.
                </p>
              </div>

              <div className="architecture-card">
                <p className="architecture-label">v1 architecture</p>

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
                  <span>Embeddings + retrieval</span>
                  <b>→</b>
                  <span>Grounded RAG responses</span>
                </div>
              </div>
            </div>

            <div className="project-footer">
              <div className="tech-list">
                {projectStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <span className="project-update">Building v1</span>
            </div>
          </article>
        </section>

        <section id="connect" className="section connect-section">
          <div className="section-heading">
            <p className="eyebrow">02 / Connect</p>
            <h2>Elsewhere on the internet.</h2>
          </div>

          <div className="connect-grid">
            <a href={links.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>↗</strong>
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>↗</strong>
            </a>

            <a href={links.email}>
              <span>Email</span>
              <strong>↗</strong>
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