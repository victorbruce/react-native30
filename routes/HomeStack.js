import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Header from '../shared/Header';
import Home from '../screens/Home';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => (
          <Header title="Home" hasBackButton={false} navigation={navigation} />
        )
      };
    }
  }
});

export default HomeStack;