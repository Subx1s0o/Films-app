import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex  items-center justify-center h-full ">
      <Text className="mb-5 font-poppins font-pBold ">index</Text>
      <Link
        href="/profile"
        className="px-10 py-5 font-poppins bg-blue-700 rounded-xl text-white"
      >
        Link to profile
      </Link>
    </View>
  );
};

export default index;
