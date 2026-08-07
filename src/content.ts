export type Lang = "es" | "en";

const es = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    cases: "Casos",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Agendar llamada",
  },
  hero: {
    badge: "Consultora de IA aplicada · México → LATAM",
    titleA: "La IA no es el futuro.",
    titleB: "Es ahora.",
    subtitle:
      "AXKAN moderniza empresas mediante la adopción de Inteligencia Artificial: agentes de IA, machine learning, segmentación de clientes, visión computacional y analítica avanzada. Sin promesas exageradas: decisiones medibles, respaldadas por datos.",
    ctaPrimary: "Hablar por WhatsApp",
    ctaSecondary: "Ver servicios",
    stats: [
      { value: "10+", label: "años en operación comercial real" },
      { value: "250+", label: "KPIs consolidados en un solo ecosistema" },
      { value: "22", label: "profesionales capacitados en IA (AFAC)" },
    ],
  },
  clients: {
    title: "Experiencia construida en empresas reales",
    names: ["AFAC · CIAAC", "JTI", "Banco Santander", "Diageo", "Mimba"],
  },
  services: {
    kicker: "Servicios",
    title: "De los datos dispersos a las decisiones inteligentes",
    subtitle:
      "Cada servicio parte del problema de negocio, no de la tecnología. La herramienta se elige después de entender la operación.",
    items: [
      {
        icon: "sparkles",
        title: "Adopción de IA e IA Generativa empresarial",
        desc: "Programas institucionales para que los equipos integren IA generativa (Copilot, LLMs) en su operación diaria: currícula, ejercicios prácticos, ciberseguridad, principios éticos UNESCO y supervisión humana.",
        tags: ["Capacitación", "Copilot / LLMs", "IA responsable"],
      },
      {
        icon: "bot",
        title: "Agentes de IA y automatización de procesos",
        desc: "Diseño de agentes y flujos automatizados que eliminan trabajo repetitivo: cotizadores inteligentes, procesamiento de documentos, asistentes internos conectados a los datos de la empresa.",
        tags: ["Agentes", "Workflows", "Back-office"],
      },
      {
        icon: "chart",
        title: "Analítica y BI para la toma de decisiones",
        desc: "Dashboards ejecutivos que consolidan múltiples fuentes (ventas, precios, ejecución) en indicadores accionables. Gobierno de datos y calidad de la información como base.",
        tags: ["Power BI", "KPIs", "Gobierno de datos"],
      },
      {
        icon: "trending",
        title: "Machine Learning: forecasting y modelos predictivos",
        desc: "Modelos de pronóstico de demanda por SKU, cliente y canal; regresiones para identificar las variables que realmente mueven el resultado comercial.",
        tags: ["Forecast", "Python", "Series de tiempo"],
      },
      {
        icon: "users",
        title: "Segmentación de clientes (clustering)",
        desc: "Agrupación de clientes por comportamiento real de compra para detectar oportunidades de crecimiento, retención y precios. K-means, Silhouette, Calinski-Harabasz: métricas, no intuición.",
        tags: ["Clustering", "Retención", "Crecimiento"],
      },
      {
        icon: "eye",
        title: "Visión computacional y analítica de redes sociales",
        desc: "Reconocimiento de imágenes con redes CNN para ejecución en punto de venta, y análisis de redes y texto (NLP) para entender conversación, comunidades e influencia.",
        tags: ["CNN / PyTorch", "NLP", "Social listening"],
      },
    ],
  },
  process: {
    kicker: "Método",
    title: "Un proceso claro, sin cajas negras",
    steps: [
      {
        n: "01",
        title: "Diagnóstico",
        desc: "Se evalúan datos, procesos y prioridades del negocio. Se identifican quick wins y riesgos.",
      },
      {
        n: "02",
        title: "Estrategia",
        desc: "Roadmap de adopción con alcance, tiempos y métricas de éxito definidas antes de construir.",
      },
      {
        n: "03",
        title: "Implementación",
        desc: "Modelos, dashboards, agentes y capacitación entran en operación con el equipo del cliente.",
      },
      {
        n: "04",
        title: "Adopción continua",
        desc: "Medición, ajuste y evolución. La tecnología solo tiene valor cuando mejora una decisión.",
      },
    ],
  },
  pricing: {
    kicker: "Inversión",
    title: "Paquetes de referencia",
    subtitle:
      "Rangos orientativos en MXN. Cada propuesta se cotiza según alcance, fuentes de datos y madurez del equipo.",
    tiers: [
      {
        name: "Diagnóstico IA",
        price: "desde $18,000",
        unit: "MXN · proyecto",
        desc: "El punto de partida para saber dónde está la oportunidad.",
        features: [
          "Auditoría de datos y procesos",
          "Mapa de oportunidades de IA",
          "Roadmap de adopción priorizado",
          "Quick wins accionables",
          "2–3 semanas",
        ],
        cta: "Solicitar diagnóstico",
        featured: false,
      },
      {
        name: "Implementación",
        price: "desde $45,000",
        unit: "MXN · proyecto",
        desc: "Un proyecto completo, de la estrategia a producción.",
        features: [
          "Dashboard ejecutivo o modelo ML",
          "Agente / automatización de proceso",
          "Integración de fuentes de datos",
          "Capacitación del equipo",
          "4–8 semanas",
        ],
        cta: "Cotizar proyecto",
        featured: true,
      },
      {
        name: "Partner de adopción",
        price: "desde $25,000",
        unit: "MXN · mensual",
        desc: "Acompañamiento continuo para escalar la adopción.",
        features: [
          "Evolución de modelos y tableros",
          "Programa de capacitación continua",
          "Gobierno de datos",
          "Soporte y priorización mensual",
          "Sin permanencia forzosa",
        ],
        cta: "Agendar llamada",
        featured: false,
      },
    ],
    note: "* Precios de referencia antes de IVA. El alcance final se define en el diagnóstico.",
  },
  cases: {
    kicker: "Casos",
    title: "Resultados en entornos exigentes",
    subtitle:
      "De la aviación civil regulada al retail de consumo masivo: los mismos principios, aplicados al contexto de cada organización.",
    items: [
      {
        client: "AFAC · CIAAC",
        sector: "Aviación civil / Gobierno",
        title: "Programa institucional de adopción de IA",
        desc: "Diseño e impartición de un programa de adopción de IA generativa para 22 profesionales (~50% del personal del CIAAC): currícula, evaluaciones, ejercicios prácticos con Microsoft Copilot, ciberseguridad y principios éticos UNESCO. Actualmente se diseña el programa de gobierno de datos alineado a recomendaciones OACI (SSP, SMS, AD3M).",
        metrics: [
          { value: "22", label: "profesionales certificados" },
          { value: "~50%", label: "del personal del centro" },
        ],
      },
      {
        client: "JTI (Japan Tobacco International)",
        sector: "Consumo masivo",
        title: "Forecasting de demanda y ecosistema BI",
        desc: "Modelo de pronóstico sell-out a nivel SKU, cliente y canal con días de inventario y pedido sugerido; dashboards Power BI integrando sell-in, sell-out, precios y ejecución. Transformación del ecosistema nacional de reportes hacia un data warehouse con más de 250 KPIs comerciales.",
        metrics: [
          { value: "250+", label: "KPIs consolidados" },
          { value: "SKU · cliente · canal", label: "granularidad del forecast" },
        ],
      },
      {
        client: "Mimba",
        sector: "Agencia de marketing",
        title: "Analítica de funnel y cotizador inteligente",
        desc: "Ecosistema de dashboards (Looker Studio) integrando Meta, Google Ads y Google Analytics con visibilidad completa del funnel, además de una aplicación cotizadora que estandariza propuestas. La visibilidad de datos sostuvo campañas con ~20X ROAS y +112% en valor de conversión.",
        metrics: [
          { value: "~20X", label: "ROAS sostenido" },
          { value: "+112%", label: "valor de conversión" },
        ],
      },
      {
        client: "Banco Santander",
        sector: "Banca",
        title: "MVP de eficiencia operativa",
        desc: "MVP basado en Design Thinking que redujo 80% la carga operativa en procesos de mantenimiento de cuentas, mejorando eficiencia y experiencia del cliente en banca corporativa y PyME.",
        metrics: [{ value: "-80%", label: "carga operativa" }],
      },
      {
        client: "Diageo",
        sector: "Bebidas premium",
        title: "Segmentación y conversión de clientes on-trade",
        desc: "Identificación y segmentación diaria de prospectos on-trade con herramientas digitales de campo, convirtiendo establecimientos clave de canales mayoristas a abastecimiento directo.",
        metrics: [{ value: "~5/día", label: "clientes segmentados" }],
      },
    ],
  },
  cert: {
    kicker: "Credencial",
    title: "Certificación en Data Science & AI",
    org: "Tecnológico de Monterrey",
    desc: "Certificación 'Data Science and AI: Del Concepto al Desarrollo de Aplicaciones' (160 horas), con insignia digital autenticada en Blockchain. Un proyecto real evaluado por expertos, no solo teoría.",
    topics: [
      "Python y manipulación de datos (Pandas, NumPy)",
      "Ingeniería de características",
      "Aprendizaje supervisado y no supervisado",
      "Big Data con PySpark y Databricks",
      "Visión computacional (CNN, PyTorch)",
      "Analítica de texto (NLP) y de redes sociales",
    ],
    badge: "160 horas · Insignia Blockchain",
  },
  about: {
    kicker: "Nosotros",
    title: "Primero el negocio. Después el algoritmo.",
    p1: "AXKAN nace de más de una década transformando procesos comerciales dentro de grandes empresas: ventas, retail, logística, distribución, trade marketing y BI corporativo. Ese recorrido operativo es el diferenciador — la firma no aprendió Python para buscar problemas; ya conocía los problemas y adoptó las herramientas para resolverlos mejor.",
    p2: "El nombre viene del náhuatl axkan: 'ahora'. Refleja la convicción de la casa: la IA no es una promesa a futuro, es una ventaja competitiva disponible hoy para las empresas que decidan adoptarla con rigor.",
    founderTitle: "Fundador",
    founderName: "Erick López Ontiveros",
    founderRole: "Especialista en BI, Ciencia de Datos e IA aplicada",
    founderBio:
      "Trayectoria en JTI, Diageo y Banco Santander liderando transformación comercial y analítica; líder del programa de adopción de IA y gobierno de datos del CIAAC en apoyo a la AFAC. Fundador de Mezcal K'ÓOBEN, donde logró 150% de crecimiento anual en ventas. Certificándose en Data Science & AI por el Tecnológico de Monterrey.",
    values: [
      {
        title: "Claridad sobre tecnología",
        desc: "No se vende IA: se vende crecimiento basado en evidencia. La jerga se queda fuera de la sala.",
      },
      {
        title: "Rigor y honestidad intelectual",
        desc: "Métricas de validación, supervisión humana y ética desde el diseño. Sin resultados inflados.",
      },
      {
        title: "Del dato a la decisión",
        desc: "La tecnología solo tiene valor cuando mejora una decisión. Todo entregable apunta a eso.",
      },
    ],
    stackTitle: "Stack tecnológico",
    stack: [
      "Python",
      "Pandas / NumPy",
      "Scikit-learn",
      "PyTorch",
      "PySpark",
      "Databricks",
      "Power BI",
      "SQL",
      "Microsoft Fabric",
      "Azure AI",
      "OpenAI / LLMs",
      "NetworkX",
    ],
  },
  contact: {
    kicker: "Contacto",
    title: "Hablemos de su siguiente decisión",
    subtitle:
      "Una llamada de 30 minutos basta para saber si hay una oportunidad clara. Sin compromiso y sin presentaciones interminables.",
    waTitle: "WhatsApp",
    waDesc: "Respuesta directa en horario laboral (CDMX).",
    waCta: "Escribir por WhatsApp",
    waMessage:
      "Hola, vengo del sitio de AXKAN. Me interesa una llamada de diagnóstico.",
    calTitle: "Agendar llamada",
    calDesc: "Elija el horario que le acomode en el calendario.",
    calCta: "Ver calendario",
    formTitle: "O envíe un mensaje",
    formName: "Nombre",
    formCompany: "Empresa",
    formEmail: "Correo",
    formMessage: "¿Qué problema le gustaría resolver?",
    formCta: "Enviar mensaje",
    formNote: "El formulario abre su cliente de correo con el mensaje listo.",
  },
  footer: {
    tagline: "Inteligencia Artificial aplicada al negocio. México → LATAM.",
    rights: "Todos los derechos reservados.",
    nav: "Navegación",
    contact: "Contacto",
  },
};

