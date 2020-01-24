import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 5,
      name: "React Native"
    };
  }

  increaseAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
  render() {
    const { name, age } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello {name}!</Text>
        <Text>Age: {age}</Text>
        <Button onPress={this.increaseAge} title="Increase Age" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
