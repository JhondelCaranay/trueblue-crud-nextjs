import fetcher from "@/lib/swr/fetcher";
import { ErrorMsg } from "@/types/ErrorMsg";
import { Product } from "@/types/Product";
import useSWR from "swr";

const useProduct = (productId: number) => {
  const { data, error, isLoading, mutate } = useSWR<Product, ErrorMsg>(
    `/products/${productId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useProduct;
