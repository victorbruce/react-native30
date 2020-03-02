import React, { Component } from "react";
import { StyleSheet, View, TextInput, Modal, Button } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

import firebase from "../config/firebase";

class IncomeModal extends Component {
  state = {
    description: "",
    addedAmount: 0,
    incomeModalOpen: false
  };

  addAmount = (amount, description) => {
    const { uid } = firebase.auth().currentUser;
    const amountInFigures = parseInt(amount);
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .collection("transactions")
      .add({
        description: description,
        amount: amountInFigures,
        createdAt: new Date()
      })
      .then(() => {
        console.log("Transaction Added succussfully");
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get()
          .then(doc => {
            if (doc.exits) {
              console.log("my document", doc.data());
            }
          });
        this.setState({ incomeModalOpen: false });
      })
      .catch(err => {
        console.log("Error whilst adding transaction: ", err);
      });
  };

  render() {
    const { addedAmount, description } = this.state;
    return (
      <View>
        <Feather
          name="plus-circle"
          size={34}
          style={{ marginRight: 10 }}
          onPress={() => this.setState({ incomeModalOpen: true })}
        />
        <Modal visible={this.state.incomeModalOpen} animated="slide">
          <View style={styles.addModal}>
            <MaterialIcons
              name="close"
              size={34}
              onPress={() =>
                this.setState({
                  incomeModalOpen: false
                })
              }
            />
            <View style={styles.addModalContent}>
              <TextInput
                placeholder="Description"
                placeholderTextColor="#000"
                style={styles.modalInput}
                onChangeText={description => this.setState({ description })}
              />
              <TextInput
                placeholder="Enter amount to add"
                placeholderTextColor="#000"
                style={styles.modalInput}
                onChangeText={addedAmount => this.setState({ addedAmount })}
              />
              <Button
                title="Add"
                color="black"
                onPress={() => this.addAmount(addedAmount, description)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4"
  },
  addModalContent: {
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
  }
});

export default IncomeModal;
