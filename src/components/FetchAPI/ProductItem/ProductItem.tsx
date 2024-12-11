/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Text, View} from 'react-native';

type ProductType = {
  title: string;
  thumbnail: string;
  description: string;
};

export const ProductItem: React.FunctionComponent<ProductType> = ({
  title,
  thumbnail,
  description,
}) => {
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20, fontWeight: 600, color: '#000'}}>
        {title}
      </Text>
      <Text>{description}</Text>
      <Image
        source={{uri: thumbnail}}
        style={{width: 'auto', height: 300, margin: 10}}></Image>
    </View>
  );
};
