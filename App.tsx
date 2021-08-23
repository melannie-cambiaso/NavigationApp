/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { DrawerNavigator } from './src/navigator';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
};

const App = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
