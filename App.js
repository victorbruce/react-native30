import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./routes/HomeStack";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (

      <AppNavigator />
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" }
// });

export default App;
