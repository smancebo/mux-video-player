import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from 'navigation';
import 'react-native-gesture-handler';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
