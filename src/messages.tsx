import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Messages(): React.ReactElement {
  const [messages, setMessages] = React.useState<any[]>([]);

  return (
    <View style={styles.container}>
      {messages.map(({ id, text }) => (
        <Text style={styles.message} key={id}>
          {text}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  message: {
    fontSize: 15,
    paddingVertical: 3,
  },
});
