/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Navigation} from './src/Navigation';
import {faker} from '@faker-js/faker';

interface Resource {
  id: string;
  url: string;
}

const App = () => {
  const images = Array<number>(20)
    .fill(0)
    .map<Resource>(
      () =>
        ({
          id: faker.string.uuid(),
          url: faker.image.urlPicsumPhotos(),
        } as Resource),
    );
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image
            source={{uri: item.url}}
            style={{width: 300, height: 300, margin: 10, borderRadius: 10}}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
