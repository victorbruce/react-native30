import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const App = () => {
  const [months, setMonths] = useState([
    { name: "January", key: "1" },
    { name: "Febuary", key: "2" },
    { name: "March", key: "3" },
    { name: "April", key: "4" },
    { name: "May", key: "5" },
    { name: "June", key: "6" },
    { name: "July", key: "7" },
    { name: "August", key: "8" },
    { name: "September", key: "9" },
    { name: "October", key: "10" },
    { name: "November", key: "11" },
    { name: "December", key: "12" }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Months in a year</Text>
      <FlatList
        data={months}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {months.map(month => {
          return (
            <View key={month.key}>
              <Text style={styles.text}>{month.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 30
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 30
  }
});

export default App;
