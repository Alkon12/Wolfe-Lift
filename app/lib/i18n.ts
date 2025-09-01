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
        "Serving Los Angeles County and surrounding areas with reliable equipment and same-day delivery",
      cta1: "Get Instant Quote",
      cta2: "Call Now",
    },
    services: {
      title: "Our Equipment",
      subtitle: "Professional grade scissor lifts for any job site",
      lift12: {
        title: "12' Scissor Lift",
        specs: "Compact design • Indoor use • 500 lb capacity",
        rate: "Get Quote Now",
      },
      lift19: {
        title: "19' Scissor Lift",
        specs: "Mid-range height • Indoor/outdoor use • 750 lb capacity",
        rate: "Get Quote Now",
      },
      lift26: {
        title: "26' Scissor Lift",
        specs: "Maximum height • Rough terrain capable • 1000 lb capacity",
        rate: "Get Quote Now",
      },
    },
    whyChoose: {
      title: "Why Choose Wolfe Lift?",
      subtitle: "Trusted by contractors throughout Los Angeles County for over 15 years",
      point1: {
        title: "Same-Day Delivery",
        desc: "Equipment delivered to your job site within hours",
      },
      point2: {
        title: "Affordable Delivery",
        desc: "Delivery starts at $150 - Pickup is FREE",
      },
      point3: {
        title: "Expert Support",
        desc: "24/7 technical support and operator training available",
      },
      point4: {
        title: "Competitive Rates",
        desc: "Best prices in Los Angeles County with no hidden fees",
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
        "Sirviendo el Condado de Los Ángeles y áreas circundantes con equipo confiable y entrega el mismo día",
      cta1: "Cotizar Ahora",
      cta2: "Llamar Ahora",
    },
    services: {
      title: "Nuestro Equipo",
      subtitle:
        "Plataformas elevadoras de grado profesional para cualquier obra",
      lift12: {
        title: "Plataforma de 12'",
        specs: "Diseño compacto • Uso interior • Capacidad 500 lb",
        rate: "Cotizar Ahora",
      },
      lift19: {
        title: "Plataforma de 19'",
        specs: "Altura media • Uso interior/exterior • Capacidad 750 lb",
        rate: "Cotizar Ahora",
      },
      lift26: {
        title: "Plataforma de 26'",
        specs: "Altura máxima • Terreno rugoso • Capacidad 1000 lb",
        rate: "Cotizar Ahora",
      },
    },
    whyChoose: {
      title: "¿Por Qué Elegir Wolfe Lift?",
      subtitle: "Confianza de contratistas del Condado de Los Ángeles por más de 15 años",
      point1: {
        title: "Entrega el Mismo Día",
        desc: "Equipo entregado a su obra en horas",
      },
      point2: {
        title: "Entrega Económica",
        desc: "Entrega desde $150 - Recogida GRATIS",
      },
      point3: {
        title: "Soporte Experto",
        desc: "Soporte técnico 24/7 y entrenamiento de operadores disponible",
      },
      point4: {
        title: "Precios Competitivos",
        desc: "Mejores precios en el Condado de Los Ángeles sin cargos ocultos",
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

