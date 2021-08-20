import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { SettingsScreen } from '../screens';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const BasicMenu = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        headerTitleAlign: 'center',
        drawerType: width >= 700 ? 'permanent' : 'front'
      }}>
      <Drawer.Screen
        options={{ title: 'Home', headerShown: false }}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{ title: 'Settings' }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default BasicMenu;
