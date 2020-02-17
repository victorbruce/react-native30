import { createStackNavigator } from "react-navigation-stack";
import Header from '../shared/Header';
import Transaction from '../screens/Transaction';

const TransactionStack = createStackNavigator({
  TransactionScreen: {
    screen: Transaction,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => <Header title="Transaction" navigation={navigation} />
      };
    }
  }
});

export default TransactionStack;
