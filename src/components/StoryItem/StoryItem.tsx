import {Image, Text, View} from 'react-native';
import React from 'react';

type StoryItemProps = {
  avatar: string;
  userName: string;
};

export const StoryItem = ({avatar, userName}: StoryItemProps) => {
  return (
    <View style={{paddingHorizontal: 5}}>
      <Image
        style={{
          width: 80,
          height: 80,
          marginRight: 5,
          borderRadius: 50,
          marginTop: 20,
          borderColor: '#d9d9ff',
          borderWidth: 2,
        }}
        source={{uri: avatar}}></Image>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{color: 'gray', fontSize: 12, maxWidth: 80}}>
        {userName}
      </Text>
    </View>
  );
};
