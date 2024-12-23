import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export const ProductDetail = () => {
  const data = useRoute().params;
  console.log('data: ', data);
  return (
    <View>
      <Text>Product Detail</Text>
    </View>
  );
};
