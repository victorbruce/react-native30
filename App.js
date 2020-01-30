import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Login from "./components/Login";
import Logo from "./components/Logo";

const App = () => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Login style={styles.login} />
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
    justifyContent: "center",
    alignItems: "center"
  },
  login: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
