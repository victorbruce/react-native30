import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const transactions = [
    { id: 1, transactionType: "Withdrawal", amount: 30 },
    { id: 2, transactionType: "Deposit", amount: 15 },
    { id: 3, transactionType: "Deposit", amount: 5 },
    { id: 4, transactionType: "Withdrawal", amount: 10 },
    { id: 5, transactionType: "Deposit", amount: 4 },
    { id: 6, transactionType: "Withdrawal", amount: 13 }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent Transactions</Text>
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={transactions}
        renderItem={({ item }) => (
          <View id={item.id} style={styles.transaction}>
            <View>
              <Text style={{color: '#333'}}>14th Feb</Text>
              <Text style={{color: '#333'}}>2020</Text>
            </View>
            <View>
              <Text >{item.transactionType}</Text>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>GHc {item.amount}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

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

export default About;
