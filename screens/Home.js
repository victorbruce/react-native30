import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import firebase from "../config/firebase";

export default class Home extends Component {
  state = {
    email: "",
    displayName: "",
    totalBalance: 0,
    deductedAmount: 0,
    addedAmount: 0,
    description: "",
    addModalOpen: false,
    deductModalOpen: false
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
        this.setState({ addModalOpen: false });
      })
      .catch(err => {
        console.log("Error whilst adding transaction: ", err);
      });
  };

  deductAmount = (amount,description) => {
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
        console.log("Transaction Deducted succussfully");
        this.setState({ deductModalOpen: false });
      })
      .catch(err => {
        console.log("Error whilst deducting transaction: ", err);
      });
  };

  componentDidMount = () => {
    const { uid } = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          const user = doc.data();
          const { email, name, totalBalance } = user;
          this.setState({ email, displayName: name, totalBalance });
        }
      })
      .catch(err => console.log("err", err));
  };

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    const {
      addedAmount,
      deductedAmount,
      displayName,
      totalBalance,
      description
    } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text>Welcome {displayName}</Text>
          <Text style={styles.title}>Amount Saved</Text>
        </View>

        <View style={styles.amountWrapper}>
          <Text style={styles.amountSaved}>GHc {totalBalance}</Text>
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
                  placeholder="Description"
                  placeholderTextColor="#000"
                  style={styles.modalInput}
                  onChangeText={description => this.setState({ description })}
                />
                <TextInput
                  placeholder="Enter amount to deduct"
                  placeholderTextColor="#000"
                  style={styles.modalInput}
                  onChangeText={deductedAmount =>
                    this.setState({ deductedAmount })
                  }
                />
                <Button
                  title="Deduct"
                  color="black"
                  onPress={() => this.deductAmount(deductedAmount)}
                />
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

        <Button title="sign out" onPress={this.signOutUser} />
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
