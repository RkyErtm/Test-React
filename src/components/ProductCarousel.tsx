/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {spacing} from '../constants/dimentions';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
import {vi} from '@faker-js/faker';

type ProductCaroselProps = {
  image: string[];
};
const screenWidth = Dimensions.get('window').width;
export const ProductCarosel: React.FC<ProductCaroselProps> = ({image}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveSlide(viewableItems.viewableItems[0].index);
    }
    // console.log(viewableItems);
  });
  return (
    <>
      <FlatList
        data={image}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate={'fast'}
        snapToInterval={screenWidth}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({item}) => {
          return (
            <View style={stlyes.productImageWrapper}>
              <Image source={{uri: item}} style={stlyes.image}></Image>
            </View>
          );
        }}
      />
      <View style={stlyes.pagination}>
        {image.map((_, index) => (
          <View
            key={index}
            style={[
              stlyes.dot,
              index === activeSlide && {
                width: 20,
                borderRadius: 32,
              },
              {
                backgroundColor:
                  index === activeSlide ? colors.purple : colors.gray,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

const stlyes = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: spacing.md,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: colors.gray,
  },
});
