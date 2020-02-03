import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { connect } from "react-redux";
import { sayHello } from "../actions/helloAction";

import logo from "../assets/logo.png";

const Logo = () => {
  const [hello, setHello] = useState("");

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

const mapStateToProps = state => {
  return {
    hello: state.hello.message
  };
};

export default connect(mapStateToProps, { sayHello })(Logo);
