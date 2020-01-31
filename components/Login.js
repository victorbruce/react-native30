import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import EmailAndPassword from "./EmailAndPassword";
import Logo from "./Logo";

const Login = () => {
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Login;
