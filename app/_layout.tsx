import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./Tabs/MyTabs";
import Payment from "./Payment";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={MyTabs}
        options={{ headerShown: false, statusBarHidden: true }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

    // tare aakha app ma jetli b screens hoy e badhi stack ma hovi joiye inshort
    // tab vadhi badhi screen ama nai muki km k te my tab ni andar badhi mukeli che
    // okay ?
    // bol
    // nested karvu hoi to? matlab tabs pan ahiya ane screens ni pan ahiya ave?
  );
  // haju sarkhi rite code jovo padse
  // entry point ?
}
