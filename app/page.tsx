import { Logo } from "./components/Logo";
import { Motion } from "./components/Motion";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#reporting", label: "Reporting" },
  { href: "#why", label: "Why AATech" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    icon: "M12 2a4 4 0 0 1 4 4 4 4 0 0 1 0 8 4 4 0 0 1-8 0 4 4 0 0 1 0-8 4 4 0 0 1 4-4Zm0 6v4m-6 2h12M4 9h2m12 0h2M4 15h2m12 0h2",
    title: "AI-Powered Development",
    desc: "We build AI into your products — LLM & Claude integrations, smart chatbots, recommendation engines, document automation and predictive features that give you an edge.",
  },
  {
    icon: "M3 3h2l1 12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-1.8L21 7H6m3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    title: "E-commerce Solutions",
    desc: "8+ years building and scaling online stores end to end — Magento, Shopify, WooCommerce and custom platforms, from catalog and checkout to fulfilment.",
  },
  {
    icon: "M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-7 7-2 2m0-11 2 2m7 7 2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    title: "Business Automation",
    desc: "Replace repetitive manual work with automated workflows, bots and pipelines that connect your tools and run 24/7 — fewer errors, lower cost, more speed.",
  },
  {
    icon: "M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6M6 6h.01M18 18h.01M4 3h4v4H4V3Zm12 14h4v4h-4v-4Z",
    title: "Systems Integration",
    desc: "Connect ERPs, CRMs, POS, payment gateways, marketplaces and APIs into one seamless, reliable flow of data across your whole business.",
  },
  {
    icon: "M3 3v18h18M7 14l4-4 3 3 5-6m0 0h-4m4 0v4",
    title: "Data, Reporting & BI",
    desc: "Real-time dashboards, automated reports and live KPIs that turn raw numbers into decisions you can act on — delivered to inbox, screen or mobile.",
  },
  {
    icon: "M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
    title: "Big Data & Analytics",
    desc: "Pipelines that ingest, clean and analyse millions of records to surface trends, forecasts and opportunities hiding in your data.",
  },
  {
    icon: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 14h18M9 21h6",
    title: "Custom Software & Web",
    desc: "Tailored web platforms and SaaS products built with React, Next.js and clean, maintainable architecture — designed to scale from day one.",
  },
  {
    icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18h2",
    title: "Mobile Apps",
    desc: "Native and cross-platform iOS & Android apps with smooth UX, offline support and store-ready delivery.",
  },
  {
    icon: "M12 3a8 8 0 0 0-8 8c0 3 2 5 4 6h8c2-1 4-3 4-6a8 8 0 0 0-8-8Zm-4 17h8",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure on AWS, Azure and GCP with CI/CD pipelines, containers and 24/7 monitoring that keeps everything running.",
  },
];

const STATS = [
  { count: 8, suffix: "+", value: "8+", label: "Years in e-commerce" },
  { count: 120, suffix: "+", value: "120+", label: "Projects delivered" },
  { count: 40, suffix: "+", value: "40+", label: "Clients, local & global" },
  { count: null, suffix: "", value: "24/7", label: "Support & automation" },
];

const WHY = [
  {
    title: "8+ years of e-commerce expertise",
    desc: "End-to-end online retail — development, integration, automation, reporting and big data — for stores of every size.",
  },
  {
    title: "AI & automation at the core",
    desc: "We bake AI and automated workflows into everything we build, so your systems work smarter and run themselves.",
  },
  {
    title: "A global player in tech",
    desc: "We partner with clients worldwide, across every time zone, with clear and reliable communication around the clock.",
  },
  {
    title: "Senior engineers who own the outcome",
    desc: "You work directly with experienced developers — no juniors hidden in the bill — invested in your results.",
  },
  {
    title: "Expertise to handle any challenge",
    desc: "From a single integration to a full platform rebuild, we have the depth to solve every kind of technical problem.",
  },
  {
    title: "Transparent, on-time delivery",
    desc: "Fixed scope, clear milestones and weekly demos keep delivery predictable and you always in the loop.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We dig into your goals, data and workflows to define what success looks like and where AI and automation can win." },
  { step: "02", title: "Design", desc: "Architecture, prototypes and a clear automation & integration plan you review before a line of code is written." },
  { step: "03", title: "Build & Automate", desc: "AI-assisted development, system integrations and automated pipelines, shipped in agile sprints with weekly demos." },
  { step: "04", title: "Launch, Report & Optimise", desc: "Smooth deployment plus live dashboards, monitoring and continuous improvement so results keep compounding." },
];

const TECH = [
  "AI / LLMs", "Claude API", "OpenAI", "LangChain", "Python", "TensorFlow",
  "React", "Next.js", "Node.js", "TypeScript", "Laravel", ".NET",
  "Flutter", "React Native", "Magento", "Shopify", "WooCommerce",
  "PostgreSQL", "MongoDB", "BigQuery", "Power BI", "Apache Kafka",
  "AWS", "Docker", "Kubernetes", "n8n / Zapier",
];

