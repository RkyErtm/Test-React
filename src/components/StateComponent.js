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

  changeState = () => {
    this.setState(
      {
        name: 'Nur',
      },
      () => {
        //* then işlevi görür!

        alert('veriler değiştirildi.');
      },
    );
    //* eğer burada ikinci bir set yapsaydık Nur ismi yazılmazdı. React direk en son yapılan işlemi gösterirdi.
  };

  //* Çağırma yöntemi :  onPress={() =>this.changeState() } veya  onPress={this.changeState}

  render() {
    const {name, surname, age} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.texts}>{name}</Text>
        <Text style={styles.texts}>{surname}</Text>
        <Text style={styles.texts}>{age}</Text>

        <TouchableOpacity
          onPress={this.changeState}
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
