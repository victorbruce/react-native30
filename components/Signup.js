import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "./Logo";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#242424"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#242424"
          />
          <TouchableOpacity>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.signup}>
        <Text style={styles.signupText}>Don't have an Acccount?</Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.push("Signup")}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  keyboard: {
    flex: 1
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
    width: 300,
    marginBottom: 30
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  },
  signupText: {
    textAlign: "center",
    marginRight: 5
  },
  signupButton: {
    color: "#777",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16
  }
});

export default Signup;
