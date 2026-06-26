import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export const BUSINESS = {
  name: "CK Financial",
  owner: "Courtney Kegresse",
  phone: "(413) 603-8341",
  email: "ckfinancialconsult@gmail.com",
  calendarLink: "https://calendly.com/ckfinancialconsult",
  states: [
    "California", "Florida", "Georgia", "Kentucky",
    "Massachusetts", "Michigan", "New York", "Ohio",
    "South Carolina", "Texas", "Virginia", "Washington",
  ],
  stateCount: 12,
};

export const SERVICES = [
  {
    id: "final-expense",
    title: "Final Expense Insurance",
    shortTitle: "Final Expense",
    slug: "/services/final-expense",
    icon: "Heart",
    description: "Ensure your loved ones aren't burdened with funeral costs or outstanding debts.",
    color: "from-rose-50 to-pink-50",
    accentColor: "text-rose-600",
  },
  {
    id: "mortgage-protection",
    title: "Mortgage Protection Insurance",
    shortTitle: "Mortgage Protection",
    slug: "/services/mortgage-protection",
    icon: "Home",
    description: "Keep your family in their home if something unexpected happens to you.",
    color: "from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
  },
  {
    id: "term-life",
    title: "Term Life Insurance",
    shortTitle: "Term Life",
    slug: "/services/term-life",
    icon: "Shield",
    description: "Affordable coverage for the years when your family needs protection most.",
    color: "from-emerald-50 to-teal-50",
    accentColor: "text-emerald-600",
  },
  {
    id: "whole-life",
    title: "Whole Life Insurance",
    shortTitle: "Whole Life",
    slug: "/services/whole-life",
    icon: "Star",
    description: "Lifelong protection with cash value that grows tax-deferred over time.",
    color: "from-amber-50 to-yellow-50",
    accentColor: "text-amber-600",
  },
  {
    id: "universal-life",
    title: "Universal Life Insurance",
    shortTitle: "Universal Life",
    slug: "/services/universal-life",
    icon: "Infinity",
    description: "Flexible coverage that adapts to your changing financial needs.",
    color: "from-purple-50 to-violet-50",
    accentColor: "text-purple-600",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({ label: s.shortTitle, href: s.slug })),
  },
  { label: "About", href: "/about" },
  { label: "Learning Center", href: "/learning-center" },
  { label: "Tools", href: "/tools" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
