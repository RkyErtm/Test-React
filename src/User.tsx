/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {IUser} from './useFakeUserData';

export const User: React.FC<IUser> = props => {
  const {name, surname, avatar, email, messages} = props;
  return (
    <View style={{width: '100%', flexDirection: 'row', height: 90}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: avatar}}
          style={{width: 50, height: 50, borderRadius: 30}}></Image>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {name}
          {surname}
        </Text>
        <Text style={{fontSize: 16, color: 'gray'}}>{email}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {messages > 0 && (
          <View
            style={{
              backgroundColor: 'green',
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>{messages}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
