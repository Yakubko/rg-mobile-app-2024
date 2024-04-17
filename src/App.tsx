import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Form } from "./form";
import { Messages } from "./messages";

export default function App() {
  return (
    <View style={styles.container}>
      <Messages />

      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
