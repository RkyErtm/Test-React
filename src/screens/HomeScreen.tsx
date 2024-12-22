/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/react-in-jsx-scope */
import React, {useMemo, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Category} from '../components/Category';
import {ProductCard} from '../components/ProductCard';
import {colors} from '../constants/colors';
import {fontSize, iconSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import {ProductService} from '../services/ProductService';
import {CategoryService} from '../services/CategoryService';

export const Home = () => {
  const products = ProductService.getFakeProducts();
  const categories = useMemo(() => CategoryService.getFakeCategories(), []);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [data, setData] = useState(products);

  const handleUpdateCategory = (newCategory: number) => {
    setSelectedCategory(newCategory);
    setData(products);
  };
  return (
    <View style={styles.container}>
      {/* Product area */}
      <FlatList
        ListHeaderComponent={
          <>
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
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Category
                  data={item}
                  selectedCategory={selectedCategory}
                  handleUpdateCategory={handleUpdateCategory}
                />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View style={{paddingHorizontal: spacing.sm}} />
              )}></FlatList>
          </>
        }
        data={data}
        renderItem={({item}) => <ProductCard {...item} />}
        numColumns={2}
        columnWrapperStyle={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
        }}
        contentContainerStyle={{
          padding: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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
