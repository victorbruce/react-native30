import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

const EmailAndPassword = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#242424"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#242424"
      />
      <TouchableOpacity>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>Don't have an Acccount? signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  textInput: {
    width: 300,
    height: 50,
    paddingLeft: 10,
    marginBottom: 30,
    color: "#222",
    borderWidth: 1
  },
  buttonText: {
    textAlign: "center",
    backgroundColor: "#242424",
    color: "#fff",
    paddingVertical: 15,
    marginBottom: 30
  },
  signupText: {
    textAlign: "center"
  }
});

export default EmailAndPassword;
