/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {Text, View} from 'react-native';
import stlyes from './styles';
export default class App extends Component {
  render(): any {
    return (
      <View style={stlyes.container}>
        <Text style={stlyes.item}>fdsfds</Text>
      </View>
    );
  }
}
