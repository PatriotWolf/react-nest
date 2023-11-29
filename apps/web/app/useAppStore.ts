import { useState } from "react";
import { Product } from "./types";

const useAppStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
  };
  return { products, initFetch };
};

export default useAppStore;
