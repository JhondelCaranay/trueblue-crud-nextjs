import fetcher from "@/lib/swr/fetcher";
import { ErrorMsg } from "@/types/ErrorMsg";
import { User } from "@/types/User";
import useSWR from "swr";

const useUser = (userId: number) => {
  const { data, error, isLoading, mutate } = useSWR<User, ErrorMsg>(`/users/${userId}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
