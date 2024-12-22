/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {faker} from '@faker-js/faker';
import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import {ICategory} from '../models/Category';
import {CategoryService} from '../services/CategoryService';

export const Category = () => {
  const categories = useMemo(() => CategoryService.getFakeCategories(), []);
  const [selectedCategory, setSelectedCategory] = useState();
  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
  };
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleSelectCategory(item.id)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory == item?.id && {
                color: colors.purple,
              },
            ]}>
            {item.title}
          </Text>
          {selectedCategory == item?.id && (
            <View style={styles.underline}></View>
          )}
        </TouchableOpacity>
      )}
      keyExtractor={(item: any) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{paddingHorizontal: spacing.sm}} />
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
    fontSize: fontSize.md,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '90%',
    marginTop: spacing.md,
  },
});
