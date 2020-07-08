import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from './Login';
import FriendsList from './FriendsList'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {purple, white} from "../utils/colors";
const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: true
          }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Friends" component={FriendsList} />
      </Stack.Navigator>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar
            backgroundColor={Platform.OS === "ios" ? white : purple}
        />
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  }
});
