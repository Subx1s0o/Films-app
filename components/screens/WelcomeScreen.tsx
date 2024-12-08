import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ImageBackground
        source={require("@/assets/avengers.avif")}
        className="absolute top-0 left-0 right-0 bottom-0"
        imageStyle={{ resizeMode: "cover" }}
      >
        <View className="flex items-center h-full justify-between  px-6">
          <View>
            <Text className="font-bold font-poppins mb-4 mt-52 text-white text-3xl text-center">
              Welcome to the Film App!
            </Text>
            <Text className="mb-4 font-poppins leading-7 text-white text-center">
              We're glad you're here. Let's get started and find some
              <Text className="font-bold"> interesting films!</Text>
            </Text>
          </View>
          <Pressable
            className="bg-cherry w-full py-8 rounded-2xl mb-10 "
            onPress={onFinish}
          >
            <Text className="text-white text-center font-semibold text-2xl ">
              Get Started
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
