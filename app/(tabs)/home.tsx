import FilmsList from "@/components/FilmsList";
import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4">
          <Text className="text-white font-poppins mt-10 mb-14 font-bold text-3xl">
            Welcome again !
          </Text>

          <View className="h-full">
            <FilmsList category="film" genreId={28} title="Action Films" />
            <FilmsList category="film" genreId={12} title="Adventure Films" />
            <FilmsList category="film" genreId={35} title="Comedy Films" />
            <FilmsList category="film" genreId={99} title="Documentary Films" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
