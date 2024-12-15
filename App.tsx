import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NameContext, NameContextProvider} from './src/contexts/NameContext';

const AppContent = () => {
  const {name} = React.useContext(NameContext); // Context'ten name verisi alınıyor
  return (
    <View style={{marginTop: 20}}>
      <Text>{name}</Text> {/* Metin doğru şekilde render ediliyor */}
    </View>
  );
};

const App = () => {
  return (
    <NameContextProvider>
      <SafeAreaView>
        <StatusBar />
        <AppContent />
      </SafeAreaView>
    </NameContextProvider>
  );
};

export default App;
