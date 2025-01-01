/* eslint-disable react/jsx-no-undef */
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {ProductCarosel} from '../components/ProductCarousel';
import {colors} from '../constants/colors';
import {RootTypeList} from '../models/Types';

// 'Product-detail' ekranı için route prop tipi
type ProductDetailRouteProp = RouteProp<RootTypeList, 'Product-detail'>;

export const ProductDetail = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const {data} = route.params;
  return (
    <View style={stlyes.container}>
      <Header />
      <ProductCarosel image={data?.images} />
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
