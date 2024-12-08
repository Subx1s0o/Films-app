import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const FilmCard = ({ data }: { data: Film }) => {
  return (
    <View className="bg-violet w-full rounded-xl p-5 flex flex-row gap-5">
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        className="w-[150px] h-[200px] rounded-xl"
      />
      <View className="flex flex-1 ">
        <Text
          className="text-white text-wrap mb-5 font-medium font-poppins text-ellipsis overflow-hidden whitespace-normal"
          numberOfLines={2}
        >
          {data.original_title}
        </Text>

        <View className="flex flex-row justify-between mb-5">
          <Text className="text-white font-poppins text-sm font-bold border p-2 rounded-lg border-white ">
            {String(data.vote_average).slice(0, 3)} rate
          </Text>
          <Text className="text-white font-poppins text-sm font-bold border p-2 rounded-lg border-white ">
            year {data.release_date.slice(0, 4)}
          </Text>
        </View>
        <Text
          className="text-white font-poppins font-normal text-sm max-w-[200px] text-ellipsis overflow-hidden"
          numberOfLines={5}
        >
          {data.overview}
        </Text>
      </View>
    </View>
  );
};

export default FilmCard;
