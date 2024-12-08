import searchFilmById from "@/actions/searchFilmById";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";

const SearchQueryPage = () => {
  const { query } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery<Film>({
    queryKey: ["films", query],
    queryFn: () => searchFilmById(+query),
  });

  if (isLoading) return <Text>loading...</Text>;
  if (error) {
    throw error;
  }

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="relative">
          <ImageBackground
            className="w-full h-[400px]"
            source={{
              uri: `https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`,
            }}
          />
          <View className="absolute inset-0 bg-black opacity-[25%]" />
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            }}
            className="w-[200px] z-10 h-[300px] left-4 rounded-xl absolute -bottom-[150px]"
          />
        </View>
        <View className="px-4 pt-48">
          <View className="absolute left-[230px] top-4">
            <Text
              className="text-white font-semibold mb-5 font-poppins text-lg text-ellipsis overflow-hidden whitespace-normal max-w-[200px]"
              numberOfLines={1}
            >
              {data?.title}
            </Text>
            <View className="flex flex-row w-[185px] justify-between mb-5">
              <Text className="text-white font-poppins text-sm font-bold border p-2 rounded-lg border-white ">
                {String(data?.vote_average).slice(0, 3)} rate
              </Text>
              <Text className="text-white font-poppins text-sm font-bold border p-2 rounded-lg border-white ">
                year {data?.release_date.slice(0, 4)}
              </Text>
            </View>
            <Text className="text-white text-center py-[9px] bg-cherry rounded-2xl font-semibold text-xl">
              {data?.popularity.toFixed()} - TMDB
            </Text>
          </View>
          <Text className="text-white font-poppins mb-5">{data?.overview}</Text>
        </View>
      </ScrollView>

      <View className="px-4 flex flex-row justify-center">
        <Pressable
          className="bg-cherry p-6 absolute bottom-10 w-full rounded-2xl"
          onPress={() => router.back()}
        >
          <Text className="font-poppins font-semibold text-white text-center text-xl">
            Go Back
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchQueryPage;
