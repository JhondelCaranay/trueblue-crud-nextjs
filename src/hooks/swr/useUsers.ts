import fetcher from "@/lib/swr/fetcher";
import { ErrorMsg } from "@/types/ErrorMsg";
import { Users } from "@/types/User";
import useSWR from "swr";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR<Users, ErrorMsg>("/users", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
