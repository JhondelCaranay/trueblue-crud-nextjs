import fetcher from "@/lib/swr/fetcher";
import { ErrorMsg } from "@/types/ErrorMsg";
import { Users } from "@/types/User";
import useSWR from "swr";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR<Users, ErrorMsg>(`/users/${userId}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
