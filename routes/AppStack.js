import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeStack from '../routes/HomeStack';
import TransactionStack from '../routes/TransactionStack';

const AppStack = createDrawerNavigator({
  HomeStackScreen: {
    screen: HomeStack,
    navigationOptions: {
      title: "Home"
    }
  },
  TransactionStackScreen: {
    screen: TransactionStack,
    navigationOptions: {
      title: "Transaction"
    }
  }
});

export default AppStack;