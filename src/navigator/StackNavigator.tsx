import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Page1Screen,
  Page2Screen,
  Page3Screen,
  PersonaScreen
} from '../screens';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonaScreen: { id: number; nombre: string };
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen
        options={{ title: 'Página 1' }}
        name="Page1Screen"
        component={Page1Screen}
      />
      <Stack.Screen
        options={{ title: 'Página 2' }}
        name="Page2Screen"
        component={Page2Screen}
      />
      <Stack.Screen
        options={{ title: 'Página 3' }}
        name="Page3Screen"
        component={Page3Screen}
      />
      <Stack.Screen
        options={{ title: 'Persona' }}
        name="PersonaScreen"
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
