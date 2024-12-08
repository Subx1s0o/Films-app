import React, { useState } from "react";
import { View, TextInput, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSearchFilm } from "@/hooks/useSearchFilm";
import { useDebounce } from "@/hooks/useDebounce";
import FilmCard from "@/components/FilmCard";
import { Link } from "expo-router";

const Search = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const {
    data: films,
    isLoading,
    error,
  } = useSearchFilm<Film[]>(debouncedValue);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="bg-primary h-full px-4 pt-10">
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Search..."
            selectionColor="white"
            placeholderTextColor="#9E9E9E"
            className="text-white font-poppins text-xl px-10 border border-cherry rounded-3xl h-20"
          />
          <View className="mt-4 flex gap-5">
            {isLoading && (
              <Text className="text-white text-center font-poppins font-medium">
                Loading...
              </Text>
            )}
            {error && (
              <Text className="text-red-500">Error: {String(error)}</Text>
            )}
            {films?.length
              ? films.map((film) => (
                  <Link
                    key={film.id}
                    href={`/film/${film.id}`}
                    className="flex-1 justify-center items-center"
                  >
                    <FilmCard data={film} />
                  </Link>
                ))
              : !isLoading && (
                  <Text className="text-white mt-4 text-center font-poppins font-medium">
                    No results found
                  </Text>
                )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
