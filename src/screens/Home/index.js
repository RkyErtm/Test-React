/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Home sayfası </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail', {
              name: 'Rukiye',
            })
          }
          style={{
            padding: 10,
            marginTop: 10,
            backgroundColor: 'gray',
            borderRadius: 10,
          }}>
          <Text>Detaya git</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
