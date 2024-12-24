/* eslint-disable react/jsx-no-undef */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './src/screens/HomeScreen';
import {ProductDetail} from './src/screens/ProductDetailScreen';
import {RootStackParamList} from './src/models/Types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="Product-detail"
          component={ProductDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