// Estructura espejo en inglés
const en: typeof es = {
  nav: {
    home: "Home",
    services: "Services",
    cases: "Case studies",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
  },
  hero: {
    badge: "Applied AI consultancy · Mexico → LATAM",
    titleA: "AI isn't the future.",
    titleB: "It's now.",
    subtitle:
      "AXKAN modernizes companies through AI adoption: AI agents, machine learning, customer segmentation, computer vision and advanced analytics. No inflated promises — measurable decisions, backed by data.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "View services",
    stats: [
      { value: "10+", label: "years in real commercial operations" },
      { value: "250+", label: "KPIs consolidated into one ecosystem" },
      { value: "22", label: "professionals trained in AI (AFAC)" },
    ],
  },
  clients: {
    title: "Experience built inside real companies",
    names: ["AFAC · CIAAC", "JTI", "Banco Santander", "Diageo", "Mimba"],
  },
  services: {
    kicker: "Services",
    title: "From scattered data to intelligent decisions",
    subtitle:
      "Every service starts from the business problem, not the technology. Tools are chosen after understanding the operation.",
    items: [
      {
        icon: "sparkles",
        title: "Enterprise AI & Generative AI adoption",
        desc: "Institutional programs so teams integrate generative AI (Copilot, LLMs) into daily operations: curriculum, hands-on exercises, cybersecurity, UNESCO ethical principles and human oversight.",
        tags: ["Training", "Copilot / LLMs", "Responsible AI"],
      },
      {
        icon: "bot",
        title: "AI agents & process automation",
        desc: "Agents and automated workflows that remove repetitive work: intelligent quoting tools, document processing, internal assistants connected to company data.",
        tags: ["Agents", "Workflows", "Back-office"],
      },
      {
        icon: "chart",
        title: "Analytics & BI for decision-making",
        desc: "Executive dashboards consolidating multiple sources (sales, pricing, execution) into actionable indicators. Data governance and data quality as the foundation.",
        tags: ["Power BI", "KPIs", "Data governance"],
      },
      {
        icon: "trending",
        title: "Machine Learning: forecasting & predictive models",
        desc: "Demand forecasting models by SKU, customer and channel; regression models to identify the variables that actually move commercial results.",
        tags: ["Forecast", "Python", "Time series"],
      },
      {
        icon: "users",
        title: "Customer segmentation (clustering)",
        desc: "Grouping customers by real purchasing behavior to uncover growth, retention and pricing opportunities. K-means, Silhouette, Calinski-Harabasz: metrics, not intuition.",
        tags: ["Clustering", "Retention", "Growth"],
      },
      {
        icon: "eye",
        title: "Computer vision & social network analytics",
        desc: "Image recognition with CNNs for point-of-sale execution, plus network and text analytics (NLP) to understand conversation, communities and influence.",
        tags: ["CNN / PyTorch", "NLP", "Social listening"],
      },
    ],
  },
  process: {
    kicker: "Method",
    title: "A clear process, no black boxes",
    steps: [
      {
        n: "01",
        title: "Diagnosis",
        desc: "Data, processes and business priorities are assessed. Quick wins and risks are identified.",
      },
      {
        n: "02",
        title: "Strategy",
        desc: "An adoption roadmap with scope, timeline and success metrics defined before building.",
      },
      {
        n: "03",
        title: "Implementation",
        desc: "Models, dashboards, agents and training go live together with the client's team.",
      },
      {
        n: "04",
        title: "Continuous adoption",
        desc: "Measure, adjust, evolve. Technology only has value when it improves a decision.",
      },
    ],
  },
  pricing: {
    kicker: "Investment",
    title: "Reference packages",
    subtitle:
      "Indicative ranges in MXN. Every proposal is quoted based on scope, data sources and team maturity.",
    tiers: [
      {
        name: "AI Diagnosis",
        price: "from $18,000",
        unit: "MXN · project",
        desc: "The starting point to find where the opportunity is.",
        features: [
          "Data & process audit",
          "AI opportunity map",
          "Prioritized adoption roadmap",
          "Actionable quick wins",
          "2–3 weeks",
        ],
        cta: "Request diagnosis",
        featured: false,
      },
      {
        name: "Implementation",
        price: "from $45,000",
        unit: "MXN · project",
        desc: "A complete project, from strategy to production.",
        features: [
          "Executive dashboard or ML model",
          "Agent / process automation",
          "Data source integration",
          "Team training",
          "4–8 weeks",
        ],
        cta: "Get a quote",
        featured: true,
      },
      {
        name: "Adoption partner",
        price: "from $25,000",
        unit: "MXN · monthly",
        desc: "Ongoing support to scale adoption.",
        features: [
          "Model & dashboard evolution",
          "Continuous training program",
          "Data governance",
          "Monthly support & prioritization",
          "No forced commitment",
        ],
        cta: "Book a call",
        featured: false,
      },
    ],
    note: "* Reference pricing before VAT. Final scope is defined during the diagnosis.",
  },
  cases: {
    kicker: "Case studies",
    title: "Results in demanding environments",
    subtitle:
      "From regulated civil aviation to mass-consumption retail: the same principles, applied to each organization's context.",
    items: [
      {
        client: "AFAC · CIAAC",
        sector: "Civil aviation / Government",
        title: "Institutional AI adoption program",
        desc: "Design and delivery of a generative AI adoption program for 22 professionals (~50% of CIAAC staff): curriculum, assessments, hands-on Microsoft Copilot exercises, cybersecurity and UNESCO ethical principles. Currently leading a data governance program aligned with ICAO recommendations (SSP, SMS, AD3M).",
        metrics: [
          { value: "22", label: "professionals certified" },
          { value: "~50%", label: "of the center's staff" },
        ],
      },
      {
        client: "JTI (Japan Tobacco International)",
        sector: "FMCG",
        title: "Demand forecasting & BI ecosystem",
        desc: "Sell-out forecasting model at SKU, customer and channel level with inventory days and suggested orders; Power BI dashboards integrating sell-in, sell-out, pricing and execution. National reporting ecosystem migrated to a data warehouse with 250+ commercial KPIs.",
        metrics: [
          { value: "250+", label: "KPIs consolidated" },
          { value: "SKU · customer · channel", label: "forecast granularity" },
        ],
      },
      {
        client: "Mimba",
        sector: "Marketing agency",
        title: "Funnel analytics & intelligent quoting tool",
        desc: "Dashboard ecosystem (Looker Studio) integrating Meta, Google Ads and Google Analytics with full funnel visibility, plus a quoting app that standardizes proposals. Data visibility sustained campaigns with ~20X ROAS and +112% conversion value.",
        metrics: [
          { value: "~20X", label: "sustained ROAS" },
          { value: "+112%", label: "conversion value" },
        ],
      },
      {
        client: "Banco Santander",
        sector: "Banking",
        title: "Operational efficiency MVP",
        desc: "A Design Thinking-based MVP that reduced operational workload in account maintenance processes by 80%, improving efficiency and customer experience in corporate and SME banking.",
        metrics: [{ value: "-80%", label: "operational workload" }],
      },
      {
        client: "Diageo",
        sector: "Premium spirits",
        title: "On-trade customer segmentation & conversion",
        desc: "Daily identification and segmentation of on-trade prospects using digital field tools, converting key establishments from wholesale channels into direct supply relationships.",
        metrics: [{ value: "~5/day", label: "customers segmented" }],
      },
    ],
  },
  cert: {
    kicker: "Credential",
    title: "Data Science & AI Certification",
    org: "Tecnológico de Monterrey",
    desc: "'Data Science and AI: From Concept to Application Development' certification (160 hours), with a Blockchain-authenticated digital badge. A real project evaluated by experts — not just theory.",
    topics: [
      "Python & data wrangling (Pandas, NumPy)",
      "Feature engineering",
      "Supervised & unsupervised learning",
      "Big Data with PySpark and Databricks",
      "Computer vision (CNN, PyTorch)",
      "Text analytics (NLP) & social network analysis",
    ],
    badge: "160 hours · Blockchain badge",
  },
  about: {
    kicker: "About",
    title: "Business first. Algorithm second.",
    p1: "AXKAN was born from over a decade transforming commercial processes inside large companies: sales, retail, logistics, distribution, trade marketing and corporate BI. That operational background is the differentiator — the firm didn't learn Python to go looking for problems; it already knew the problems and adopted the tools to solve them better.",
    p2: "The name comes from the Nahuatl word axkan: 'now'. It reflects the firm's conviction: AI is not a future promise, it is a competitive advantage available today to companies that adopt it with rigor.",
    founderTitle: "Founder",
    founderName: "Erick López Ontiveros",
    founderRole: "Specialist in BI, Data Science & applied AI",
    founderBio:
      "Track record at JTI, Diageo and Banco Santander leading commercial and analytics transformation; leader of CIAAC's AI adoption and data governance program in support of AFAC (Mexico's civil aviation authority). Founder of Mezcal K'ÓOBEN, achieving 150% annual sales growth. Currently certifying in Data Science & AI at Tecnológico de Monterrey.",
    values: [
      {
        title: "Clarity over technology",
        desc: "We don't sell AI: we sell evidence-based growth. Jargon stays out of the room.",
      },
      {
        title: "Rigor & intellectual honesty",
        desc: "Validation metrics, human oversight and ethics by design. No inflated results.",
      },
      {
        title: "From data to decision",
        desc: "Technology only has value when it improves a decision. Every deliverable aims at that.",
      },
    ],
    stackTitle: "Technology stack",
    stack: [
      "Python",
      "Pandas / NumPy",
      "Scikit-learn",
      "PyTorch",
      "PySpark",
      "Databricks",
      "Power BI",
      "SQL",
      "Microsoft Fabric",
      "Azure AI",
      "OpenAI / LLMs",
      "NetworkX",
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk about your next decision",
    subtitle:
      "A 30-minute call is enough to know whether there is a clear opportunity. No commitment, no endless slide decks.",
    waTitle: "WhatsApp",
    waDesc: "Direct response during business hours (Mexico City).",
    waCta: "Chat on WhatsApp",
    waMessage:
      "Hi, I'm coming from the AXKAN website. I'd like a diagnosis call.",
    calTitle: "Book a call",
    calDesc: "Pick the time that works best on the calendar.",
    calCta: "Open calendar",
    formTitle: "Or send a message",
    formName: "Name",
    formCompany: "Company",
    formEmail: "Email",
    formMessage: "What problem would you like to solve?",
    formCta: "Send message",
    formNote: "The form opens your email client with the message ready.",
  },
  footer: {
    tagline: "Artificial Intelligence applied to business. Mexico → LATAM.",
    rights: "All rights reserved.",
    nav: "Navigation",
    contact: "Contact",
  },
};

export const content: Record<Lang, typeof es> = { es, en };
