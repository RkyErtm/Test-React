/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import stlyes from './styles'; //* dışardaki css'i buraya import ederek kullandık.
import ClassComponent from './src/components/ClassComponent';
import FunctionComponent from './src/components/FunctionalComponent';
import FunctionalComponent from './src/components/FunctionalComponent';
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

      //? PART2
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ClassComponent />
        <FunctionalComponent />
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
