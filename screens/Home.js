import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

import firebase from "../config/firebase";

import TotalBalance from "../components/TotalBalance";
import ExpenseModal from "../components/ExpenseModal";
import IncomeModal from "../components/IncomeModal";

export default class Home extends Component {
  state = {
    email: "",
    displayName: "",
    deductedAmount: 0,
    addedAmount: 0,
    description: "",
    incomeModalOpen: false,
    expenseModalOpen: false
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
    const { addedAmount, displayName, description } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text>Welcome {displayName}</Text>
        </View>

        <TotalBalance />

        <View style={styles.icons}>
          <ExpenseModal />
          <IncomeModal />
        </View>

      <View style={{marginTop: 60}}>

        <Button title="sign out" color="black"  onPress={this.signOutUser} />
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

  icons: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "flex-end"
  },

  modalButton: {
    backgroundColor: "#000"
  }
});
