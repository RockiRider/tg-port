import { GenericApiResponse } from "@/types/api";
import { ProjectContentDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";


export const useGetProjects = () => {
    const { data, isLoading, error } = useSWR<GenericApiResponse<ProjectContentDisplay[]>>(
        "/api/public/v1/projects",
        (key: string) => fetcher(key)
      );
    
      return {
        allProjects: data?.data || [],
        isLoading,
        error,
      };
}
