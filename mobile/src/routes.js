import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => {
          return {
            header: (props) => {
              // return <Header />;
              return <Header data={props} state={{}} />;
            },
          };
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyle: { backgroundColor: '#141419' },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            cardStyle: { backgroundColor: '#141419' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
