import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import * as firebase from "firebase";

export default class Home extends Component {
  state = {
    email: "",
    displayName: ""
  };
  conmponentDidMount = () => {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  };

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.email ? (
          <Text>Hi {this.state.email}</Text>
        ) : (
          <Text>Hi {this.state.email}</Text>
        )}

        <View style={{ marginTop: 32 }}>
          <Button
            onPress={() => this.props.navigation.navigate("AnotherScreen")}
            title="Another Screen"
          />
        </View>

        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text style={{ color: "red", fontWeight: "500" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
