export interface Color {
  id: number;
  name: string;
  code: string;
}

export interface Brand {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: Color[];
  brand: Brand;
}

export interface ProductFilter {
  name?: string;
  brand?: number;
  color?: number;
}
