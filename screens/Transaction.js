import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from "../config/firebase";

class Transaction extends Component {
  state = {
    // transactions: [
    //   { id: 1, transactionType: "Withdrawal", amount: 30 },
    //   { id: 2, transactionType: "Deposit", amount: 15 },
    //   { id: 3, transactionType: "Deposit", amount: 5 },
    //   { id: 4, transactionType: "Withdrawal", amount: 10 },
    //   { id: 5, transactionType: "Deposit", amount: 4 },
    //   { id: 6, transactionType: "Withdrawal", amount: 13 }
    // ]
    transactions: []
  };

  componentDidMount = () => {
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
          console.log('HEY HEY:',doc.data());
          transactions.push({
            description: doc.data().description,
            amount: doc.data().amount,
            createdAt: doc.data().createdAt
          });
        });
        this.setState({ transactions });
      })
      .catch(err => {
        console.error("transaction errors ", err);
      });
  };

  render() {
    console.log("my transactions", this.state.transactions);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Transaction History</Text>
        </View>

        <FlatList
          keyExtractor={item => item.id}
          data={this.state.transactions}
          renderItem={({ item }) => (
            <View id={item.id} style={styles.transaction}>
              <View>
                <Text style={{ color: "#333" }}>
                  {new Date(item.createdAt.toDate()).toDateString()}
                </Text>
              </View>
              <View>
                <Text>{item.description}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  GHc {item.amount}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 24,
    paddingTop: 20
  },
  transaction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 30
  }
});

export default Transaction;
