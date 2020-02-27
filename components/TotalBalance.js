import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "../config/firebase";

class TotalBalance extends React.Component {
  state = {
    transactions: [],
    total: 0
  };

  getAllTransactions = async () => {
    const { uid } = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .collection("transactions")
      .get()
      .then(data => {
        const transactions = [];
        data.forEach(doc => {
          transactions.push({
            description: doc.data().description,
            amount: doc.data().amount,
            createdAt: doc.data().createdAt
          });
        });
        this.setState({ transactions });
        this.getAmounts();
      })
      .catch(err => {
        console.error("transaction errors ", err);
      });
  };

  getAmounts = () => {
    const transactions = [...this.state.transactions];
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log("my total", total);
    this.setState({ total });
  };

  componentDidMount = () => {
    this.getAllTransactions();
  };
  
  render() {
    const { total } = this.state;
    return (
      <View>
        <Text style={styles.title}>Total Balance</Text>
        <View style={styles.amountWrapper}>
          <Text style={styles.amountSaved}>GHc {total}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default TotalBalance;
