/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {IProduct} from '../Product';
import {ProductItem} from '../ProductItem/ProductItem';

const getProducts = async (): Promise<IProduct[]> => {
  const api = fetch('https://dummyjson.com/products');
  return (await api).json();
};

export const ProductList = () => {
  const [products, setProducts] = React.useState<IProduct[]>();
  useEffect(() => {
    getProducts().then(res => {
      const products = (res as any).products;
      setProducts(products);
    });
  }, []);
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductItem {...item} />}></FlatList>
    </View>
  );
};
