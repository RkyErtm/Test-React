import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../models/Types';

// 'Product-detail' ekranı için route prop tipi
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'Product-detail'>;

export const ProductDetail = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const {data} = route.params;
  console.log('data: ', data);
  return (
    <View>
      <Text>Product Detail</Text>
    </View>
  );
};
