import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../components/Login";
import Signup from '../components/Signup';

const screens = {
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
