import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ProductList} from './src/components/FetchAPI/ProductList/ProductList';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{marginTop: 20}}>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default App;
