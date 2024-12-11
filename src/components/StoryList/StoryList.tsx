/* eslint-disable @typescript-eslint/no-unused-vars */
import {faker} from '@faker-js/faker';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {StoryItem} from '../StoryItem/StoryItem';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

interface Story {
  id: string;
  avatar: string;
  userName: string;
}

export const StoryList = () => {
  const stories = Array<number>(40)
    .fill(0)
    .map<Story>(
      () =>
        ({
          id: faker.string.uuid(),
          avatar: faker.image.avatar(),
          userName: faker.internet.username(),
        } as Story),
    );
  return (
    <FlatList
      data={stories}
      ListHeaderComponent={Header}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => <StoryItem {...item}></StoryItem>}
    />
  );
};

const Header = () => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        marginRight: 5,
        borderRadius: 50,
        marginTop: 20,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#d9d9ff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>
        <FontAwesomeIcon icon={faPlus} size={20} color={'gray'} />
      </Text>
    </View>
  );
};
