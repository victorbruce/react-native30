import React, { Component } from "react";
import { Text, View } from "react-native";
import { useAction } from "react-redux";
import { sayHello } from "../actions/helloAction";
import { connect } from "react-redux";

const Hello = props => {
  
  return (
    <View>
      <Text> {props.hello}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  hello: state.hello.message
});

export default connect(mapStateToProps, { sayHello })(Hello);
