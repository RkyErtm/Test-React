/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {iconSize, spacing} from '../constants/dimentions';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={stlyes.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faHeart} size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
  },
});
