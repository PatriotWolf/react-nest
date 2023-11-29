import { Product } from './product.entity';

export interface ProductQuery {
  name: string;
  brand: number;
  color: number;
  page: number;
}

export interface ProductPaginate {
  data: Product[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
}
