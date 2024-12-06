import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";

const HomeScreen = ({ onReset }) => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center flex h-full px-4">
          <Text>Home Page Content</Text>
          <Button title="reset" color="white" onPress={onReset} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
