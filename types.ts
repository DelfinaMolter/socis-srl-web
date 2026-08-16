export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isoStandards?: {
    code: string;
    title: string;
    description: string;
    badgeColor: string;
  }[];
  note?: string;
  tag?: string;
}
