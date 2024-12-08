import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View className="bg-primary h-full px-4 pt-10">
        <TextInput
          placeholder="Search..."
          className="text-white placeholder:text-slate-400 font-poppins text-xl px-10 border border-cherry rounded-3xl h-20"
        />
      </View>
    </SafeAreaView>
  );
};

export default search;
