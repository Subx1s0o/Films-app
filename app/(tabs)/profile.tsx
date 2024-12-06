import { View, Text } from "react-native";

import { Link } from "expo-router";
const profile = () => {
  return (
    <View className="flex items-center h-full justify-center">
      <Text className="mb-5">profile</Text>

      <Link href="/" className="px-10 py-5 bg-blue-700 rounded-xl text-white">
        Home
      </Link>
    </View>
  );
};

export default profile;
