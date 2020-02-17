import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
    addModalOpen: false,
    deductModalOpen: false
  };
  conmponentDidMount = () => {
    const { email, displayName } = firebase.auth().currentUser;
    console.log("email", email);
    console.log("hi")
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
          <Feather
            name="minus-circle"
            size={34}
            style={{ marginRight: 70 }}
            onPress={() => this.setState({ deductModalOpen: true })}
          />

          <Modal visible={this.state.deductModalOpen} animated="slide">
            <View style={styles.deductModal}>
              <MaterialIcons
                name="close"
                size={32}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() =>
                  this.setState({
                    deductModalOpen: false
                  })
                }
              />
              <View style={styles.deductModalContent}>
                <TextInput
                  placeholder="Enter amount to deduct"
                  placeholderTextColor="#000"
                  style={styles.modalInput}
                />
                <Button title="Deduct" color="black" />
              </View>
            </View>
          </Modal>

          <Modal visible={this.state.addModalOpen} animated="slide">
            <View style={styles.deductModal}>
              <MaterialIcons
                name="close"
                size={34}
                onPress={() =>
                  this.setState({
                    addModalOpen: false
                  })
                }
              />
              <View style={styles.deductModalContent}>
                <TextInput
                  placeholder="Enter amount to add"
                  placeholderTextColor="#000"
                  style={styles.modalInput}
                />
                <Button title="Add" color="black" />
              </View>
            </View>
          </Modal>

          <Ionicons
            name="md-add-circle-outline"
            size={34}
            onPress={() =>
              this.setState({
                addModalOpen: true
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
  },
  deductModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4"
  },
  deductModalContent: {
    borderWidth: 1,
    borderColor: "#000",
    width: 300,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  modalInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#000",
    color: "#000"
  },
  modalButton: {
    backgroundColor: "#000"
  }
});
