// Servicio dentro de un ItemList
interface Service {
  "@type": "Store";
  "additionalType": "https://schema.org/HealthAndBeautyBusiness";
  name: string;
  description?: string;
  position: number;
}

// ItemList
export interface ItemListJsonLd {
  "@context": "https://schema.org";
  "@type": "ItemList";
  description?: string;
  itemListElement: Service[];
}

// Store individual
export interface StoreServiceJsonLd {
  "@context": "https://schema.org";
  "@type": "Store";
  "additionalType": "https://schema.org/HealthAndBeautyBusiness";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: Record<string, any>;
  openingHours?: string;
  geo?: Record<string, any>;
  hasMap?: string;
  contactPoint?: Record<string, any>[];
  areaServed?: Record<string, any>[]; // array de países/lugares
  sameAs?: string[];
}

// Nuevo: Product para páginas individuales
export interface ProductJsonLd {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  image: string | string[];
  description?: string;
  sku?: string;
  brand?: {
    "@type": "Brand";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    url: string;
    price?: string | number;
    priceCurrency?: string;
    availability?: string;
    itemCondition?: string;
  }[];
}

// Nuevo: JSON-LD con @graph (para combinar Store + ItemList + otros)
export interface GraphJsonLd {
  "@context": "https://schema.org";
  "@graph": (
    | StoreServiceJsonLd
    | ItemListJsonLd
    | ProductJsonLd
    | Record<string, any>
  )[];
}

// Tipo principal para Layout
export type TJsonLd =
  | ItemListJsonLd
  | StoreServiceJsonLd
  | ProductJsonLd
  | GraphJsonLd
  | null;
