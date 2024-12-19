/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICategory} from '../models/Category';
import {faker} from '@faker-js/faker';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fontfamily';
import {fontSize, spacing} from '../constants/dimentions';

const getFakeCategories = () => {
  const categories: Array<ICategory> = [];

  const uniqueIds = Array.from({length: 10}, (_, i) => i + 1);

  for (let i = uniqueIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueIds[i], uniqueIds[j]] = [uniqueIds[j], uniqueIds[i]];
  }

  uniqueIds.forEach(id => {
    categories.push({
      id,
      title: faker.word.noun(),
    });
  });

  return categories;
};

export const Category = () => {
  const categories = useMemo(() => getFakeCategories(), []);
  const [selectedCategory, setSelectedCategory] = useState();
  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
  };
  return (
    <FlatList
      data={categories}
      horizontal
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
