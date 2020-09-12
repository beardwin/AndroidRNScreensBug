import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";

enableScreens();

type NavigatorParams = {
  Home: undefined;
  PooFarts: undefined;
};

const HomeScreen = ({
  navigation,
}: StackScreenProps<NavigatorParams, "Home">) => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => {
        navigation.navigate("PooFarts");
      }}
      title="Pop a poo fart"
    />
  </View>
);

const PooFartsScreen = ({
  navigation,
}: StackScreenProps<NavigatorParams, "PooFarts">) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Fiddlesticks",
      // uncomment below, and the title will no longer appear
      // headerLeft: () => <Button title="Adios!" onPress={navigation.goBack} />,
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>Poo Farts</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator<NavigatorParams>();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="PooFarts"
      component={PooFartsScreen}
      options={{ stackPresentation: "modal" }}
    />
  </Stack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
