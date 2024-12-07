/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PropsWithChildren} from 'react';
import {Home} from './screens/Home/Home';
import {Profile} from './screens/Profile/Profile';

export const Navigation = ({children}: PropsWithChildren) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};
