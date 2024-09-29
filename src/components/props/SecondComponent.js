/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class SecondComponent extends Component {
  render() {
    const {kisi2, getMessage} = this.props;
    return (
      <View>
        <Text style={{fontSize: 15, color: 'red', marginTop: 20}}>{kisi2}</Text>
        <TouchableOpacity
          onPress={getMessage}
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            width: 100,
            marginBottom: 10,
            padding: 10,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Değiştir 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//! Bu class yapısında prop kullanımıdır.
