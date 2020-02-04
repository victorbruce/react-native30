import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { sayHello } from "../actions/helloAction";
import { useSelector } from "react-redux";

const Hello = () => {
  const message = useSelector(state => state.hello.message);

  return (
    <View>
      <Text>{message ? message : "loading"}</Text>
    </View>
  );
};

export default Hello;
