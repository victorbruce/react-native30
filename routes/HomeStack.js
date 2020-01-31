import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../components/Login";
import Signup from '../components/Signup';

const screens = {
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
