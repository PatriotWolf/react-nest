import { useState } from "react";
import { Brand, Color, Product } from "./types";

const useAppStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const initFetch = () => {
    fetch("http://localhost:3004/api/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
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
  return { products, colors, brands, initFetch };
};

export default useAppStore;
