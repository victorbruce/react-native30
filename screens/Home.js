import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text>Logout</Text>
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
