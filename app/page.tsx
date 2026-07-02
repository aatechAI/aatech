"use client";

import { Logo } from "./components/Logo";
import { Motion } from "./components/Motion";
import { useLang, LanguageSwitcher } from "./i18n/LanguageProvider";

// ---- Language-independent structure (icons, numbers, brand names, hrefs) ----
const NAV_HREFS = ["#services", "#reporting", "#why", "#process", "#contact"];

const SERVICE_ICONS = [
  "M12 2a4 4 0 0 1 4 4 4 4 0 0 1 0 8 4 4 0 0 1-8 0 4 4 0 0 1 0-8 4 4 0 0 1 4-4Zm0 6v4m-6 2h12M4 9h2m12 0h2M4 15h2m12 0h2",
  "M3 3h2l1 12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-1.8L21 7H6m3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  "M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-7 7-2 2m0-11 2 2m7 7 2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  "M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6M6 6h.01M18 18h.01M4 3h4v4H4V3Zm12 14h4v4h-4v-4Z",
  "M3 3v18h18M7 14l4-4 3 3 5-6m0 0h-4m4 0v4",
  "M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
  "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 14h18M9 21h6",
  "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18h2",
  "M12 3a8 8 0 0 0-8 8c0 3 2 5 4 6h8c2-1 4-3 4-6a8 8 0 0 0-8-8Zm-4 17h8",
];

const STAT_META = [
  { count: 10, suffix: "+", value: "10+" },
  { count: 120, suffix: "+", value: "120+" },
  { count: 40, suffix: "+", value: "40+" },
  { count: null, suffix: "", value: "24/7" },
];

const STEP_NUMS = ["01", "02", "03", "04"];

const KPI_META = [
  { prefix: "$", count: 284, suffix: "K", decimals: 0, trend: "+18%" },
  { prefix: "", count: 8640, suffix: "", decimals: 0, trend: "+12%" },
  { prefix: "", count: 4.8, suffix: "%", decimals: 1, trend: "+0.6" },
  { prefix: "+", count: 37, suffix: "%", decimals: 0, trend: "▲" },
];

const CHART = [40, 52, 48, 63, 58, 72, 80, 76, 92, 88, 100, 95];

const TECH = [
  "AI / LLMs", "Claude API", "OpenAI", "LangChain", "Python", "TensorFlow",
  "React", "Next.js", "Node.js", "TypeScript", "Laravel", ".NET",
  "Flutter", "React Native", "Magento", "Shopify", "WooCommerce",
  "PostgreSQL", "MongoDB", "BigQuery", "Power BI", "Apache Kafka",
  "AWS", "Docker", "Kubernetes", "n8n / Zapier",
];

