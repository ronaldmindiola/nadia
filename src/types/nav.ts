// nav.ts
export interface NavItem {
  id: string; // clave única, sigue siendo necesaria para keys
  label: {
    es: string;
    en?: string;
    [key: string]: string | undefined;
  }; // { es: 'Inicio', en: 'Home' }
  href: string;
  icon: string; // nombre del icono Lucide sin el prefijo "lucide:"
  ariaLabel?: string; // opcional, para a11y
  order?: number;
  children?: NavItem[]; // sub-navegación
  external?: boolean; // abre en nueva pestaña
}

export type NavSection = NavItem[];
