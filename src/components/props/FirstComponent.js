/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'; // React Native bileşenlerini import edin

const FirstComponent = ({kisi1, change}) => {
  return (
    <View>
      <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
        {kisi1}
      </Text>
      <TouchableOpacity
        onPress={change}
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          width: 100,
          marginBottom: 10,
          padding: 10,
        }}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Değiştir 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstComponent;

//! Bu fonksiyon yapısında prop kullanımıdır.
