import searchFilmByQuery from "@/actions/searchFilmByQuery";
import { useQuery } from "@tanstack/react-query";

export function useSearchFilm<T>(query: string) {
  return useQuery<T>({
    queryKey: ["search-film", query],
    queryFn: () => searchFilmByQuery(query),
    enabled: query.length >= 3,
    staleTime: 60 * 5000,
  });
}