const EMAIL = "info@aatech.pk";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {/* ---------- Header ---------- */}
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="brand" aria-label="AATech home">
            <Logo />
          </a>
          <nav className="nav" aria-label="Primary">
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href} className="nav__link">
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="header__actions">
            <LanguageSwitcher />
            <a href="#contact" className="btn btn--sm btn--primary nav__cta">
              {t.getQuote}
            </a>
          </div>
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
              <span className="ping" aria-hidden="true" /> {t.hero.eyebrow}
            </p>
            <h1 className="hero__title reveal" style={{ transitionDelay: "80ms" }}>
              {t.hero.titleBefore}
              <span className="grad">{t.hero.titleGrad}</span>
            </h1>
            <p className="hero__sub reveal" style={{ transitionDelay: "160ms" }}>
              {t.hero.sub}
            </p>
            <div className="hero__actions reveal" style={{ transitionDelay: "240ms" }}>
              <a href="#contact" className="btn btn--primary btn--shine">
                {t.hero.start}
              </a>
              <a href="#services" className="btn btn--ghost">{t.hero.explore}</a>
            </div>
            <div className="hero__stats reveal" style={{ transitionDelay: "320ms" }}>
              {STAT_META.map((s, i) => (
                <div key={i} className="stat">
                  <span
                    className="stat__value"
                    data-count={s.count ?? undefined}
                    data-suffix={s.suffix}
                  >
                    {s.value}
                  </span>
                  <span className="stat__label">{t.stats[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section" id="services">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">{t.servicesHead.eyebrow}</p>
              <h2 className="section__title">{t.servicesHead.title}</h2>
              <p className="section__lead">{t.servicesHead.lead}</p>
            </div>
            <div className="grid grid--3">
              {t.services.map((s, i) => (
                <article
                  key={i}
                  className="card reveal"
                  style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                >
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={SERVICE_ICONS[i]} />
                    </svg>
                  </div>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Reporting ---------- */}
        <section className="section section--alt" id="reporting">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">{t.reporting.eyebrow}</p>
              <h2 className="section__title">{t.reporting.title}</h2>
              <p className="section__lead">{t.reporting.lead}</p>
            </div>
            <div className="report">
              <div className="report__intro reveal">
                <h3 className="report__title">{t.reporting.reportsTitle}</h3>
                <ul className="report__list">
                  {t.reporting.reports.map((r) => (
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
                  {t.reporting.cta}
                </a>
              </div>

              <div className="dash reveal" role="img" aria-label={t.reporting.dashName}>
                <div className="dash__bar" aria-hidden="true">
                  <span className="dash__dot" />
                  <span className="dash__dot" />
                  <span className="dash__dot" />
                  <span className="dash__name">{t.reporting.dashName}</span>
                  <span className="dash__live">{t.reporting.live}</span>
                </div>
                <div className="dash__kpis">
                  {KPI_META.map((k, i) => (
                    <div key={i} className="kpi">
                      <span
                        className="kpi__value"
                        data-count={k.count}
                        data-prefix={k.prefix}
                        data-suffix={k.suffix}
                        data-decimals={k.decimals}
                      >
                        {k.prefix}
                        {k.count}
                        {k.suffix}
                      </span>
                      <span className="kpi__label">{t.reporting.kpis[i]}</span>
                      <span className="kpi__trend">{k.trend}</span>
                    </div>
                  ))}
                </div>
                <div className="chart" aria-hidden="true">
                  <div className="chart__head">
                    <span>{t.reporting.chartHead}</span>
                    <span className="chart__up">{t.reporting.chartUp}</span>
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
              <p className="eyebrow">{t.why.eyebrow}</p>
              <h2 className="section__title">{t.why.title}</h2>
              <p className="section__lead">{t.why.lead}</p>
              <a href="#contact" className="btn btn--primary">{t.why.cta}</a>
            </div>
            <ul className="why__list">
              {t.why.items.map((w, i) => (
                <li
                  key={i}
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
              <p className="eyebrow">{t.process.eyebrow}</p>
              <h2 className="section__title">{t.process.title}</h2>
            </div>
            <div className="grid grid--4">
              {t.process.steps.map((p, i) => (
                <div
                  key={i}
                  className="step reveal"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="step__num">{STEP_NUMS[i]}</span>
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
              <p className="eyebrow">{t.techHead.eyebrow}</p>
              <h2 className="section__title">{t.techHead.title}</h2>
              <p className="section__lead">{t.techHead.lead}</p>
            </div>
          </div>
          <div className="marquee reveal" aria-label={t.techHead.title}>
            <div className="marquee__track">
              {[...TECH, ...TECH].map((tech, i) => (
                <span key={`${tech}-${i}`} className="chip" aria-hidden={i >= TECH.length}>
                  {tech}
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
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="cta__title">{t.contact.title}</h2>
              <p className="cta__sub">{t.contact.sub}</p>

              <form
                className="cform"
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
              >
                <input type="hidden" name="_subject" value="New enquiry from aatech.pk" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://aatech.pk/#contact" />
                <input
                  type="text"
                  name="_honey"
                  className="cform__honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="cform__row">
                  <input className="cform__input" type="text" name="name" placeholder={t.contact.name} aria-label={t.contact.name} required />
                  <input className="cform__input" type="email" name="email" placeholder={t.contact.email} aria-label={t.contact.email} required />
                </div>
                <input className="cform__input" type="text" name="company" placeholder={t.contact.company} aria-label={t.contact.company} />
                <textarea className="cform__input cform__textarea" name="message" rows={4} placeholder={t.contact.message} aria-label={t.contact.message} required />
                <button type="submit" className="btn btn--primary btn--shine cform__submit">
                  {t.contact.submit}
                </button>
              </form>

              <p className="cta__contacts">
                {t.contact.prefer} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
            <p className="footer__tag">{t.footer.tag}</p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href}>{t.nav[i]}</a>
            ))}
          </nav>
          <div className="footer__contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="#contact">{t.footer.start}</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} AATech. {t.footer.rights}</p>
          <p>aatech.pk</p>
        </div>
      </footer>

      {/* ---------- SEO: structured data ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://aatech.pk/#organization",
                name: "AATech",
                alternateName: "AATech.pk",
                url: "https://aatech.pk",
                logo: "https://aatech.pk/logo.png",
                image: "https://aatech.pk/logo.png",
                email: EMAIL,
                slogan: "We build AI-powered software that moves your business forward",
                description:
                  "AATech is a global software house with 10+ years building AI-powered software, e-commerce, business automation, reporting and big-data solutions for clients worldwide.",
                foundingDate: "2014",
                areaServed: "Worldwide",
                knowsAbout: [
                  "Artificial Intelligence",
                  "E-commerce Development",
                  "Shopify",
                  "Magento",
                  "WooCommerce",
                  "Business Process Automation",
                  "Systems Integration",
                  "Big Data Analytics",
                  "Business Intelligence",
                  "Cloud & DevOps",
                  "Mobile App Development",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: EMAIL,
                  availableLanguage: [
                    "English",
                    "Arabic",
                    "German",
                    "Greek",
                    "French",
                    "Spanish",
                  ],
                },
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": "https://aatech.pk/#website",
                url: "https://aatech.pk",
                name: "AATech",
                publisher: { "@id": "https://aatech.pk/#organization" },
                inLanguage: ["en", "ar", "de", "el", "fr", "es"],
              },
            ],
          }),
        }}
      />

      <Motion />
    </>
  );
}
