import axios from "axios";
import { TMDB_API_KEY, ACCESS_TOKEN } from "@env";

export default async function searchFilmByGenreId(genreId: number) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data.results;
}
