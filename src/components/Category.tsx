import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import {ICategory} from '../models/Category';

interface CategoryProps {
  data: ICategory;
  selectedCategory: number;
  handleUpdateCategory: (newCategory: number) => void;
}

export const Category: React.FC<CategoryProps> = ({
  data,
  selectedCategory,
  handleUpdateCategory,
}) => {
  return (
    <TouchableOpacity
      key={data.id}
      onPress={() => handleUpdateCategory(data.id)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === data?.id && {
            color: colors.purple,
          },
        ]}>
        {data.title}
      </Text>
      {selectedCategory === data?.id && <View style={styles.underline}></View>}
    </TouchableOpacity>
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
