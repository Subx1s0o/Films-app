import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import searchFilmByGenreId from "@/actions/searchFilmByGenre";
import FilmCard from "./ui/FilmCard";
import Carousel from "pinar";

const FilmList = ({
  category,
  title,
  genreId,
}: {
  category: "serial" | "film";
  title: string;
  genreId: number;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [category, title],
    queryFn: () => searchFilmByGenreId(genreId),
  });

  if (error) {
    throw error;
  }

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <Text className="text-white mb-10 font-poppins font-semibold text-2xl">
        {title}
      </Text>
      <View className="flex w-full h-[300px]">
        <Carousel
          horizontal
          showsDots={false}
          mergeStyles
          showsControls={false}
        >
          {data.map((film) => (
            <FilmCard data={film} key={film.id} />
          ))}
        </Carousel>
      </View>
    </View>
  );
};

export default FilmList;
