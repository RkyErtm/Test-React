import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const Home = () => {
  const nav = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffc2c2',
          width: 100,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => nav.navigate('profile' as never)}>
        <Text style={{}}>Nav To Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
