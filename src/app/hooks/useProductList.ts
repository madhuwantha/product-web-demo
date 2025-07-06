import { IProduct } from "@/types/Product";
import { useEffect, useState } from "react";
import { API_URL } from "../const/variables";


export function useProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(()=>{
    fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.data??[]);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  },[])


  return { products, loading, error };
}