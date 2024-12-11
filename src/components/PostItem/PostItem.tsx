/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Post} from '../PostList/PostList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';

export const PostItem: React.FC<Post> = props => {
  const {id, userAvatar, userName, description, image, likes, comments} = props;
  return (
    <View
      style={{
        width: '100%',
        height: 400,
        marginBottom: 10,
        borderRadius: 20,
        borderColor: '#dadada',
        borderWidth: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', padding: 15}}>
          <View style={{flex: 1}}>
            <Image
              source={{uri: userAvatar}}
              style={{width: 40, height: 40, borderRadius: 50}}></Image>
          </View>
          <View style={{flex: 5, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{userName}</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Text>
                <FontAwesomeIcon icon={faBars} size={15} color={'black'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
        <Image
          source={{uri: image}}
          style={{
            width: '100%',
            height: 200,
            maxHeight: 200,
            borderRadius: 10,
            marginTop: 5,
          }}></Image>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <FontAwesomeIcon size={20} icon={faHeart} color={'gray'} />
          <Text style={{fontSize: 17}}>{likes}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <FontAwesomeIcon size={20} icon={faComment} color={'gray'} />
          <Text style={{fontSize: 17}}>{comments}</Text>
        </View>
      </View>
    </View>
  );
};
