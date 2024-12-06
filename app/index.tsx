import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import WelcomeScreen from "@/components/screens/WelcomeScreen";
import { Redirect } from "expo-router";

const Index = () => {
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

  useEffect(() => {
    const checkWelcomeStatus = async () => {
      const welcomeStatus = await AsyncStorage.getItem("hasSeenWelcome");
      if (welcomeStatus === "true") {
        setHasSeenWelcome(true);
      } else {
        setHasSeenWelcome(false);
      }
    };

    checkWelcomeStatus();
  }, []);

  const handleFinishWelcome = async () => {
    await AsyncStorage.setItem("hasSeenWelcome", "true");
    setHasSeenWelcome(true);
  };

  return hasSeenWelcome ? (
    <Redirect href="(tabs)/home" />
  ) : (
    <WelcomeScreen onFinish={handleFinishWelcome} />
  );
};

export default Index;
