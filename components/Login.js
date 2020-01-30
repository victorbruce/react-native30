import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EmailAndPassword from "./EmailAndPassword";

const Login = () => {
  return (
    <View style={styles.container}>
      <EmailAndPassword />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Login;
