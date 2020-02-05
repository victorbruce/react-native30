import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Loading from "./components/Loading";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

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

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: Home
  }
})

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
)
