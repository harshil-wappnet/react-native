import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootLayout from "./_layout";

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <RootLayout />
    </NavigationContainer>
    //run kar clean kari ne
    // aa
  );
}
