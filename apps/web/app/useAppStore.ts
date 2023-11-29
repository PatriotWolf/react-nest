import { useState } from "react";
import { Brand, Color, Product, ProductFilter } from "./types";
import axios from "axios";

const useAppStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filter, setFilter] = useState<ProductFilter>({});
  const fetchProducts = async () => {
    try {
      let url = "http://localhost:3004/api/products";
      const { data } = await axios.get<Product[]>(url, {
        params: {
          ...filter,
        },
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
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
  const initFetch = () => {
    fetchProducts();
    fetch("http://localhost:3004/api/colors", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3004/api/brands", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return {
    products,
    colors,
    brands,
    filter,
    initFetch,
    fetchProducts,
    onUpdateNameFilter,
    onUpdateColorFilter,
    onUpdateBrandFilter,
  };
};

export default useAppStore;
