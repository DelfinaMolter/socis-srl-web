import { Service, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Normas ISO", href: "#isoStandards" },
  { label: "Ley de Conocimiento", href: "#lec" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const ISO_STANDARDS = [
  {
    category: "Sistema de Gestión de la Calidad",
    name: "ISO 9001",
  },
  {
    category: "Sistema de Gestión Ambiental",
    name: "ISO 14001",
  },
  {
    category: "Seguridad y Salud en el Trabajo",
    name: "ISO 45001",
  },
  {
    category: "Seguridad de la Información",
    name: "ISO 27001",
  },
  {
    category: "Servicios de Traducción",
    name: "ISO 17100",
  },
  {
    category: "Laboratorios de Ensayo y Calibración",
    name: "ISO 17025",
  },
];
export const SERVICES: Service[] = [
  {
    id: "iso",
    title: "Certificación Normas ISO",
    description:
      "Acompañamiento integral en la implementación y certificación de Normas ISO 9001, 14001, 45001, 17025, 27001 y otras.",
    icon: "ShieldCheck",
  },
  {
    id: "knowledge",
    title: "Economía del Conocimiento",
    description:
      "Asesoramiento experto para acceder a los beneficios del régimen de promoción de la Ley 27.506.",
    icon: "TrendingUp",
  },
  {
    id: "software-law",
    title: "Ley de Promoción de Software",
    description:
      "Gestión de inscripciones y cumplimiento bajo el marco de la Ley 25.922 y sus modificatorias.",
    icon: "FileCheck",
  },
  {
    id: "training",
    title: "Formación del Personal",
    description:
      "Cursos orientados a mandos medios y responsables de organización: ventas, personal, costos e interpretación.",
    icon: "GraduationCap",
  },
  {
    id: "iso-training",
    title: "Cursos Normas ISO",
    description:
      "Capacitación específica en Auditoría Interna, AMFE, Requisitos ISO/IEC 17025 y gestión de no conformidades.",
    icon: "Briefcase",
  },
  {
    id: "agile",
    title: "Mejora de Procesos",
    description:
      "Implementación ágil de mejoras que agregan valor y acompañan la velocidad de su negocio.",
    icon: "Users",
  },
];

export const TEAM = [
  {
    name: "Alejandro de Simone",
    desc1: "Ingeniero Industrial",
    desc2: "Desarrollo Comercial y Estrategia de Servicios.",
    image: "/alejandro-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/alejandro-de-simone-5b839339/",
  },
  {
    name: "Marina Aguilar",
    desc1: "Ingeniera Química",
    desc2: "Responsable Técnica en Sistemas de Gestión ISO.",
    image: "/marina-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/marina-aguilar-68b84216/",
  },
  {
    name: "Rodolfo Molter",
    desc1: "Ingeniero Industrial",
    desc2: "Operaciones y Ley de Economía del Conocimiento.",
    image: "/rudolf-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/rodolfomolter/",
  },
];

export const CLIENT_SECTORS = {
  tecnologico: [
    "Cognisys SRL",
    "Foca Software Factory SA",
    "Gadik SRL",
    "Grupo MAS SRL",
    "Magnético SA",
    "Pagospyme",
    "Perfit",
    "Seincomp Informática SRL",
    "Sigma IT Solutions SRL",
    "Smartway SRL",
  ],
  industrial: [
    "Research AG",
    "Ambiental Pehuen",
    "Reopen SA",
    "Fragon, Cabinas de Pintura",
    "Prosabores SRL",
    "Foil CELTA",
    "CARJOR Obras Civiles y Viales",
    "POLIGSA División Envases Arg.",
    "Romalus RERAR",
    "ERBUS S.A.",
  ],
  servicios: [
    "Toribio Achával",
    "Naturgy",
    "South Post",
    "FIBROMARKET Optical Technology",
    "ANEKO SA",
    "Biocells SA",
    "ASV Fire",
    "Vortex Design Solutions",
    "Siproi",
    "Nimitek",
  ],
};

export const TECH_STACK = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "ISO 17025",
  "Ley 27.506",
  "Ley 25.922",
  "Mejora de Procesos",
  "Auditoría Interna",
];
