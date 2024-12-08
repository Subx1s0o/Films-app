import axios from "axios";
import { TMDB_API_KEY, ACCESS_TOKEN } from "@env";

export default async function searchFilmById(movieId: number) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data;
}
