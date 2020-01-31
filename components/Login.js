import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import EmailAndPassword from "./EmailAndPassword";
import Logo from "./Logo";

const Login = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.form}>
          <EmailAndPassword />
        </View>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
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

export default Login;
