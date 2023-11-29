import { useState } from "react";
import {
  Brand,
  Color,
  PageDetail,
  Product,
  ProductFilter,
  ProductRemote,
} from "./types";
import axios from "axios";

/**
 *
 * WHY NO REDUX: the reason not using redux yet as this is such a small project and no cross module data happening yet.
 *
 */

const useAppStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageData, setPageData] = useState<PageDetail | undefined>(undefined);
  const [colors, setColors] = useState<Color[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filter, setFilter] = useState<ProductFilter>({ page: 1 });

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilter((prev) => ({ ...prev, page: value }));
  };

  const onClearFilter = () => {
    setFilter({ page: 1 });
  };

  const onUpdateBrandFilter = (key: number) => {
    setFilter((prev) => ({ ...prev, brand: key }));
  };
  const onUpdateColorFilter = (key: number) => {
    setFilter((prev) => ({ ...prev, color: key }));
  };
  const onUpdateNameFilter = (key: string) => {
    setFilter((prev) => ({ ...prev, name: key }));
  };

  const fetchProducts = async () => {
    try {
      let url = "http://localhost:3004/api/products";
      const { data } = await axios.get<ProductRemote>(url, {
        params: {
          ...filter,
        },
      });
      const { data: product, ...rest } = data;
      setProducts(product);
      setPageData(rest);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchColors = async () => {
    try {
      let url = "http://localhost:3004/api/colors";
      const { data } = await axios.get<Color[]>(url);
      setColors(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBrands = async () => {
    try {
      let url = "http://localhost:3004/api/brands";
      const { data } = await axios.get<Brand[]>(url);
      setBrands(data);
    } catch (error) {
      console.log(error);
    }
  };

  const initFetch = () => {
    fetchProducts();
    fetchColors();
    fetchBrands();
  };

  return {
    products,
    colors,
    brands,
    filter,
    pageData,
    initFetch,
    handlePageChange,
    onClearFilter,
    fetchProducts,
    onUpdateNameFilter,
    onUpdateColorFilter,
    onUpdateBrandFilter,
  };
};

export default useAppStore;
