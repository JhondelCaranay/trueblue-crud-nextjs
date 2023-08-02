import fetcher from "@/lib/swr/fetcher";
import { ErrorMsg } from "@/types/ErrorMsg";
import { Products } from "@/types/Product";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR<Products, ErrorMsg>("/products", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useProducts;
