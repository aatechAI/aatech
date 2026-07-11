// AATech — full-page translations for the language switcher.
// Add a new language by appending an entry to LANGUAGES and `dict`.
// Only human-readable text lives here; icons, hrefs, numbers and brand
// names (React, Shopify, AATech…) stay in page.tsx.

export type LocaleCode = "en" | "ar" | "de" | "el" | "fr" | "es";

export const LANGUAGES: {
  code: LocaleCode;
  label: string; // shown in the switcher, in that language
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "el", label: "Ελληνικά", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
];

export interface Dict {
  nav: string[]; // Services, Reporting, Why, Process, Contact
  getQuote: string;
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleGrad: string;
    sub: string;
    start: string;
    explore: string;
  };
  stats: string[]; // 4 labels
  servicesHead: { eyebrow: string; title: string; lead: string };
  services: { title: string; desc: string }[]; // 9
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    items: { title: string; desc: string }[]; // 6
  };
  process: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  reporting: {
    eyebrow: string;
    title: string;
    lead: string;
    reportsTitle: string;
    reports: string[]; // 6
    dashName: string;
    live: string;
    kpis: string[]; // 4 labels
    chartHead: string;
    chartUp: string;
    cta: string;
  };
  techHead: { eyebrow: string; title: string; lead: string };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    prefer: string;
  };
  footer: { tag: string; start: string; rights: string };
}

