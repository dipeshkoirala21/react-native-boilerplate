import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './screens/main';

const Main = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => {
      return {
        headerTitle: 'Welcome',
      };
    },
  },
});
export const AppContainer = createAppContainer(Main);