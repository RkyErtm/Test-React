/* eslint-disable react/jsx-no-undef */
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../models/Types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';

// 'Product-detail' ekranı için route prop tipi
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'Product-detail'>;

export const ProductDetail = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const {data} = route.params;
  console.log('data: ', data);
  return (
    <View>
      <FontAwesomeIcon icon={faArrowLeft} />
      <Text>{data?.name}</Text>
    </View>
  );
};
