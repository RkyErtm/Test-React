/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FirstComponent from './src/components/props/FirstComponent';
import SecondComponent from './src/components/props/SecondComponent';
export default class App extends Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      name1: 'Ali',
      name2: 'Veli',
    };
  }

  changeName = () => {
    this.setState({
      name1: 'Ayşe',
      name2: 'Fatma',
    });
  };

  showMessage = () => {
    alert('mesaj gösterildi!');
  };

  render() {
    //? PART1:  flex - yatay ekranda ekranı doldurmayı sağlar.
    // return (
    // <View style={[toolbar.frame]}>
    //   <View style={toolbar.bgSearch}>
    //     <View style={toolbar.searchInput} />
    //     <Text style={toolbar.label}>Ara</Text>
    //   </View>

    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>
    //       Test
    //     </Text>
    //   </View>
    // </View>
    // );

    //? PART2 - component oluşturma ve çağırma
    // return (
    // <View style={{flex: 1, justifyContent: 'space-between'}}>
    //   <ClassComponent />
    //   <FunctionalComponent />
    // </View>
    // );

    //? Part3 - state(dinamik veri kullanımı, veri tutma, atama)
    // return(
    // <View style={{flex: 1}}>
    //   <StateComponent />
    // </View>
    // )

    //? Part4 - props

    const {name1, name2} = this.state;
    return (
      <View>
        <Text>{name1}</Text>
        <Text>{name2}</Text>
        <TouchableOpacity
          onPress={this.changeName}
          style={{
            backgroundColor: 'gray',
            borderRadius: 10,
            width: 100,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Değiştir</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20}}>
          <FirstComponent change={this.changeName} kisi1={name1} />
          <SecondComponent getMessage={this.showMessage} kisi2={name2} />
        </View>
      </View>
    );
  }
}

// * PART1 CSS
// const toolbar = StyleSheet.create({
//   frame: {
//     flex: 1
//   },
//   bgSearch: {
//     backgroundColor: "red",
//     height: 60,
//     flexDirection: 'row',
//     paddingHorizontal: 10
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     height: 30,
//     marginTop: 15,
//     flex: 1
//   },
//   label: {
//     marginTop: 18,
//     paddingLeft: 10,
//     color: "#fff"
//   }
// });
