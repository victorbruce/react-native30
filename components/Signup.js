import React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "./Logo";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.signupForm}>
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
        <TextInput
          style={styles.textInput}
          placeholder="Cofirm Password"
          secureTextEntry={true}
          placeholderTextColor="#242424"
        />
        <TouchableOpacity>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
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
  logo: {
    flex: 1,
    justifyContent: "center"
  },
  signupForm: {
    flex: 2,
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
  login: {
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
