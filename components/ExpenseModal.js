import React, { Component } from "react";
import { StyleSheet, Modal, View, TextInput, Button } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

class ExpenseModal extends Component {
  state = {
    description: "",
    amount: 0,
    expenseModalOpen: false
  };

  render() {
    return (
      <View>
        <Feather
          name="minus-circle"
          size={34}
          style={{ marginRight: 70 }}
          onPress={() => this.setState({ expenseModalOpen: true })}
        />
        <Modal visible={this.state.expenseModalOpen} animated="slide">
          <View style={styles.deductModal}>
            <MaterialIcons
              name="close"
              size={32}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() =>
                this.setState({
                  expenseModalOpen: false
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default ExpenseModal;
