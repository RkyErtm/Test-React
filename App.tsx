/* eslint-disable react/jsx-no-undef */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootTypeList} from './src/models/Types';
import {Home} from './src/screens/HomeScreen';
import {ProductDetail} from './src/screens/ProductDetailScreen';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator<RootTypeList>();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
    </>
  );
};

export default App;
