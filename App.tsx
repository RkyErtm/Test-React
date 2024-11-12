import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Counter} from './src/Counter';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Counter start={100} step={5} />
        <Counter start={200} step={10} />
      </SafeAreaView>
    );
  }
}
