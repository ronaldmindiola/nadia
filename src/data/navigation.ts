// navigation.ts
import type { NavSection } from "@/types/nav";

export const navLinks: NavSection = [
  {
    id: "home",
    label: { es: "Inicio", en: "Home" },
    href: "/es",
    icon: "home",
    order: 1,
    ariaLabel: "Ir a la página de inicio",
  },
  {
    id: "menu",
    label: { es: "Menú", en: "Menu" },
    href: "/es/menu",
    icon: "utensils",
    order: 2,
    ariaLabel: "Ver el menú del restaurante",
    children: [
      {
        id: "starters",
        label: { es: "Entrantes", en: "Starters" },
        href: "/es/menu/entrantes",
        icon: "sandwich",
      },
      {
        id: "mains",
        label: { es: "Platos principales", en: "Main courses" },
        href: "/es/menu/principales",
        icon: "beef",
      },
      {
        id: "desserts",
        label: { es: "Postres", en: "Desserts" },
        href: "/es/menu/postres",
        icon: "cake",
      },
    ],
  },
  {
    id: "reservations",
    label: { es: "Reservas", en: "Reservations" },
    href: "/es/reservas",
    icon: "calendar-days",
    order: 3,
    ariaLabel: "Realizar una reserva",
  },
  {
    id: "about",
    label: { es: "Acerca de nosotros", en: "About us" },
    href: "/es/nosotros",
    icon: "info",
    order: 4,
    ariaLabel: "Conocer más sobre el restaurante",
  },
  {
    id: "contact",
    label: { es: "Contacto", en: "Contact", fr: "Contactez-nous" },
    href: "/es/contacto",
    icon: "mail",
    order: 5,
    ariaLabel: "Ponerse en contacto",
  },
];

export const footerNav: NavSection = [
  {
    id: "privacy",
    label: { es: "Política de privacidad", en: "Privacy policy" },
    href: "/es/politica-privacidad",
    icon: "shield-check",
    ariaLabel: "Leer la política de privacidad",
  },
  {
    id: "terms",
    label: { es: "Términos de servicio", en: "Terms of service" },
    href: "/es/terminos-servicio",
    icon: "file-text",
    ariaLabel: "Leer los términos de servicio",
  },
  {
    id: "cookies",
    label: { es: "Aviso de cookies", en: "Cookie notice" },
    href: "/es/cookies",
    icon: "cookie",
    ariaLabel: "Leer el aviso de cookies",
  },
  {
    id: "map",
    label: { es: "Cómo llegar", en: "How to get here" },
    href: "/es/como-llegar",
    icon: "map-pin",
  },
  {
    id: "instagram",
    label: { es: "Instagram", en: "Instagram" },
    href: "https://instagram.com/restaurante",
    icon: "instagram",
    external: true,
  },
];
