import FilmsList from "@/components/FilmsList";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="w-full px-4 ">
          <Text className="text-white font-poppins mt-10 mb-14 font-bold text-3xl">
            Welcome To Our App!
          </Text>

          <View className="flex">
            <FilmsList genreId={28} title="Action Films" />
            <FilmsList genreId={12} title="Adventure Films" />
            <FilmsList genreId={35} title="Comedy Films" />
            <FilmsList genreId={99} title="Documentary Films" />
          </View>

          <View className="absolute w-60 h-60 rounded-full right-0 bg-cherry -z-10" />

          <View className="absolute w-60 h-60 rounded-full top-1/3 -translate-y-1/2 left-0 bg-cherry -z-10" />

          <View className="absolute w-60 h-60 rounded-full bottom-1/3 right-0 bg-cherry -z-10" />
          <View className="absolute w-60 h-60 rounded-full bottom-48 left-0 bg-cherry -z-10" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
