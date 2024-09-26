/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {View} from 'react-native';
import StateComponent from './src/components/StateComponent';
export default class App extends Component {
  render(): any {
    return (
      //? PART1:  flex - yatay ekranda ekranı doldurmayı sağlar.
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

      //? PART2 - component oluşturma ve çağırma
      // <View style={{flex: 1, justifyContent: 'space-between'}}>
      //   <ClassComponent />
      //   <FunctionalComponent />
      // </View>

      //? Part3 - state(dinamik veri kullanımı, veri tutma, atama)
      <View style={{flex: 1}}>
        <StateComponent />
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
