import FlexboxScreen from "./FlexboxScreen";
import FetchScreen from "./FetchScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flexbox">
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen name="Fetch" component={FetchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
