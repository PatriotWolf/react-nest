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
  page: number;
  name?: string;
  brand?: number;
  color?: number;
}

export interface PageDetail {
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
}

export interface ProductRemote extends PageDetail {
  data: Product[];
}
