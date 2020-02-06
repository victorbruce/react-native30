import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Loading from "./components/Loading";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import About from "./screens/About";
import Another from "./screens/Another";
import Header from "./shared/Header";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBjCSFtytpY6MesZ_k7WUsXMZCqte_QqfA",
  authDomain: "rnin30days.firebaseapp.com",
  databaseURL: "https://rnin30days.firebaseio.com",
  projectId: "rnin30days",
  storageBucket: "rnin30days.appspot.com",
  messagingSenderId: "509318577420",
  appId: "1:509318577420:web:894ca3e942d173021a1d29",
  measurementId: "G-93XMZWQVWE"
};

firebase.initializeApp(firebaseConfig);

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
  },
  AnotherScreen: {
    screen: Another
  }
});

const AboutStack = createStackNavigator({
  AboutScreen: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => <Header title="About" navigation={navigation} />
      };
    }
  }
});

const AppStack = createDrawerNavigator({
  HomeStackScreen: {
    screen: HomeStack,
    navigationOptions: {
      title: "Home"
    }
  },
  AboutStackScreen: {
    screen: AboutStack,
    navigationOptions: {
      title: "About"
    }
  }
});

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: Login
  },
  RegisterScreen: {
    screen: Register
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "LoadingScreen"
    }
  )
);
