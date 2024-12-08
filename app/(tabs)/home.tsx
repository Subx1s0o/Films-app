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
          <View className="absolute w-6 h-[50px] rounded-br-3xl right-24 top-[400px] bg-cherry -z-10" />
          <View className="absolute w-60 h-6 rounded-tl-3xl right-28 top-[428.8px] bg-cherry -z-10" />
          <View className="absolute w-6 h-[60px]  left-32 top-[450px] bg-cherry -z-10" />

          <View className="absolute w-60 h-6  left-32 top-[770px] rounded-tr-3xl bg-cherry -z-10" />
          <View className="absolute w-6 h-[60px]  left-[300px] top-[790px] bg-cherry -z-10" />

          <View className="absolute w-6 h-[70px] rounded-bl-3xl  left-[120px] bottom-[300px] bg-cherry -z-10" />
          <View className="absolute w-48 h-6  left-[110px] rounded-bl-3xl bottom-[300px] rounded-tr-3xl bg-cherry -z-10" />

          <View className="absolute w-6 h-[68px] rounded-bl-3xl  right-[152.7px] bottom-[239px] bg-cherry -z-10" />
          <View className="absolute w-60 h-60 rounded-full top-1/2 -translate-y-1/2 left-0 bg-cherry -z-10" />
          <View className="absolute w-60 h-60 rounded-full bottom-0 right-0 bg-cherry -z-10" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
