import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Tabs from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaProvider>
      <Tabs />
    </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});


export default App