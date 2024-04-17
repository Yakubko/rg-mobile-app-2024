import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Form(): React.ReactElement {
  const [message, setMessage] = React.useState("");

  const onSubmit = async () => {
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={onSubmit}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 25,
    backgroundColor: "gray",

    paddingTop: 10,
    paddingBottom: 30,
  },

  textInput: {
    padding: 5,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "blue",
    backgroundColor: "white",
  },

  submitButton: {
    marginLeft: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "blue",
  },

  submitButtonText: {
    fontSize: 25,
    color: "white",
  },
});
