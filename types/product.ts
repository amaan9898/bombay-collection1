export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  mrp: number;
  sizes: string[];
  colors: string[];
  images: string[];
  isNewArrival: boolean;
  isBestSeller: boolean;
  description: string;
  fabric: string;
  care: string;
  sku: string;
  tags?: string[];
}

export type Category =
  | "Kurtis"
  | "Dresses"
  | "Tops"
  | "Co-ords"
  | "Dupattas"
  | "Sarees"
  | "Kids";

export const CATEGORIES: Category[] = [
  "Kurtis",
  "Dresses",
  "Tops",
  "Co-ords",
  "Dupattas",
  "Sarees",
  "Kids",
];

export const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];
