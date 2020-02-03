import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../components/Login";
import Signup from "../components/Signup";

const screens = {
  LoginScreen: {
    screen: Login
  },
  SignupScreen: {
    screen: Signup
  }
};

const HomeStack = createSwitchNavigator(screens, {
  initialRouteName: "LoginScreen"
});
export default createAppContainer(HomeStack);
