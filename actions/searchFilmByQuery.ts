import axios from "axios";
import { TMDB_API_KEY, ACCESS_TOKEN } from "@env";

export default async function searchFilmByQuery(query: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data.results;
}
