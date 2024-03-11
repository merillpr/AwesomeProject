import FlexboxScreen from "./FlexboxScreen";
import FetchScreen from "./FetchScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Flexbox"
        screenOptions={{
          headerStyle: { backgroundColor: "#ffa500" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "300",
          },
        }}
      >
        <Stack.Screen
          name="Flexbox"
          component={FlexboxScreen}
          options={{
            title: "Flexbox Option", // terganti
            headerTitle: () => {
              return <FlexboxLogoTitle />;
            },
          }}
        />
        <Stack.Screen
          name="Fetch"
          component={FetchScreen}
          options={{
            title: "Fetch Data",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const FlexboxLogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={{
        uri: "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
      }}
    />
  );
};
