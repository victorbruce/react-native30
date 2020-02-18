import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Loading from '../components/Loading';
import AppStack from '../routes/AppStack';
import AuthStack from '../routes/AuthStack';

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
