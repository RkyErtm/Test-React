import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Counter} from './src/Counter';
import {Container} from './src/Container';

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
        <Counter start={100} step={5} />
        <Counter start={200} step={10} />

        <Container width={100} height={200} variant="primary">
          <Container width={50} height={50} variant="warning">
            <Text>ABC</Text>
          </Container>
        </Container>
      </SafeAreaView>
    );
  }
}
