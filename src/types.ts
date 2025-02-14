export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: Color[];
  sizes: Size[];
  reviews: Review[];
}

export interface Color {
  name: string;
  value: string;
  images: string[];
}

export interface Size {
  name: string;
  available: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}