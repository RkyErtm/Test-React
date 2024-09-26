import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class StateComponent extends Component {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rukiye',
      surname: 'Ertem',
      age: '24',
    };
  }
  render() {
    const {name, surname, age} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.texts}>{name}</Text>
        <Text style={styles.texts}>{surname}</Text>
        <Text style={styles.texts}>{age}</Text>

        <TouchableOpacity
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#fd9f9f',
            width: '30%',
          }}>
          <Text style={{textAlign: 'center'}}>Değiştir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
    color: '#000',
  },
});
