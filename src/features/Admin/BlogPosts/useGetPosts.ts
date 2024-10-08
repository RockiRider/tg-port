import { GenericApiResponse } from "@/types/api";
import { ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

const useGetPosts = () => {
  const { data, isLoading, error } = useSWR<
    GenericApiResponse<ProjectDisplay[]>
  >("/api/admin/v1/blog", (key: string) => fetcher(key));

  return {
    allProjects: data?.data || [],
    isLoading,
    error,
  };
};

export default useGetPosts;
