import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Another = () => {
  return (
    <View style={styles.container}>
      <Text>Another screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Another;
