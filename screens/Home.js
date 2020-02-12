import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Modal
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import * as firebase from "firebase";

export default class Home extends Component {
  state = {
    email: "",
    displayName: "",
    setAddModalVisible: false
  };
  conmponentDidMount = () => {
    const { email, displayName } = firebase.auth().currentUser;
    console.log("email", email);
    this.setState({ email, displayName });
  };

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Amount Saved</Text>
        </View>

        <View style={styles.amountWrapper}>
          <Text style={styles.amountSaved}>GHc 300</Text>
        </View>

        <View style={styles.icons}>
          <Feather name="minus-circle" size={34} style={{ marginRight: 70 }} />

          <Modal visible={this.state.setAddModalVisible}>
            <View>
              <MaterialIcons
                name="close"
                size={54}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() =>
                  this.setState({
                    setModalVisible: !this.state.setAddModalVisible
                  })
                }
              />
              <Text style={styles.modalText}>Hello Modal!</Text>
            </View>
          </Modal>

          <Ionicons
            name="md-add-circle-outline"
            size={34}
            onPress={() =>
              this.setState({
                setModalVisible: !this.state.setModalVisible
              })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
  amountWrapper: {
    backgroundColor: "#000",
    width: 120,
    height: 120,
    marginTop: 50,
    borderRadius: 120 / 2
  },
  amountSaved: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 45,
    fontWeight: "bold",
    fontSize: 24
  },
  icons: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "flex-end"
  }
});
