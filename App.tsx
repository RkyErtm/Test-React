import React, { Component } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { Counter } from './src/Counter';
import { Container } from './src/Container';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image borderRadius={100} width={100} height={100} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg' }}></Image>
        <Image source={require('./contents/profile.jpg')}></Image>
      </SafeAreaView>
    );
  }
}
