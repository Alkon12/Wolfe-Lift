import type { Variants } from "framer-motion";

// Configuración común de easing para animaciones profesionales
export const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

// Animaciones de fade in desde diferentes direcciones
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

// Animación de escala suave
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

// Animaciones para stagger (efectos en secuencia)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

// Animación para cards (hover y entrada)
export const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Animación para botones
export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Animación para iconos
export const iconFloat: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Animación de entrada para formularios
export const formFieldAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

// Animación para navegación móvil - Optimizada para móvil
export const mobileMenuAnimation: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1], // ease-out más rápido
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1], // ease-out más rápido
    },
  },
};

export const mobileMenuItem: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1], // ease-out más rápido
    },
  },
};

// Configuraciones del viewport para Intersection Observer
export const viewportConfig = {
  once: true,
  margin: "-50px",
  amount: 0.1,
};

export const viewportConfigMobile = {
  once: true,
  margin: "0px",
  amount: 0.05,
};

export const viewportConfigLarge = {
  once: true,
  margin: "-100px",
  amount: 0.2,
};

// Función utilitaria para obtener viewport config responsive
export const getResponsiveViewportConfig = () => {
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768;
    return isMobile ? viewportConfigMobile : viewportConfig;
  }
  return viewportConfig; // Fallback para SSR
};