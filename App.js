import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./routes/HomeStack";
import { Provider } from "react-redux";
import store from "./store/index";
import Login from "./components/Login";
import Hello from './components/hello'

const App = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" }
// });

export default App;