// Animated reporting/dashboard showcase data
const REPORTS = [
  "Real-time sales & revenue dashboards",
  "Inventory, stock & supply-chain reports",
  "Customer, cohort & retention analytics",
  "Marketing & campaign ROI tracking",
  "Automated daily / weekly email reports",
  "Big-data pipelines over millions of records",
];

const KPIS = [
  { prefix: "$", count: 284, suffix: "K", label: "Revenue (30d)", trend: "+18%" },
  { prefix: "", count: 8640, suffix: "", label: "Orders", trend: "+12%" },
  { prefix: "", count: 4.8, suffix: "%", decimals: 1, label: "Conversion", trend: "+0.6" },
  { prefix: "+", count: 37, suffix: "%", label: "YoY growth", trend: "▲" },
];

// Monthly revenue trend (relative heights, %)
const CHART = [40, 52, 48, 63, 58, 72, 80, 76, 92, 88, 100, 95];

const EMAIL = "info@aatech.pk";

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
              <span className="ping" aria-hidden="true" /> AI-Powered Software, E-commerce &amp; Automation
            </p>
            <h1 className="hero__title reveal" style={{ transitionDelay: "80ms" }}>
              We build AI-powered software that{" "}
              <span className="grad">moves your business forward</span>
            </h1>
            <p className="hero__sub reveal" style={{ transitionDelay: "160ms" }}>
              AATech is a global software house with 8+ years building
              end-to-end e-commerce and custom platforms — development,
              integration, automation, reporting and big data, supercharged
              with AI. We partner with clients worldwide, with the expertise to
              solve every kind of technical problem.
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

        {/* ---------- Reporting & Analytics showcase ---------- */}
        <section className="section section--alt" id="reporting">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">Data, reporting &amp; big data</p>
              <h2 className="section__title">Reporting that turns data into decisions</h2>
              <p className="section__lead">
                From real-time dashboards to automated reports and big-data
                pipelines — we make your numbers work for you.
              </p>
            </div>
            <div className="report">
              <div className="report__intro reveal">
                <h3 className="report__title">Example reports we build</h3>
                <ul className="report__list">
                  {REPORTS.map((r) => (
                    <li key={r} className="report__item">
                      <span className="report__check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn--primary btn--shine">
                  Get your dashboard
                </a>
              </div>

              {/* Animated mock dashboard */}
              <div className="dash reveal" role="img" aria-label="Example analytics dashboard">
                <div className="dash__bar" aria-hidden="true">
                  <span className="dash__dot" />
                  <span className="dash__dot" />
                  <span className="dash__dot" />
                  <span className="dash__name">AATech Analytics</span>
                  <span className="dash__live">● Live</span>
                </div>
                <div className="dash__kpis">
                  {KPIS.map((k) => (
                    <div key={k.label} className="kpi">
                      <span
                        className="kpi__value"
                        data-count={k.count}
                        data-prefix={k.prefix}
                        data-suffix={k.suffix}
                        data-decimals={k.decimals ?? 0}
                      >
                        {k.prefix}
                        {k.count}
                        {k.suffix}
                      </span>
                      <span className="kpi__label">{k.label}</span>
                      <span className="kpi__trend">{k.trend}</span>
                    </div>
                  ))}
                </div>
                <div className="chart" aria-hidden="true">
                  <div className="chart__head">
                    <span>Revenue — last 12 months</span>
                    <span className="chart__up">▲ growing</span>
                  </div>
                  <div className="chart__bars">
                    {CHART.map((h, i) => (
                      <span
                        key={i}
                        className="chart__bar"
                        style={{ height: `${h}%`, transitionDelay: `${i * 60}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Why AATech ---------- */}
        <section className="section" id="why">
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
        <section className="section section--alt" id="process">
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
        <section className="section" id="tech">
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
                one business day.
              </p>

              <form
                className="cform"
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
              >
                {/* FormSubmit settings */}
                <input type="hidden" name="_subject" value="New enquiry from aatech.pk" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://aatech.pk/#contact" />
                {/* Honeypot — bots fill this, humans never see it */}
                <input
                  type="text"
                  name="_honey"
                  className="cform__honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="cform__row">
                  <input
                    className="cform__input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    aria-label="Your name"
                    required
                  />
                  <input
                    className="cform__input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                  />
                </div>
                <input
                  className="cform__input"
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  aria-label="Company"
                />
                <textarea
                  className="cform__input cform__textarea"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  aria-label="Project details"
                  required
                />
                <button type="submit" className="btn btn--primary btn--shine cform__submit">
                  Send message
                </button>
              </form>

              <p className="cta__contacts">
                Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
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
              A global software house engineering reliable, AI-powered software
              for businesses around the world.
            </p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <div className="footer__contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="#contact">Start a project</a>
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
              "AATech is a global software development company building AI-powered web, mobile, e-commerce and cloud solutions.",
            areaServed: "Worldwide",
            sameAs: [],
          }),
        }}
      />

      <Motion />
    </>
  );
}
