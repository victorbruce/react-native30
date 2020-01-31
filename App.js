import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./routes/HomeStack";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export default App;
