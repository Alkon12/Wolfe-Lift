export const translations = {
  en: {
    nav: {
      home: "Home",
      equipment: "Equipment",
      services: "Services",
      contact: "Contact",
      phone: "(626) 422-2271",
      quote: "Get Quote",
    },
    hero: {
      headline: "Professional Scissor Lift Rentals",
      subheadline:
        "Serving San Dimas contractors with reliable equipment and same-day delivery",
      cta1: "Get Instant Quote",
      cta2: "Call Now",
    },
    services: {
      title: "Our Equipment",
      subtitle: "Professional grade scissor lifts for any job site",
      lift19: {
        title: "19' Scissor Lift",
        specs: "Compact design • Indoor/outdoor use • 500 lb capacity",
        rate: "$125/day",
      },
      lift26: {
        title: "26' Scissor Lift",
        specs: "Mid-range height • Rough terrain capable • 750 lb capacity",
        rate: "$175/day",
      },
      lift32: {
        title: "32' Scissor Lift",
        specs: "Maximum height • Heavy duty construction • 1000 lb capacity",
        rate: "$225/day",
      },
    },
    whyChoose: {
      title: "Why Choose Wolfe Lift?",
      subtitle: "Trusted by San Dimas contractors for over 15 years",
      point1: {
        title: "Same-Day Delivery",
        desc: "Equipment delivered to your job site within hours",
      },
      point2: {
        title: "Licensed & Insured",
        desc: "Fully licensed contractor with comprehensive insurance",
      },
      point3: {
        title: "Expert Support",
        desc: "24/7 technical support and operator training available",
      },
      point4: {
        title: "Competitive Rates",
        desc: "Best prices in San Dimas with no hidden fees",
      },
    },
    contact: {
      title: "Get Your Equipment Today",
      subtitle: "Quick quote • Same-day delivery • Professional service",
      form: {
        name: "Company Name",
        phone: "Phone Number",
        equipment: "Equipment Needed",
        date: "Start Date",
        submit: "Request Quote",
      },
      info: {
        address: "123 Industry Blvd, San Dimas, CA 91773",
        hours: "Mon-Fri: 6AM-6PM | Sat: 7AM-3PM",
      },
    },
    footer: {
      tagline: "Professional Equipment. Reliable Service. Fair Prices.",
      links: {
        about: "About Us",
        safety: "Safety",
        terms: "Terms",
        privacy: "Privacy",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      equipment: "Equipos",
      services: "Servicios",
      contact: "Contacto",
      phone: "(626) 422-2271",
      quote: "Cotizar",
    },
    hero: {
      headline: "Renta de Plataformas Elevadoras",
      subheadline:
        "Sirviendo a contratistas de San Dimas con equipo confiable y entrega el mismo día",
      cta1: "Cotizar Ahora",
      cta2: "Llamar Ahora",
    },
    services: {
      title: "Nuestro Equipo",
      subtitle:
        "Plataformas elevadoras de grado profesional para cualquier obra",
      lift19: {
        title: "Plataforma de 19'",
        specs: "Diseño compacto • Uso interior/exterior • Capacidad 500 lb",
        rate: "$125/día",
      },
      lift26: {
        title: "Plataforma de 26'",
        specs: "Altura media • Terreno rugoso • Capacidad 750 lb",
        rate: "$175/día",
      },
      lift32: {
        title: "Plataforma de 32'",
        specs: "Altura máxima • Construcción resistente • Capacidad 1000 lb",
        rate: "$225/día",
      },
    },
    whyChoose: {
      title: "¿Por Qué Elegir Wolfe Lift?",
      subtitle: "Confianza de contratistas de San Dimas por más de 15 años",
      point1: {
        title: "Entrega el Mismo Día",
        desc: "Equipo entregado a su obra en horas",
      },
      point2: {
        title: "Licenciado y Asegurado",
        desc: "Contratista completamente licenciado con seguro integral",
      },
      point3: {
        title: "Soporte Experto",
        desc: "Soporte técnico 24/7 y entrenamiento de operadores disponible",
      },
      point4: {
        title: "Precios Competitivos",
        desc: "Mejores precios en San Dimas sin cargos ocultos",
      },
    },
    contact: {
      title: "Obtenga Su Equipo Hoy",
      subtitle:
        "Cotización rápida • Entrega el mismo día • Servicio profesional",
      form: {
        name: "Nombre de la Empresa",
        phone: "Número de Teléfono",
        equipment: "Equipo Necesario",
        date: "Fecha de Inicio",
        submit: "Solicitar Cotización",
      },
      info: {
        address: "123 Industry Blvd, San Dimas, CA 91773",
        hours: "Lun-Vie: 6AM-6PM | Sáb: 7AM-3PM",
      },
    },
    footer: {
      tagline: "Equipo Profesional. Servicio Confiable. Precios Justos.",
      links: {
        about: "Nosotros",
        safety: "Seguridad",
        terms: "Términos",
        privacy: "Privacidad",
      },
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;

