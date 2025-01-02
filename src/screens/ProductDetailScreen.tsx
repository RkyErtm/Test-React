import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../components/Header';
import {ProductCarosel} from '../components/ProductCarousel';
import {colors} from '../constants/colors';
import {fontSize, iconSize, spacing} from '../constants/dimentions';
import {fontFamily} from '../constants/fontfamily';
import {RootTypeList} from '../models/Types';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import {ScrollView} from 'react-native-gesture-handler';

const colorsData = [
  {colorName: 'Silver', colorCode: '#C0C0C0'},
  {colorName: 'BrightOrange', colorCode: '#f25745'},
  {colorName: 'Starlight', colorCode: '#f0f2f2'},
];
// 'Product-detail' ekranı için route prop tipi
type ProductDetailRouteProp = RouteProp<RootTypeList, 'Product-detail'>;

export const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTab, setSelectedTab] = useState('Details');
  const route = useRoute<ProductDetailRouteProp>();
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <ProductCarosel image={data?.images} />
        {/* product info */}
        <View style={styles.textContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.brand}>{data.brand}</Text>
          </View>
          <View style={styles.reviewWrapper}>
            <FontAwesomeIcon icon={faStar} color="yellow" />
            <Text style={styles.review}>{data.review}</Text>
          </View>
        </View>

        {/* color variants */}
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={colorsData}
            ItemSeparatorComponent={() => <View style={{width: spacing.sm}} />}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.selectColorWrapper,
                    item.colorCode === selectedColor && {
                      borderColor: colors.purple,
                    },
                    // {borderColor: colors.purple}
                  ]}
                  onPress={() => {
                    setSelectedColor(item.colorCode);
                  }}>
                  <View
                    style={[
                      styles.circleColor,
                      {backgroundColor: item.colorCode},
                    ]}
                  />
                  <Text style={styles.colorText}>{item.colorName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* details area */}
        <View style={styles.detailReviewTabs}>
          {['Details', 'Review'].map(tab => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && {color: colors.purple},
                ]}>
                {tab}
              </Text>
              {selectedTab === tab && <View style={styles.underline} />}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.detailContent}>
          {selectedTab === 'Details' ? data?.details : data?.reviewDetail}
        </Text>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon
            icon={faCartShopping}
            size={iconSize.sm}
            color="#fff"
          />
          <Text style={styles.btnText}>Add to Cart | ${data.price}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: spacing.md,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
    color: colors.black,
  },
  brand: {
    fontSize: fontSize.md,
    color: colors.gray,
  },
  reviewWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3ECFF42',
    borderRadius: 10,
    padding: spacing.sm,
    gap: 5,
  },
  review: {
    fontSize: fontSize.md,
    color: colors.gray,
  },
  //! COLOR CSS
  colorContainer: {
    margin: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    color: colors.black,
    fontFamily: fontFamily.SemiBold,
    paddingBottom: spacing.sm,
  },
  selectColorWrapper: {
    borderWidth: 1,
    borderColor: colors.placeholderText,
    borderRadius: 5,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    color: colors.black,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
  },
  //! DETAIL REVIEW TABS
  detailReviewTabs: {
    display: 'flex',
    flexDirection: 'row',
    margin: spacing.md,
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  tabText: {
    fontSize: fontSize.md,
    color: colors.gray,
    fontFamily: fontFamily.Medium,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.xs,
  },
  detailContent: {
    marginHorizontal: spacing.md,
    color: colors.gray,
    fontFamily: fontFamily.Regular,
  },
  //! BUTTON
  button: {
    flexDirection: 'row',
    backgroundColor: colors.purple,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.xl,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  btnText: {
    color: '#fff',
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
});
