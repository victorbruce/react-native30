import React from "react";
import { StyleSheet, View, Image } from "react-native";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <View style={styles.conatiner}>
      <Image source={logo} style={{ width: 100, height: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Logo;
