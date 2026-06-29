import { Logo } from "./components/Logo";
import { Motion } from "./components/Motion";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why AATech" },
  { href: "#process", label: "Process" },
  { href: "#tech", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    icon: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
    title: "Custom Software",
    desc: "Tailored platforms, SaaS products and internal tools built around your exact workflow — not an off-the-shelf compromise.",
  },
  {
    icon: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 14h18M9 21h6",
    title: "Web Development",
    desc: "Fast, accessible, SEO-ready websites and web apps using React, Next.js and modern, maintainable architecture.",
  },
  {
    icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18h2",
    title: "Mobile Apps",
    desc: "Native and cross-platform iOS & Android apps with smooth UX, offline support and store-ready delivery.",
  },
  {
    icon: "M12 3a8 8 0 0 0-8 8c0 3 2 5 4 6h8c2-1 4-3 4-6a8 8 0 0 0-8-8Zm-4 17h8",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure on AWS, Azure and GCP with CI/CD pipelines, containers and 24/7 monitoring.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5Zm-8 9 8 4 8-4M4 16l8 4 8-4",
    title: "UI/UX Design",
    desc: "Research-driven interface design and prototyping that turns complex ideas into clear, delightful experiences.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    title: "IT Consulting",
    desc: "Strategy, technical audits and digital transformation guidance to modernise systems and reduce cost.",
  },
];

const STATS = [
  { count: 50, suffix: "+", value: "50+", label: "Projects delivered" },
  { count: 30, suffix: "+", value: "30+", label: "Happy clients" },
  { count: 8, suffix: "+", value: "8+", label: "Years of experience" },
  { count: null, suffix: "", value: "24/7", label: "Support & monitoring" },
];

const WHY = [
  {
    title: "Senior engineers, no juniors hidden in the bill",
    desc: "You work directly with experienced developers who own the outcome end to end.",
  },
  {
    title: "Fixed scope, transparent pricing",
    desc: "Clear milestones and no surprise invoices — you always know what you're paying for.",
  },
  {
    title: "Built to scale from day one",
    desc: "Clean architecture and automated testing so your product grows without rewrites.",
  },
  {
    title: "On-time, every time",
    desc: "Agile sprints with weekly demos keep delivery predictable and you always in the loop.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We dig into your goals, users and constraints to define what success looks like." },
  { step: "02", title: "Design", desc: "Wireframes, prototypes and architecture you can review before a line of code is written." },
  { step: "03", title: "Build", desc: "Agile development with weekly demos, clean code and continuous integration." },
  { step: "04", title: "Launch & Support", desc: "Smooth deployment, monitoring and ongoing maintenance so you can rest easy." },
];

const TECH = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Django",
  "Flutter", "React Native", "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Kubernetes", "GraphQL", "Laravel", ".NET",
];

const EMAIL = "info@aatech.pk";
const PHONE_DISPLAY = "+92 303 2455033";
const PHONE_RAW = "+923032455033";
const WHATSAPP = "923032455033";

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link">Skip to content</a>

      {/* ---------- Header ---------- */}
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="brand" aria-label="AATech home">
            <Logo />
          </a>
          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav__link">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn--sm btn--primary nav__cta">
            Get a quote
          </a>
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__blobs" aria-hidden="true">
            <span className="blob blob--1" />
            <span className="blob blob--2" />
            <span className="blob blob--3" />
          </div>
          <div className="container hero__inner">
            <p className="eyebrow reveal">
              <span className="ping" aria-hidden="true" /> IT &amp; Software Solutions
            </p>
            <h1 className="hero__title reveal" style={{ transitionDelay: "80ms" }}>
              We build software that{" "}
              <span className="grad">moves your business forward</span>
            </h1>
            <p className="hero__sub reveal" style={{ transitionDelay: "160ms" }}>
              AATech is a Pakistan-based software house crafting custom web
              platforms, mobile apps and cloud solutions for startups and
              enterprises worldwide. From idea to launch — engineered to last.
            </p>
            <div className="hero__actions reveal" style={{ transitionDelay: "240ms" }}>
              <a href="#contact" className="btn btn--primary btn--shine">
                Start your project
              </a>
              <a href="#services" className="btn btn--ghost">Explore services</a>
            </div>
            <div className="hero__stats reveal" style={{ transitionDelay: "320ms" }}>
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <span
                    className="stat__value"
                    data-count={s.count ?? undefined}
                    data-suffix={s.suffix}
                  >
                    {s.value}
                  </span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section" id="services">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">What we do</p>
              <h2 className="section__title">Services built to deliver results</h2>
              <p className="section__lead">
                A full-stack team that takes you from concept to a polished,
                production-ready product.
              </p>
            </div>
            <div className="grid grid--3">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className="card reveal"
                  style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                >
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Why AATech ---------- */}
        <section className="section section--alt" id="why">
          <div className="container why">
            <div className="why__intro reveal">
              <p className="eyebrow">Why AATech</p>
              <h2 className="section__title">
                A partner that&apos;s as invested in the outcome as you are
              </h2>
              <p className="section__lead">
                We don&apos;t just write code — we sweat the details that make a
                product reliable, scalable and a pleasure to use.
              </p>
              <a href="#contact" className="btn btn--primary">Let&apos;s talk</a>
            </div>
            <ul className="why__list">
              {WHY.map((w, i) => (
                <li
                  key={w.title}
                  className="why__item reveal"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="why__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="why__title">{w.title}</h3>
                    <p className="why__desc">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section className="section" id="process">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">How we work</p>
              <h2 className="section__title">A clear path from idea to launch</h2>
            </div>
            <div className="grid grid--4">
              {PROCESS.map((p, i) => (
                <div
                  key={p.step}
                  className="step reveal"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="step__num">{p.step}</span>
                  <h3 className="step__title">{p.title}</h3>
                  <p className="step__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Tech stack ---------- */}
        <section className="section section--alt" id="tech">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">Our toolbox</p>
              <h2 className="section__title">Technologies we master</h2>
              <p className="section__lead">
                We pick the right tool for the job — proven, modern and built to last.
              </p>
            </div>
          </div>
          <div className="marquee reveal" aria-label="Technologies we use">
            <div className="marquee__track">
              {[...TECH, ...TECH].map((t, i) => (
                <span key={`${t}-${i}`} className="chip" aria-hidden={i >= TECH.length}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA / Contact ---------- */}
        <section className="section" id="contact">
          <div className="container">
            <div className="cta reveal">
              <div className="cta__glow" aria-hidden="true" />
              <p className="eyebrow">Get in touch</p>
              <h2 className="cta__title">Have a project in mind? Let&apos;s build it.</h2>
              <p className="cta__sub">
                Tell us what you&apos;re working on and we&apos;ll get back to you within
                one business day with next steps.
              </p>
              <div className="cta__actions">
                <a href={`mailto:${EMAIL}`} className="btn btn--primary btn--shine">Email us</a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="btn btn--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="cta__contacts">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span aria-hidden="true">•</span>
                <a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tag">
              Engineering reliable software for businesses in Pakistan and
              around the world.
            </p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <div className="footer__contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} AATech. All rights reserved.</p>
          <p>aatech.pk</p>
        </div>
      </footer>

      {/* ---------- SEO: structured data ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AATech",
            url: "https://aatech.pk",
            email: EMAIL,
            description:
              "AATech is an IT and software development company building custom web, mobile and cloud solutions.",
            address: { "@type": "PostalAddress", addressCountry: "PK" },
            sameAs: [],
          }),
        }}
      />

      <Motion />
    </>
  );
}
