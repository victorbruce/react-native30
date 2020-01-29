import React from "react";

import { Text, View, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Press me!"
          color="#841584"
          onPress={() => alert("You clicked on the button")}
        />
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
  buttonContainer: {
    marginVertical: 20
  }
});

export default App;
