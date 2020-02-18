import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: { headerShown: false }
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: { headerShown: false }
  }
});

export default AuthStack;