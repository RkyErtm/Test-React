/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Colors from '../Colors';
import {IProduct} from '../Product';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';

export const ProductItem: React.FunctionComponent<IProduct> = ({
  title,
  thumbnail,
  description,
  price,
  rating,
  category,
}) => {
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20, fontWeight: 600, color: '#000'}}>
        {title}
      </Text>
      <Text numberOfLines={3} ellipsizeMode="tail">
        {description}
      </Text>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        source={{uri: thumbnail}}
        style={{width: 'auto', height: 300, margin: 10}}>
        <View
          style={{
            borderRadius: 10,
            flex: 1,
            backgroundColor: Colors.imageBg,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.categoryBg,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.smoothText,
                marginRight: 10,
                marginTop: 5,
                fontSize: 20,
              }}>
              {category}
            </Text>
          </View>
          <View style={{flex: 5}}></View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: Colors.imageBg,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <FontAwesomeIcon icon={faStar} color="#fff" />
              <Text style={{color: Colors.smoothText}}>{rating}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <FontAwesomeIcon icon={faTag} color="#fff" />
              <Text style={{color: Colors.smoothText}}>{price}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
