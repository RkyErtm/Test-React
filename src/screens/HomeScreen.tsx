/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, iconSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import React from 'react';
import {Category} from '../components/Category';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now.</Text>
      {/* Search area */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../assets/imgs/search.png')}
            style={styles.logo}
          />
          <TextInput
            placeholderTextColor={colors.placeholderText}
            placeholder="Search Product"
            style={styles.textInput}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../assets/imgs/category.png')}
            style={styles.logo}></Image>
        </View>
      </View>
      {/* Category area */}
      <Category />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: spacing.lg,
  },

  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 30,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    color: colors.gray,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
