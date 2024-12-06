import React from "react";

import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#14053b",
            borderTopWidth: 0,
          },
          tabBarLabelStyle: { fontSize: 12, fontFamily: "Poppins" },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={24}
                  color={focused ? "white" : "gray"}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name={focused ? "layers-search" : "layers-search-outline"}
                  size={24}
                  color={focused ? "white" : "gray"}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