export const dict: Record<LocaleCode, Dict> = {
  // ------------------------------------------------------------------ EN
  en: {
    nav: ["Services", "Reporting", "Why AATech", "Process", "Contact"],
    getQuote: "Get a quote",
    hero: {
      eyebrow: "AI-Powered Software, E-commerce & Automation",
      titleBefore: "We build AI-powered software that ",
      titleGrad: "moves your business forward",
      sub: "AATech is a global software house with 10+ years building end-to-end e-commerce and custom platforms — development, integration, automation, reporting and big data, supercharged with AI. We partner with clients worldwide, with the expertise to solve every kind of technical problem.",
      start: "Start your project",
      explore: "Explore services",
    },
    stats: ["Years of experience", "Projects delivered", "Clients worldwide", "Support & automation"],
    servicesHead: {
      eyebrow: "What we do",
      title: "Services built to deliver results",
      lead: "A full-stack team that takes you from concept to a polished, production-ready product.",
    },
    services: [
      { title: "AI-Powered Development", desc: "We build AI into your products — LLM & Claude integrations, smart chatbots, recommendation engines, document automation and predictive features that give you an edge." },
      { title: "E-commerce Solutions", desc: "Experts across every major e-commerce platform — Shopify, Magento, WooCommerce, BigCommerce and custom builds — with 10+ years scaling stores end to end, from catalog and checkout to fulfilment." },
      { title: "Business Automation", desc: "Replace repetitive manual work with automated workflows, bots and pipelines that connect your tools and run 24/7 — fewer errors, lower cost, more speed." },
      { title: "Systems Integration", desc: "Connect ERPs, CRMs, POS, payment gateways, marketplaces and APIs into one seamless, reliable flow of data across your whole business." },
      { title: "Data, Reporting & BI", desc: "Real-time dashboards, automated reports and live KPIs that turn raw numbers into decisions you can act on — delivered to inbox, screen or mobile." },
      { title: "Big Data & Analytics", desc: "Pipelines that ingest, clean and analyse millions of records to surface trends, forecasts and opportunities hiding in your data." },
      { title: "Custom Software & Web", desc: "Tailored web platforms and SaaS products built with React, Next.js and clean, maintainable architecture — designed to scale from day one." },
      { title: "Mobile Apps", desc: "Native and cross-platform iOS & Android apps with smooth UX, offline support and store-ready delivery." },
      { title: "Cloud & DevOps", desc: "Scalable infrastructure on AWS, Azure and GCP with CI/CD pipelines, containers and 24/7 monitoring that keeps everything running." },
      { title: "SEO & Digital Marketing", desc: "Climb the rankings and grow demand with technical SEO, content, Google & Meta Ads and analytics-driven campaigns that turn visitors into paying customers." },
      { title: "Email Marketing & Automation", desc: "Newsletters, drip campaigns and transactional email with Klaviyo, Mailchimp and SendGrid — automated, personalised and built to land in the inbox." },
      { title: "UI/UX & Product Design", desc: "Research-driven interfaces, wireframes and design systems that turn complex ideas into clear, delightful, high-converting experiences." },
      { title: "Branding & Creative", desc: "Logos, visual identity and marketing creative that make your brand instantly recognisable across every channel." },
      { title: "Conversion Rate Optimisation", desc: "A/B testing, funnel analysis and landing-page optimisation that squeeze more revenue from the traffic you already have." },
      { title: "Maintenance, Security & Support", desc: "Proactive monitoring, security hardening, updates and 24/7 support that keep your software fast, safe and always online." },
    ],
    why: {
      eyebrow: "Why AATech",
      title: "A partner that's as invested in the outcome as you are",
      lead: "We don't just write code — we sweat the details that make a product reliable, scalable and a pleasure to use.",
      cta: "Let's talk",
      items: [
        { title: "10+ years of e-commerce expertise", desc: "Experts in every major platform — Shopify, Magento, WooCommerce, BigCommerce — with end-to-end retail: development, integration, automation, reporting and big data." },
        { title: "AI & automation at the core", desc: "We bake AI and automated workflows into everything we build, so your systems work smarter and run themselves." },
        { title: "A global player in tech", desc: "We partner with clients worldwide, across every time zone, with clear and reliable communication around the clock." },
        { title: "Senior engineers who own the outcome", desc: "You work directly with experienced developers — no juniors hidden in the bill — invested in your results." },
        { title: "Expertise to handle any challenge", desc: "From a single integration to a full platform rebuild, we have the depth to solve every kind of technical problem." },
        { title: "Transparent, on-time delivery", desc: "Fixed scope, clear milestones and weekly demos keep delivery predictable and you always in the loop." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path from idea to launch",
      steps: [
        { title: "Discover", desc: "We dig into your goals, data and workflows to define what success looks like and where AI and automation can win." },
        { title: "Design", desc: "Architecture, prototypes and a clear automation & integration plan you review before a line of code is written." },
        { title: "Build & Automate", desc: "AI-assisted development, system integrations and automated pipelines, shipped in agile sprints with weekly demos." },
        { title: "Launch, Report & Optimise", desc: "Smooth deployment plus live dashboards, monitoring and continuous improvement so results keep compounding." },
      ],
    },
    reporting: {
      eyebrow: "Data, reporting & big data",
      title: "Reporting that turns data into decisions",
      lead: "From real-time dashboards to automated reports and big-data pipelines — we make your numbers work for you.",
      reportsTitle: "Example reports we build",
      reports: [
        "Real-time sales & revenue dashboards",
        "Inventory, stock & supply-chain reports",
        "Customer, cohort & retention analytics",
        "Marketing & campaign ROI tracking",
        "Automated daily / weekly email reports",
        "Big-data pipelines over millions of records",
      ],
      dashName: "AATech Analytics",
      live: "● Live",
      kpis: ["Revenue (30d)", "Orders", "Conversion", "YoY growth"],
      chartHead: "Revenue — last 12 months",
      chartUp: "▲ growing",
      cta: "Get your dashboard",
    },
    techHead: {
      eyebrow: "Our toolbox",
      title: "Technologies we master",
      lead: "We pick the right tool for the job — proven, modern and built to last.",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Have a project in mind? Let's build it.",
      sub: "Tell us what you're working on and we'll get back to you within one business day.",
      name: "Your name",
      email: "Email address",
      company: "Company (optional)",
      message: "Tell us about your project",
      submit: "Send message",
      prefer: "Prefer email?",
    },
    footer: {
      tag: "A global software house engineering reliable, AI-powered software for businesses around the world.",
      start: "Start a project",
      rights: "All rights reserved.",
    },
  },

  // ------------------------------------------------------------------ AR
  ar: {
    nav: ["الخدمات", "التقارير", "لماذا AATech", "منهجيتنا", "تواصل معنا"],
    getQuote: "اطلب عرض سعر",
    hero: {
      eyebrow: "برمجيات مدعومة بالذكاء الاصطناعي، تجارة إلكترونية وأتمتة",
      titleBefore: "نبني برمجيات مدعومة بالذكاء الاصطناعي ",
      titleGrad: "تدفع أعمالك إلى الأمام",
      sub: "AATech شركة برمجيات عالمية بخبرة تتجاوز 10 سنوات في بناء حلول التجارة الإلكترونية والمنصات المخصصة من البداية إلى النهاية — تطوير وتكامل وأتمتة وتقارير وبيانات ضخمة، معززة بالذكاء الاصطناعي. نتعاون مع عملاء حول العالم، ولدينا الخبرة لحل كل أنواع التحديات التقنية.",
      start: "ابدأ مشروعك",
      explore: "استكشف الخدمات",
    },
    stats: ["سنوات من الخبرة", "مشروع منجز", "عملاء حول العالم", "دعم وأتمتة"],
    servicesHead: {
      eyebrow: "ماذا نقدّم",
      title: "خدمات مصمّمة لتحقيق النتائج",
      lead: "فريق متكامل يأخذك من الفكرة إلى منتج جاهز للإطلاق بأعلى جودة.",
    },
    services: [
      { title: "تطوير مدعوم بالذكاء الاصطناعي", desc: "ندمج الذكاء الاصطناعي في منتجاتك — تكاملات مع نماذج اللغة وClaude، روبوتات محادثة ذكية، محركات توصية، أتمتة المستندات وميزات تنبؤية تمنحك ميزة تنافسية." },
      { title: "حلول التجارة الإلكترونية", desc: "خبراء في كل منصات التجارة الإلكترونية الكبرى — Shopify وMagento وWooCommerce وBigCommerce والحلول المخصصة — بخبرة تتجاوز 10 سنوات في توسيع المتاجر من الكتالوج والدفع حتى التوصيل." },
      { title: "أتمتة الأعمال", desc: "استبدل العمل اليدوي المتكرر بسير عمل وروبوتات وأنابيب مؤتمتة تربط أدواتك وتعمل على مدار الساعة — أخطاء أقل وتكلفة أقل وسرعة أكبر." },
      { title: "تكامل الأنظمة", desc: "ربط أنظمة تخطيط الموارد وإدارة العملاء ونقاط البيع وبوابات الدفع والأسواق وواجهات البرمجة في تدفق بيانات موحّد وموثوق عبر أعمالك بالكامل." },
      { title: "البيانات والتقارير وذكاء الأعمال", desc: "لوحات معلومات فورية وتقارير مؤتمتة ومؤشرات أداء حيّة تحوّل الأرقام الخام إلى قرارات قابلة للتنفيذ — على البريد أو الشاشة أو الجوال." },
      { title: "البيانات الضخمة والتحليلات", desc: "أنابيب بيانات تستوعب وتنظّف وتحلّل ملايين السجلات لكشف الاتجاهات والتوقعات والفرص المخبأة في بياناتك." },
      { title: "برمجيات وويب مخصّصة", desc: "منصات ويب ومنتجات SaaS مصمّمة خصيصاً باستخدام React وNext.js وبنية نظيفة قابلة للصيانة — مصمّمة للتوسّع من اليوم الأول." },
      { title: "تطبيقات الجوال", desc: "تطبيقات iOS وAndroid أصلية ومتعددة المنصات بتجربة استخدام سلسة ودعم دون اتصال وجاهزية للنشر على المتاجر." },
      { title: "السحابة وDevOps", desc: "بنية تحتية قابلة للتوسّع على AWS وAzure وGCP مع أنابيب CI/CD وحاويات ومراقبة على مدار الساعة تُبقي كل شيء يعمل." },
      { title: "تحسين محركات البحث والتسويق الرقمي", desc: "تصدّر نتائج البحث وزد الطلب عبر تحسين تقني لمحركات البحث ومحتوى وإعلانات Google وMeta وحملات مبنية على التحليلات تحوّل الزوار إلى عملاء." },
      { title: "التسويق عبر البريد الإلكتروني والأتمتة", desc: "نشرات بريدية وحملات تلقائية ورسائل معاملات باستخدام Klaviyo وMailchimp وSendGrid — مؤتمتة ومخصّصة ومصمّمة لتصل إلى صندوق الوارد." },
      { title: "تصميم واجهات وتجربة المستخدم", desc: "واجهات مبنية على البحث ونماذج أولية وأنظمة تصميم تحوّل الأفكار المعقّدة إلى تجارب واضحة وممتعة وعالية التحويل." },
      { title: "الهوية البصرية والتصميم الإبداعي", desc: "شعارات وهوية بصرية ومواد تسويقية إبداعية تجعل علامتك التجارية مميّزة على الفور عبر كل القنوات." },
      { title: "تحسين معدل التحويل", desc: "اختبارات A/B وتحليل مسارات التحويل وتحسين صفحات الهبوط لتحقيق إيرادات أكبر من زياراتك الحالية." },
      { title: "الصيانة والأمان والدعم", desc: "مراقبة استباقية وتعزيز الأمان وتحديثات ودعم على مدار الساعة تُبقي برمجياتك سريعة وآمنة ومتاحة دائماً." },
    ],
    why: {
      eyebrow: "لماذا AATech",
      title: "شريك يهتم بالنتيجة بقدر اهتمامك بها",
      lead: "نحن لا نكتب الكود فحسب — بل نهتم بالتفاصيل التي تجعل المنتج موثوقاً وقابلاً للتوسّع وممتعاً في الاستخدام.",
      cta: "لنتحدّث",
      items: [
        { title: "أكثر من 10 سنوات خبرة في التجارة الإلكترونية", desc: "خبراء في كل منصة كبرى — Shopify وMagento وWooCommerce وBigCommerce — مع تجارة متكاملة: تطوير وتكامل وأتمتة وتقارير وبيانات ضخمة." },
        { title: "الذكاء الاصطناعي والأتمتة في الصميم", desc: "نضمّن الذكاء الاصطناعي وسير العمل المؤتمت في كل ما نبنيه، لتعمل أنظمتك بذكاء أكبر وتدير نفسها بنفسها." },
        { title: "لاعب عالمي في التقنية", desc: "نتعاون مع عملاء حول العالم عبر كل المناطق الزمنية بتواصل واضح وموثوق على مدار الساعة." },
        { title: "مهندسون كبار يتحمّلون مسؤولية النتيجة", desc: "تعمل مباشرة مع مطوّرين ذوي خبرة — دون مبتدئين مخفيين في الفاتورة — ملتزمون بنتائجك." },
        { title: "خبرة لمواجهة أي تحدٍّ", desc: "من تكامل واحد إلى إعادة بناء منصة كاملة، لدينا العمق الكافي لحل كل أنواع المشكلات التقنية." },
        { title: "تسليم شفّاف وفي الموعد", desc: "نطاق ثابت ومراحل واضحة وعروض أسبوعية تجعل التسليم متوقّعاً وتبقيك على اطّلاع دائم." },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "مسار واضح من الفكرة إلى الإطلاق",
      steps: [
        { title: "الاكتشاف", desc: "نتعمّق في أهدافك وبياناتك وسير عملك لتحديد معنى النجاح وأين يمكن للذكاء الاصطناعي والأتمتة أن يتفوّقا." },
        { title: "التصميم", desc: "بنية ونماذج أولية وخطة واضحة للأتمتة والتكامل تراجعها قبل كتابة سطر واحد من الكود." },
        { title: "البناء والأتمتة", desc: "تطوير بمساعدة الذكاء الاصطناعي وتكاملات للأنظمة وأنابيب مؤتمتة، تُسلَّم في دورات مرنة مع عروض أسبوعية." },
        { title: "الإطلاق والتقارير والتحسين", desc: "نشر سلس مع لوحات معلومات حيّة ومراقبة وتحسين مستمر لتستمر النتائج في التصاعد." },
      ],
    },
    reporting: {
      eyebrow: "البيانات والتقارير والبيانات الضخمة",
      title: "تقارير تحوّل البيانات إلى قرارات",
      lead: "من لوحات المعلومات الفورية إلى التقارير المؤتمتة وأنابيب البيانات الضخمة — نجعل أرقامك تعمل لصالحك.",
      reportsTitle: "أمثلة على التقارير التي نبنيها",
      reports: [
        "لوحات معلومات فورية للمبيعات والإيرادات",
        "تقارير المخزون وسلسلة التوريد",
        "تحليلات العملاء والاحتفاظ والمجموعات",
        "تتبّع عائد استثمار التسويق والحملات",
        "تقارير بريدية مؤتمتة يومية / أسبوعية",
        "أنابيب بيانات ضخمة عبر ملايين السجلات",
      ],
      dashName: "AATech Analytics",
      live: "● مباشر",
      kpis: ["الإيرادات (30 يوماً)", "الطلبات", "معدل التحويل", "النمو السنوي"],
      chartHead: "الإيرادات — آخر 12 شهراً",
      chartUp: "▲ في نمو",
      cta: "احصل على لوحة معلوماتك",
    },
    techHead: {
      eyebrow: "أدواتنا",
      title: "التقنيات التي نتقنها",
      lead: "نختار الأداة المناسبة لكل مهمة — مثبتة وحديثة ومصمّمة لتدوم.",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "لديك مشروع في ذهنك؟ لنبنِه معاً.",
      sub: "أخبرنا بما تعمل عليه وسنعاود التواصل معك خلال يوم عمل واحد.",
      name: "اسمك",
      email: "البريد الإلكتروني",
      company: "الشركة (اختياري)",
      message: "أخبرنا عن مشروعك",
      submit: "إرسال الرسالة",
      prefer: "تفضّل البريد الإلكتروني؟",
    },
    footer: {
      tag: "شركة برمجيات عالمية تهندس برمجيات موثوقة مدعومة بالذكاء الاصطناعي لأعمال حول العالم.",
      start: "ابدأ مشروعاً",
      rights: "جميع الحقوق محفوظة.",
    },
  },

  // ------------------------------------------------------------------ DE
  de: {
    nav: ["Leistungen", "Reporting", "Warum AATech", "Ablauf", "Kontakt"],
    getQuote: "Angebot anfordern",
    hero: {
      eyebrow: "KI-gestützte Software, E-Commerce & Automatisierung",
      titleBefore: "Wir entwickeln KI-gestützte Software, die ",
      titleGrad: "Ihr Unternehmen voranbringt",
      sub: "AATech ist ein globales Softwarehaus mit über 10 Jahren Erfahrung im Aufbau durchgängiger E-Commerce- und individueller Plattformen — Entwicklung, Integration, Automatisierung, Reporting und Big Data, verstärkt durch KI. Wir arbeiten mit Kunden weltweit und haben die Expertise, jede technische Herausforderung zu lösen.",
      start: "Projekt starten",
      explore: "Leistungen entdecken",
    },
    stats: ["Jahre Erfahrung", "Umgesetzte Projekte", "Kunden weltweit", "Support & Automatisierung"],
    servicesHead: {
      eyebrow: "Was wir tun",
      title: "Leistungen, die Ergebnisse liefern",
      lead: "Ein Full-Stack-Team, das Sie von der Idee bis zum ausgereiften, produktionsreifen Produkt begleitet.",
    },
    services: [
      { title: "KI-gestützte Entwicklung", desc: "Wir integrieren KI in Ihre Produkte — LLM- & Claude-Integrationen, intelligente Chatbots, Empfehlungssysteme, Dokumentenautomatisierung und prädiktive Funktionen, die Ihnen einen Vorsprung verschaffen." },
      { title: "E-Commerce-Lösungen", desc: "Experten für jede große E-Commerce-Plattform — Shopify, Magento, WooCommerce, BigCommerce und individuelle Lösungen — mit über 10 Jahren Erfahrung im Skalieren von Shops vom Katalog bis zur Auslieferung." },
      { title: "Geschäftsautomatisierung", desc: "Ersetzen Sie wiederkehrende manuelle Arbeit durch automatisierte Workflows, Bots und Pipelines, die Ihre Tools verbinden und rund um die Uhr laufen — weniger Fehler, geringere Kosten, mehr Tempo." },
      { title: "Systemintegration", desc: "Verbinden Sie ERP, CRM, POS, Zahlungsanbieter, Marktplätze und APIs zu einem nahtlosen, zuverlässigen Datenfluss über Ihr gesamtes Unternehmen." },
      { title: "Daten, Reporting & BI", desc: "Echtzeit-Dashboards, automatisierte Berichte und Live-KPIs, die Rohdaten in umsetzbare Entscheidungen verwandeln — per E-Mail, Bildschirm oder Mobilgerät." },
      { title: "Big Data & Analytik", desc: "Pipelines, die Millionen von Datensätzen erfassen, bereinigen und analysieren, um Trends, Prognosen und verborgene Chancen sichtbar zu machen." },
      { title: "Individuelle Software & Web", desc: "Maßgeschneiderte Web-Plattformen und SaaS-Produkte mit React, Next.js und sauberer, wartbarer Architektur — von Anfang an auf Skalierung ausgelegt." },
      { title: "Mobile Apps", desc: "Native und plattformübergreifende iOS- & Android-Apps mit reibungsloser UX, Offline-Support und store-fertiger Auslieferung." },
      { title: "Cloud & DevOps", desc: "Skalierbare Infrastruktur auf AWS, Azure und GCP mit CI/CD-Pipelines, Containern und 24/7-Monitoring, das alles am Laufen hält." },
      { title: "SEO & Digitales Marketing", desc: "Bessere Rankings und mehr Nachfrage durch technisches SEO, Content, Google- & Meta-Ads und datengetriebene Kampagnen, die Besucher zu Kunden machen." },
      { title: "E-Mail-Marketing & Automatisierung", desc: "Newsletter, Drip-Kampagnen und Transaktions-E-Mails mit Klaviyo, Mailchimp und SendGrid — automatisiert, personalisiert und zustellsicher." },
      { title: "UI/UX & Produktdesign", desc: "Forschungsbasierte Interfaces, Wireframes und Designsysteme, die komplexe Ideen in klare, ansprechende und conversion-starke Erlebnisse verwandeln." },
      { title: "Branding & Kreativ", desc: "Logos, visuelle Identität und Marketing-Creatives, die Ihre Marke auf allen Kanälen sofort wiedererkennbar machen." },
      { title: "Conversion-Optimierung", desc: "A/B-Tests, Funnel-Analysen und Landingpage-Optimierung, die mehr Umsatz aus Ihrem bestehenden Traffic holen." },
      { title: "Wartung, Sicherheit & Support", desc: "Proaktives Monitoring, Security-Hardening, Updates und 24/7-Support, die Ihre Software schnell, sicher und stets online halten." },
    ],
    why: {
      eyebrow: "Warum AATech",
      title: "Ein Partner, dem das Ergebnis genauso wichtig ist wie Ihnen",
      lead: "Wir schreiben nicht nur Code — wir kümmern uns um die Details, die ein Produkt zuverlässig, skalierbar und angenehm nutzbar machen.",
      cta: "Sprechen wir",
      items: [
        { title: "Über 10 Jahre E-Commerce-Expertise", desc: "Experten für jede große Plattform — Shopify, Magento, WooCommerce, BigCommerce — mit durchgängigem Handel: Entwicklung, Integration, Automatisierung, Reporting und Big Data." },
        { title: "KI & Automatisierung im Kern", desc: "Wir verankern KI und automatisierte Workflows in allem, was wir bauen, damit Ihre Systeme intelligenter arbeiten und sich selbst steuern." },
        { title: "Ein globaler Tech-Player", desc: "Wir arbeiten mit Kunden weltweit über alle Zeitzonen hinweg — mit klarer, zuverlässiger Kommunikation rund um die Uhr." },
        { title: "Erfahrene Entwickler mit Verantwortung", desc: "Sie arbeiten direkt mit erfahrenen Entwicklern — keine versteckten Junioren auf der Rechnung — die sich Ihren Ergebnissen verpflichtet fühlen." },
        { title: "Expertise für jede Herausforderung", desc: "Von einer einzelnen Integration bis zum kompletten Plattform-Neuaufbau — wir haben die Tiefe, jedes technische Problem zu lösen." },
        { title: "Transparente, pünktliche Lieferung", desc: "Fester Umfang, klare Meilensteine und wöchentliche Demos machen die Lieferung planbar und halten Sie stets auf dem Laufenden." },
      ],
    },
    process: {
      eyebrow: "Wie wir arbeiten",
      title: "Ein klarer Weg von der Idee zum Launch",
      steps: [
        { title: "Entdecken", desc: "Wir vertiefen uns in Ihre Ziele, Daten und Abläufe, um Erfolg zu definieren und zu erkennen, wo KI und Automatisierung punkten." },
        { title: "Konzeption", desc: "Architektur, Prototypen und ein klarer Automatisierungs- & Integrationsplan, den Sie prüfen, bevor eine Zeile Code entsteht." },
        { title: "Bauen & Automatisieren", desc: "KI-gestützte Entwicklung, Systemintegrationen und automatisierte Pipelines, geliefert in agilen Sprints mit wöchentlichen Demos." },
        { title: "Launch, Reporting & Optimierung", desc: "Reibungsloses Deployment plus Live-Dashboards, Monitoring und kontinuierliche Verbesserung, damit die Ergebnisse weiter wachsen." },
      ],
    },
    reporting: {
      eyebrow: "Daten, Reporting & Big Data",
      title: "Reporting, das aus Daten Entscheidungen macht",
      lead: "Von Echtzeit-Dashboards über automatisierte Berichte bis zu Big-Data-Pipelines — wir lassen Ihre Zahlen für Sie arbeiten.",
      reportsTitle: "Beispiele für Berichte, die wir erstellen",
      reports: [
        "Echtzeit-Dashboards für Umsatz & Erlöse",
        "Berichte zu Bestand & Lieferkette",
        "Kunden-, Kohorten- & Retentionsanalysen",
        "Marketing- & Kampagnen-ROI-Tracking",
        "Automatisierte tägliche / wöchentliche E-Mail-Berichte",
        "Big-Data-Pipelines über Millionen von Datensätzen",
      ],
      dashName: "AATech Analytics",
      live: "● Live",
      kpis: ["Umsatz (30 T.)", "Bestellungen", "Konversion", "Wachstum J/J"],
      chartHead: "Umsatz — letzte 12 Monate",
      chartUp: "▲ wachsend",
      cta: "Ihr Dashboard erhalten",
    },
    techHead: {
      eyebrow: "Unser Werkzeugkasten",
      title: "Technologien, die wir beherrschen",
      lead: "Wir wählen das richtige Werkzeug für die Aufgabe — bewährt, modern und langlebig.",
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Ein Projekt im Kopf? Lassen Sie es uns bauen.",
      sub: "Sagen Sie uns, woran Sie arbeiten, und wir melden uns innerhalb eines Werktags.",
      name: "Ihr Name",
      email: "E-Mail-Adresse",
      company: "Unternehmen (optional)",
      message: "Erzählen Sie uns von Ihrem Projekt",
      submit: "Nachricht senden",
      prefer: "Lieber per E-Mail?",
    },
    footer: {
      tag: "Ein globales Softwarehaus, das zuverlässige, KI-gestützte Software für Unternehmen weltweit entwickelt.",
      start: "Projekt starten",
      rights: "Alle Rechte vorbehalten.",
    },
  },

  // ------------------------------------------------------------------ EL
  el: {
    nav: ["Υπηρεσίες", "Αναφορές", "Γιατί AATech", "Διαδικασία", "Επικοινωνία"],
    getQuote: "Ζητήστε προσφορά",
    hero: {
      eyebrow: "Λογισμικό με AI, E-commerce & Αυτοματισμός",
      titleBefore: "Δημιουργούμε λογισμικό με τεχνητή νοημοσύνη που ",
      titleGrad: "προωθεί την επιχείρησή σας",
      sub: "Η AATech είναι μια παγκόσμια εταιρεία λογισμικού με πάνω από 10 χρόνια εμπειρίας στη δημιουργία ολοκληρωμένων λύσεων e-commerce και προσαρμοσμένων πλατφορμών — ανάπτυξη, ενσωμάτωση, αυτοματισμός, αναφορές και big data, ενισχυμένα με AI. Συνεργαζόμαστε με πελάτες παγκοσμίως και έχουμε την τεχνογνωσία να λύσουμε κάθε τεχνική πρόκληση.",
      start: "Ξεκινήστε το έργο σας",
      explore: "Εξερευνήστε τις υπηρεσίες",
    },
    stats: ["Χρόνια εμπειρίας", "Ολοκληρωμένα έργα", "Πελάτες παγκοσμίως", "Υποστήριξη & αυτοματισμός"],
    servicesHead: {
      eyebrow: "Τι κάνουμε",
      title: "Υπηρεσίες που φέρνουν αποτελέσματα",
      lead: "Μια full-stack ομάδα που σας οδηγεί από την ιδέα σε ένα άρτιο, έτοιμο για παραγωγή προϊόν.",
    },
    services: [
      { title: "Ανάπτυξη με AI", desc: "Ενσωματώνουμε AI στα προϊόντα σας — ενσωματώσεις LLM & Claude, έξυπνα chatbots, μηχανές προτάσεων, αυτοματισμό εγγράφων και προβλεπτικές λειτουργίες που σας δίνουν προβάδισμα." },
      { title: "Λύσεις E-commerce", desc: "Ειδικοί σε κάθε μεγάλη πλατφόρμα e-commerce — Shopify, Magento, WooCommerce, BigCommerce και προσαρμοσμένες λύσεις — με πάνω από 10 χρόνια εμπειρίας στην κλιμάκωση καταστημάτων, από τον κατάλογο έως την παράδοση." },
      { title: "Αυτοματισμός Επιχειρήσεων", desc: "Αντικαταστήστε την επαναλαμβανόμενη χειρωνακτική εργασία με αυτοματοποιημένες ροές, bots και pipelines που συνδέουν τα εργαλεία σας και λειτουργούν 24/7 — λιγότερα λάθη, χαμηλότερο κόστος, μεγαλύτερη ταχύτητα." },
      { title: "Ενσωμάτωση Συστημάτων", desc: "Συνδέστε ERP, CRM, POS, πύλες πληρωμών, marketplaces και APIs σε μια ενιαία, αξιόπιστη ροή δεδομένων σε όλη την επιχείρησή σας." },
      { title: "Δεδομένα, Αναφορές & BI", desc: "Dashboards σε πραγματικό χρόνο, αυτοματοποιημένες αναφορές και ζωντανά KPIs που μετατρέπουν τα ακατέργαστα δεδομένα σε αποφάσεις — στο email, την οθόνη ή το κινητό." },
      { title: "Big Data & Analytics", desc: "Pipelines που εισάγουν, καθαρίζουν και αναλύουν εκατομμύρια εγγραφές για να αναδείξουν τάσεις, προβλέψεις και ευκαιρίες κρυμμένες στα δεδομένα σας." },
      { title: "Προσαρμοσμένο Λογισμικό & Web", desc: "Εξατομικευμένες web πλατφόρμες και προϊόντα SaaS με React, Next.js και καθαρή, συντηρήσιμη αρχιτεκτονική — σχεδιασμένα για κλιμάκωση από την πρώτη μέρα." },
      { title: "Εφαρμογές Mobile", desc: "Native και cross-platform εφαρμογές iOS & Android με ομαλή εμπειρία χρήστη, υποστήριξη offline και έτοιμη παράδοση στα stores." },
      { title: "Cloud & DevOps", desc: "Κλιμακούμενη υποδομή σε AWS, Azure και GCP με CI/CD pipelines, containers και παρακολούθηση 24/7 που κρατά τα πάντα σε λειτουργία." },
      { title: "SEO & Ψηφιακό Marketing", desc: "Ανεβείτε στις κατατάξεις και αυξήστε τη ζήτηση με τεχνικό SEO, περιεχόμενο, Google & Meta Ads και καμπάνιες βασισμένες σε analytics που μετατρέπουν επισκέπτες σε πελάτες." },
      { title: "Email Marketing & Αυτοματισμός", desc: "Newsletters, drip καμπάνιες και transactional email με Klaviyo, Mailchimp και SendGrid — αυτοματοποιημένα, εξατομικευμένα και σχεδιασμένα να φτάνουν στα εισερχόμενα." },
      { title: "Σχεδιασμός UI/UX & Προϊόντος", desc: "Διεπαφές βασισμένες σε έρευνα, wireframes και design systems που μετατρέπουν σύνθετες ιδέες σε καθαρές, ευχάριστες εμπειρίες υψηλής μετατροπής." },
      { title: "Branding & Δημιουργικό", desc: "Λογότυπα, οπτική ταυτότητα και δημιουργικό marketing που κάνουν το brand σας άμεσα αναγνωρίσιμο σε κάθε κανάλι." },
      { title: "Βελτιστοποίηση Μετατροπών", desc: "A/B testing, ανάλυση funnel και βελτιστοποίηση landing pages που αποφέρουν περισσότερα έσοδα από την υπάρχουσα επισκεψιμότητα." },
      { title: "Συντήρηση, Ασφάλεια & Υποστήριξη", desc: "Προληπτική παρακολούθηση, ενίσχυση ασφάλειας, ενημερώσεις και υποστήριξη 24/7 που κρατούν το λογισμικό σας γρήγορο, ασφαλές και πάντα online." },
    ],
    why: {
      eyebrow: "Γιατί AATech",
      title: "Ένας συνεργάτης που νοιάζεται για το αποτέλεσμα όσο κι εσείς",
      lead: "Δεν γράφουμε απλώς κώδικα — φροντίζουμε τις λεπτομέρειες που κάνουν ένα προϊόν αξιόπιστο, κλιμακούμενο και ευχάριστο στη χρήση.",
      cta: "Ας μιλήσουμε",
      items: [
        { title: "Πάνω από 10 χρόνια εμπειρίας στο e-commerce", desc: "Ειδικοί σε κάθε μεγάλη πλατφόρμα — Shopify, Magento, WooCommerce, BigCommerce — με ολοκληρωμένο λιανεμπόριο: ανάπτυξη, ενσωμάτωση, αυτοματισμό, αναφορές και big data." },
        { title: "AI & αυτοματισμός στον πυρήνα", desc: "Ενσωματώνουμε AI και αυτοματοποιημένες ροές σε ό,τι φτιάχνουμε, ώστε τα συστήματά σας να λειτουργούν εξυπνότερα και μόνα τους." },
        { title: "Παγκόσμιος παίκτης στην τεχνολογία", desc: "Συνεργαζόμαστε με πελάτες παγκοσμίως, σε κάθε ζώνη ώρας, με σαφή και αξιόπιστη επικοινωνία όλο το 24ωρο." },
        { title: "Έμπειροι μηχανικοί με ευθύνη για το αποτέλεσμα", desc: "Συνεργάζεστε απευθείας με έμπειρους προγραμματιστές — χωρίς κρυμμένους junior στον λογαριασμό — αφοσιωμένους στα αποτελέσματά σας." },
        { title: "Τεχνογνωσία για κάθε πρόκληση", desc: "Από μία ενσωμάτωση έως την πλήρη ανακατασκευή πλατφόρμας, έχουμε το βάθος να λύσουμε κάθε τεχνικό πρόβλημα." },
        { title: "Διαφανής, έγκαιρη παράδοση", desc: "Σταθερό αντικείμενο, σαφή ορόσημα και εβδομαδιαία demos κάνουν την παράδοση προβλέψιμη και σας κρατούν πάντα ενήμερους." },
      ],
    },
    process: {
      eyebrow: "Πώς δουλεύουμε",
      title: "Μια ξεκάθαρη πορεία από την ιδέα στην κυκλοφορία",
      steps: [
        { title: "Ανακάλυψη", desc: "Εμβαθύνουμε στους στόχους, τα δεδομένα και τις ροές σας για να ορίσουμε την επιτυχία και πού μπορούν να κερδίσουν AI και αυτοματισμός." },
        { title: "Σχεδιασμός", desc: "Αρχιτεκτονική, prototypes και ένα σαφές σχέδιο αυτοματισμού & ενσωμάτωσης που εξετάζετε πριν γραφτεί μία γραμμή κώδικα." },
        { title: "Κατασκευή & Αυτοματισμός", desc: "Ανάπτυξη με τη βοήθεια AI, ενσωματώσεις συστημάτων και αυτοματοποιημένα pipelines, σε agile sprints με εβδομαδιαία demos." },
        { title: "Κυκλοφορία, Αναφορές & Βελτιστοποίηση", desc: "Ομαλή ανάπτυξη μαζί με ζωντανά dashboards, παρακολούθηση και συνεχή βελτίωση ώστε τα αποτελέσματα να αυξάνονται διαρκώς." },
      ],
    },
    reporting: {
      eyebrow: "Δεδομένα, αναφορές & big data",
      title: "Αναφορές που μετατρέπουν τα δεδομένα σε αποφάσεις",
      lead: "Από dashboards πραγματικού χρόνου έως αυτοματοποιημένες αναφορές και big-data pipelines — κάνουμε τα νούμερά σας να δουλεύουν για εσάς.",
      reportsTitle: "Παραδείγματα αναφορών που φτιάχνουμε",
      reports: [
        "Dashboards πωλήσεων & εσόδων σε πραγματικό χρόνο",
        "Αναφορές αποθέματος & εφοδιαστικής αλυσίδας",
        "Analytics πελατών, cohort & διατήρησης",
        "Παρακολούθηση ROI marketing & καμπανιών",
        "Αυτοματοποιημένες ημερήσιες / εβδομαδιαίες αναφορές email",
        "Big-data pipelines σε εκατομμύρια εγγραφές",
      ],
      dashName: "AATech Analytics",
      live: "● Ζωντανά",
      kpis: ["Έσοδα (30 ημ.)", "Παραγγελίες", "Μετατροπή", "Ανάπτυξη ετ."],
      chartHead: "Έσοδα — τελευταίοι 12 μήνες",
      chartUp: "▲ αυξάνεται",
      cta: "Αποκτήστε το dashboard σας",
    },
    techHead: {
      eyebrow: "Τα εργαλεία μας",
      title: "Τεχνολογίες που κατέχουμε",
      lead: "Επιλέγουμε το σωστό εργαλείο για κάθε δουλειά — δοκιμασμένο, σύγχρονο και ανθεκτικό.",
    },
    contact: {
      eyebrow: "Επικοινωνήστε",
      title: "Έχετε ένα έργο στο μυαλό σας; Ας το φτιάξουμε.",
      sub: "Πείτε μας τι ετοιμάζετε και θα σας απαντήσουμε εντός μίας εργάσιμης ημέρας.",
      name: "Το όνομά σας",
      email: "Διεύθυνση email",
      company: "Εταιρεία (προαιρετικό)",
      message: "Πείτε μας για το έργο σας",
      submit: "Αποστολή μηνύματος",
      prefer: "Προτιμάτε email;",
    },
    footer: {
      tag: "Μια παγκόσμια εταιρεία λογισμικού που δημιουργεί αξιόπιστο, AI λογισμικό για επιχειρήσεις σε όλο τον κόσμο.",
      start: "Ξεκινήστε ένα έργο",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
    },
  },

  // ------------------------------------------------------------------ FR
  fr: {
    nav: ["Services", "Reporting", "Pourquoi AATech", "Processus", "Contact"],
    getQuote: "Demander un devis",
    hero: {
      eyebrow: "Logiciels dopés à l'IA, E-commerce & Automatisation",
      titleBefore: "Nous créons des logiciels dopés à l'IA qui ",
      titleGrad: "font avancer votre entreprise",
      sub: "AATech est une société de logiciels mondiale forte de plus de 10 ans d'expérience dans la création de solutions e-commerce et de plateformes sur mesure de bout en bout — développement, intégration, automatisation, reporting et big data, boostés par l'IA. Nous collaborons avec des clients du monde entier et avons l'expertise pour résoudre tout type de défi technique.",
      start: "Démarrer votre projet",
      explore: "Découvrir les services",
    },
    stats: ["Ans d'expérience", "Projets livrés", "Clients dans le monde", "Support & automatisation"],
    servicesHead: {
      eyebrow: "Ce que nous faisons",
      title: "Des services conçus pour produire des résultats",
      lead: "Une équipe full-stack qui vous mène du concept à un produit abouti, prêt pour la production.",
    },
    services: [
      { title: "Développement dopé à l'IA", desc: "Nous intégrons l'IA dans vos produits — intégrations LLM & Claude, chatbots intelligents, moteurs de recommandation, automatisation documentaire et fonctions prédictives qui vous donnent une longueur d'avance." },
      { title: "Solutions E-commerce", desc: "Experts de toutes les grandes plateformes e-commerce — Shopify, Magento, WooCommerce, BigCommerce et solutions sur mesure — avec plus de 10 ans à faire évoluer des boutiques de bout en bout, du catalogue à la livraison." },
      { title: "Automatisation métier", desc: "Remplacez les tâches manuelles répétitives par des workflows, bots et pipelines automatisés qui relient vos outils et tournent 24/7 — moins d'erreurs, moins de coûts, plus de rapidité." },
      { title: "Intégration de systèmes", desc: "Connectez ERP, CRM, POS, passerelles de paiement, marketplaces et API en un flux de données fluide et fiable dans toute votre entreprise." },
      { title: "Données, Reporting & BI", desc: "Tableaux de bord en temps réel, rapports automatisés et KPI en direct qui transforment les données brutes en décisions concrètes — par e-mail, écran ou mobile." },
      { title: "Big Data & Analytique", desc: "Des pipelines qui ingèrent, nettoient et analysent des millions d'enregistrements pour révéler tendances, prévisions et opportunités cachées dans vos données." },
      { title: "Logiciels & Web sur mesure", desc: "Plateformes web et produits SaaS sur mesure avec React, Next.js et une architecture propre et maintenable — conçus pour évoluer dès le premier jour." },
      { title: "Applications mobiles", desc: "Applications iOS & Android natives et multiplateformes avec une UX fluide, un support hors ligne et une livraison prête pour les stores." },
      { title: "Cloud & DevOps", desc: "Infrastructure évolutive sur AWS, Azure et GCP avec pipelines CI/CD, conteneurs et supervision 24/7 qui maintient tout en marche." },
      { title: "SEO & Marketing digital", desc: "Grimpez dans les classements et générez de la demande avec du SEO technique, du contenu, des Google & Meta Ads et des campagnes pilotées par la donnée qui transforment les visiteurs en clients." },
      { title: "Email Marketing & Automatisation", desc: "Newsletters, campagnes drip et e-mails transactionnels avec Klaviyo, Mailchimp et SendGrid — automatisés, personnalisés et conçus pour atterrir dans la boîte de réception." },
      { title: "UI/UX & Design produit", desc: "Interfaces basées sur la recherche, wireframes et design systems qui transforment des idées complexes en expériences claires, agréables et à forte conversion." },
      { title: "Branding & Création", desc: "Logos, identité visuelle et créations marketing qui rendent votre marque immédiatement reconnaissable sur tous les canaux." },
      { title: "Optimisation du taux de conversion", desc: "Tests A/B, analyse d'entonnoir et optimisation des landing pages pour tirer plus de revenus du trafic que vous avez déjà." },
      { title: "Maintenance, Sécurité & Support", desc: "Supervision proactive, renforcement de la sécurité, mises à jour et support 24/7 qui gardent votre logiciel rapide, sûr et toujours en ligne." },
    ],
    why: {
      eyebrow: "Pourquoi AATech",
      title: "Un partenaire aussi investi que vous dans le résultat",
      lead: "Nous n'écrivons pas seulement du code — nous soignons les détails qui rendent un produit fiable, évolutif et agréable à utiliser.",
      cta: "Discutons",
      items: [
        { title: "Plus de 10 ans d'expertise e-commerce", desc: "Experts de chaque grande plateforme — Shopify, Magento, WooCommerce, BigCommerce — avec un commerce de bout en bout : développement, intégration, automatisation, reporting et big data." },
        { title: "IA & automatisation au cœur", desc: "Nous intégrons l'IA et des workflows automatisés dans tout ce que nous construisons, pour des systèmes plus intelligents qui se gèrent seuls." },
        { title: "Un acteur mondial de la tech", desc: "Nous collaborons avec des clients partout dans le monde, sur tous les fuseaux horaires, avec une communication claire et fiable 24h/24." },
        { title: "Des ingénieurs seniors responsables du résultat", desc: "Vous travaillez directement avec des développeurs expérimentés — sans juniors cachés sur la facture — investis dans vos résultats." },
        { title: "L'expertise pour tout défi", desc: "D'une simple intégration à la refonte complète d'une plateforme, nous avons la profondeur pour résoudre tout problème technique." },
        { title: "Livraison transparente et dans les délais", desc: "Périmètre fixe, jalons clairs et démos hebdomadaires rendent la livraison prévisible et vous tiennent toujours informé." },
      ],
    },
    process: {
      eyebrow: "Comment nous travaillons",
      title: "Un chemin clair de l'idée au lancement",
      steps: [
        { title: "Découvrir", desc: "Nous explorons vos objectifs, données et processus pour définir le succès et identifier où l'IA et l'automatisation font la différence." },
        { title: "Concevoir", desc: "Architecture, prototypes et un plan clair d'automatisation & d'intégration que vous validez avant la moindre ligne de code." },
        { title: "Construire & Automatiser", desc: "Développement assisté par l'IA, intégrations système et pipelines automatisés, livrés en sprints agiles avec des démos hebdomadaires." },
        { title: "Lancer, Analyser & Optimiser", desc: "Déploiement fluide, tableaux de bord en direct, supervision et amélioration continue pour des résultats qui se cumulent." },
      ],
    },
    reporting: {
      eyebrow: "Données, reporting & big data",
      title: "Un reporting qui transforme les données en décisions",
      lead: "Des tableaux de bord en temps réel aux rapports automatisés et pipelines big data — nous faisons travailler vos chiffres pour vous.",
      reportsTitle: "Exemples de rapports que nous créons",
      reports: [
        "Tableaux de bord ventes & revenus en temps réel",
        "Rapports de stock & chaîne d'approvisionnement",
        "Analyses clients, cohortes & rétention",
        "Suivi du ROI marketing & campagnes",
        "Rapports e-mail automatisés quotidiens / hebdomadaires",
        "Pipelines big data sur des millions d'enregistrements",
      ],
      dashName: "AATech Analytics",
      live: "● En direct",
      kpis: ["Revenus (30 j)", "Commandes", "Conversion", "Croissance A/A"],
      chartHead: "Revenus — 12 derniers mois",
      chartUp: "▲ en hausse",
      cta: "Obtenez votre tableau de bord",
    },
    techHead: {
      eyebrow: "Notre boîte à outils",
      title: "Les technologies que nous maîtrisons",
      lead: "Nous choisissons le bon outil pour chaque tâche — éprouvé, moderne et durable.",
    },
    contact: {
      eyebrow: "Contactez-nous",
      title: "Un projet en tête ? Construisons-le.",
      sub: "Dites-nous sur quoi vous travaillez et nous vous répondrons sous un jour ouvré.",
      name: "Votre nom",
      email: "Adresse e-mail",
      company: "Entreprise (facultatif)",
      message: "Parlez-nous de votre projet",
      submit: "Envoyer le message",
      prefer: "Vous préférez l'e-mail ?",
    },
    footer: {
      tag: "Une société de logiciels mondiale qui conçoit des logiciels fiables, dopés à l'IA, pour les entreprises du monde entier.",
      start: "Démarrer un projet",
      rights: "Tous droits réservés.",
    },
  },

  // ------------------------------------------------------------------ ES
  es: {
    nav: ["Servicios", "Reportes", "Por qué AATech", "Proceso", "Contacto"],
    getQuote: "Solicitar presupuesto",
    hero: {
      eyebrow: "Software con IA, E-commerce y Automatización",
      titleBefore: "Creamos software con IA que ",
      titleGrad: "impulsa tu negocio",
      sub: "AATech es una empresa de software global con más de 10 años creando soluciones de e-commerce y plataformas a medida de principio a fin — desarrollo, integración, automatización, reportes y big data, potenciados con IA. Colaboramos con clientes de todo el mundo y tenemos la experiencia para resolver cualquier reto técnico.",
      start: "Inicia tu proyecto",
      explore: "Explora los servicios",
    },
    stats: ["Años de experiencia", "Proyectos entregados", "Clientes en todo el mundo", "Soporte y automatización"],
    servicesHead: {
      eyebrow: "Qué hacemos",
      title: "Servicios diseñados para dar resultados",
      lead: "Un equipo full-stack que te lleva del concepto a un producto pulido y listo para producción.",
    },
    services: [
      { title: "Desarrollo con IA", desc: "Integramos IA en tus productos — integraciones LLM y Claude, chatbots inteligentes, motores de recomendación, automatización de documentos y funciones predictivas que te dan ventaja." },
      { title: "Soluciones de E-commerce", desc: "Expertos en todas las grandes plataformas de e-commerce — Shopify, Magento, WooCommerce, BigCommerce y desarrollos a medida — con más de 10 años escalando tiendas de principio a fin, del catálogo a la entrega." },
      { title: "Automatización de negocio", desc: "Sustituye el trabajo manual repetitivo por flujos, bots y pipelines automatizados que conectan tus herramientas y funcionan 24/7 — menos errores, menor coste, más velocidad." },
      { title: "Integración de sistemas", desc: "Conecta ERP, CRM, TPV, pasarelas de pago, marketplaces y APIs en un flujo de datos único y fiable en todo tu negocio." },
      { title: "Datos, Reportes y BI", desc: "Paneles en tiempo real, reportes automatizados y KPIs en vivo que convierten datos en bruto en decisiones accionables — en el correo, la pantalla o el móvil." },
      { title: "Big Data y Analítica", desc: "Pipelines que ingieren, limpian y analizan millones de registros para revelar tendencias, previsiones y oportunidades ocultas en tus datos." },
      { title: "Software y Web a medida", desc: "Plataformas web y productos SaaS a medida con React, Next.js y una arquitectura limpia y mantenible — diseñados para escalar desde el primer día." },
      { title: "Apps móviles", desc: "Apps nativas y multiplataforma para iOS y Android con una UX fluida, soporte offline y entrega lista para las tiendas." },
      { title: "Cloud y DevOps", desc: "Infraestructura escalable en AWS, Azure y GCP con pipelines CI/CD, contenedores y monitorización 24/7 que mantiene todo en marcha." },
      { title: "SEO y Marketing Digital", desc: "Escala posiciones y genera demanda con SEO técnico, contenido, Google y Meta Ads y campañas basadas en analítica que convierten visitantes en clientes." },
      { title: "Email Marketing y Automatización", desc: "Newsletters, campañas drip y correos transaccionales con Klaviyo, Mailchimp y SendGrid — automatizados, personalizados y diseñados para llegar a la bandeja de entrada." },
      { title: "Diseño UI/UX y de Producto", desc: "Interfaces basadas en investigación, wireframes y sistemas de diseño que convierten ideas complejas en experiencias claras, atractivas y de alta conversión." },
      { title: "Branding y Creatividad", desc: "Logos, identidad visual y creatividades de marketing que hacen tu marca reconocible al instante en todos los canales." },
      { title: "Optimización de Conversión", desc: "Tests A/B, análisis de embudo y optimización de landing pages para obtener más ingresos del tráfico que ya tienes." },
      { title: "Mantenimiento, Seguridad y Soporte", desc: "Monitorización proactiva, refuerzo de seguridad, actualizaciones y soporte 24/7 que mantienen tu software rápido, seguro y siempre en línea." },
    ],
    why: {
      eyebrow: "Por qué AATech",
      title: "Un socio tan comprometido con el resultado como tú",
      lead: "No solo escribimos código — cuidamos los detalles que hacen que un producto sea fiable, escalable y un placer de usar.",
      cta: "Hablemos",
      items: [
        { title: "Más de 10 años de experiencia en e-commerce", desc: "Expertos en cada gran plataforma — Shopify, Magento, WooCommerce, BigCommerce — con comercio de principio a fin: desarrollo, integración, automatización, reportes y big data." },
        { title: "IA y automatización en el núcleo", desc: "Integramos IA y flujos automatizados en todo lo que construimos, para que tus sistemas trabajen de forma más inteligente y se gestionen solos." },
        { title: "Un jugador global en tecnología", desc: "Colaboramos con clientes de todo el mundo, en cualquier zona horaria, con una comunicación clara y fiable a toda hora." },
        { title: "Ingenieros senior que asumen el resultado", desc: "Trabajas directamente con desarrolladores con experiencia — sin junior ocultos en la factura — comprometidos con tus resultados." },
        { title: "Experiencia para cualquier reto", desc: "De una sola integración a la reconstrucción completa de una plataforma, tenemos la profundidad para resolver cualquier problema técnico." },
        { title: "Entrega transparente y puntual", desc: "Alcance fijo, hitos claros y demos semanales hacen la entrega predecible y te mantienen siempre al tanto." },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un camino claro de la idea al lanzamiento",
      steps: [
        { title: "Descubrir", desc: "Profundizamos en tus objetivos, datos y procesos para definir el éxito y dónde pueden ganar la IA y la automatización." },
        { title: "Diseñar", desc: "Arquitectura, prototipos y un plan claro de automatización e integración que revisas antes de escribir una línea de código." },
        { title: "Construir y Automatizar", desc: "Desarrollo asistido por IA, integraciones de sistemas y pipelines automatizados, entregados en sprints ágiles con demos semanales." },
        { title: "Lanzar, Reportar y Optimizar", desc: "Despliegue fluido más paneles en vivo, monitorización y mejora continua para que los resultados sigan creciendo." },
      ],
    },
    reporting: {
      eyebrow: "Datos, reportes y big data",
      title: "Reportes que convierten los datos en decisiones",
      lead: "De paneles en tiempo real a reportes automatizados y pipelines de big data — hacemos que tus números trabajen para ti.",
      reportsTitle: "Ejemplos de reportes que creamos",
      reports: [
        "Paneles de ventas e ingresos en tiempo real",
        "Reportes de inventario y cadena de suministro",
        "Analítica de clientes, cohortes y retención",
        "Seguimiento del ROI de marketing y campañas",
        "Reportes por correo automatizados diarios / semanales",
        "Pipelines de big data sobre millones de registros",
      ],
      dashName: "AATech Analytics",
      live: "● En vivo",
      kpis: ["Ingresos (30 d)", "Pedidos", "Conversión", "Crecimiento anual"],
      chartHead: "Ingresos — últimos 12 meses",
      chartUp: "▲ creciendo",
      cta: "Consigue tu panel",
    },
    techHead: {
      eyebrow: "Nuestras herramientas",
      title: "Tecnologías que dominamos",
      lead: "Elegimos la herramienta adecuada para cada tarea — probada, moderna y duradera.",
    },
    contact: {
      eyebrow: "Ponte en contacto",
      title: "¿Tienes un proyecto en mente? Construyámoslo.",
      sub: "Cuéntanos en qué trabajas y te responderemos en un día hábil.",
      name: "Tu nombre",
      email: "Correo electrónico",
      company: "Empresa (opcional)",
      message: "Cuéntanos sobre tu proyecto",
      submit: "Enviar mensaje",
      prefer: "¿Prefieres el correo?",
    },
    footer: {
      tag: "Una empresa de software global que crea software fiable y potenciado con IA para negocios de todo el mundo.",
      start: "Inicia un proyecto",
      rights: "Todos los derechos reservados.",
    },
  },
};
