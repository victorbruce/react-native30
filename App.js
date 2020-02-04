import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from './routes/HomeStack';
import store from "./store/store";

const App = () => {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
