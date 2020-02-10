import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text>About screen</Text>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <MaterialIcons
            name="close"
            size={54}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.modalText}>Hello Modal!</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={54}
        style={styles.modalToggle}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalToggle: {
    alignSelf: "center",
    marginTop: 30
  },
  modalClose: {
    marginTop: 30
  }
});

export default About;
