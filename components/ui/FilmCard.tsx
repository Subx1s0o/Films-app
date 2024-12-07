import { View, Text } from "react-native";
import React from "react";

const FilmCard = ({ data }) => {
  return (
    <View className="bg-violet p-5 flex flex-row">
      <Text className="text-white">{data.original_title}</Text>
    </View>
  );
};

export default FilmCard;
