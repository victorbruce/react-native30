import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState("React Native");
  const [age, setAge] = useState(20);

  const handleNameChange = val => {
    setName(val);
  };

  const handleAgeChange = val => {
    setAge(val);
  };

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <View>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.input}
          placeholder="eg. John Doe"
          onChangeText={handleNameChange}
        />
        <Text>Enter age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="eg. 12"
          onChangeText={handleAgeChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 10,
    padding: 8,
    width: 200
  }
});

export default App;
