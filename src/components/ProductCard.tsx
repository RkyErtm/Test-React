import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import {IProduct} from '../models/Product';
import {RootTypeList} from '../models/Types';

type ProductDetailNavigationProp = StackNavigationProp<
  RootTypeList,
  'Product-detail'
>;

export const ProductCard = (data: IProduct) => {
  const navigation = useNavigation<ProductDetailNavigationProp>();

  const handleProductDetailScreen = () => {
    navigation.navigate('Product-detail', {data});
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={handleProductDetailScreen}
        key={data?.id}
        style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.img} source={{uri: data?.images[0]}}></Image>
        </View>
        {/* Product content */}
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={styles.subtitle}>{data?.brand}</Text>
          <Text style={styles.price}>${data?.price}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
    backgroundColor: colors.background,
    borderRadius: 12,
    width: '100%',
    elevation: 5,
  },
  imageWrapper: {
    margin: spacing.sm,
    borderRadius: 3,
  },
  img: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  contentWrapper: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  title: {
    color: colors.black,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.SemiBold,
  },
  subtitle: {
    color: colors.gray,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    paddingVertical: spacing.sm,
  },
  price: {
    color: colors.purple,
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
  },
});
