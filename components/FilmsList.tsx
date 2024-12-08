import React from "react";
import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { useQuery } from "@tanstack/react-query";
import searchFilmByGenreId from "@/actions/searchFilmByGenre";
import FilmCard from "./FilmCard";
import { Link } from "expo-router";

const FilmList = ({ title, genreId }: { title: string; genreId: number }) => {
  const { data, isLoading, error } = useQuery<Film[]>({
    queryKey: ["films", genreId],
    queryFn: () => searchFilmByGenreId(genreId),
  });

  if (error) {
    return (
      <Text className="text-red-500 text-center mt-10">
        Error loading films
      </Text>
    );
  }

  if (isLoading || !data) {
    return <Text className="text-white text-center mt-10">Loading...</Text>;
  }

  return (
    <View className="mb-10">
      <Text className="text-white text-xl font-bold mb-10 ">{title}</Text>
      <PagerView style={{ flex: 1, height: 235 }} initialPage={0}>
        {data.map((film, index) => (
          <Link
            key={index + 1}
            href={`/film/${film.id}`}
            className="flex-1 justify-center items-center"
          >
            <FilmCard data={film} />
          </Link>
        ))}
      </PagerView>
    </View>
  );
};

export default FilmList;
