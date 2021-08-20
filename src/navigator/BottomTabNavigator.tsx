import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen, Tab2Screen } from '../screens';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

const TabIOS = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigatorIOS = () => {
  return (
    <TabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'white'
        },
        headerShown: false,
        tabBarIcon: props => {
          const { name } = route;
          const { color } = props;
          let iconName: string;
          switch (name) {
            case 'Tab1':
              iconName = 'T1';
              break;

            case 'Tab2':
              iconName = 'T2';
              break;

            default:
              iconName = 'ST';
              break;
          }
          return <Text style={{ color }}> {iconName}</Text>;
        }
      })}
      defaultScreenOptions={{}}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}>
      <TabIOS.Screen name="Tab1" component={TopTabNavigator} />
      <TabIOS.Screen name="Tab2" component={Tab2Screen} />
      <TabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </TabIOS.Navigator>
  );
};

const BottomTabNavigatorAndroid = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: colors.primary
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'white'
        },
        tabBarIcon: props => {
          const { name } = route;
          const { color } = props;
          let iconName: string;
          switch (name) {
            case 'Tab1':
              iconName = 'T1';
              break;

            case 'Tab2':
              iconName = 'T2';
              break;

            default:
              iconName = 'ST';
              break;
          }
          return <Text style={{ color }}> {iconName}</Text>;
        }
      })}>
      <Tab.Screen name="Tab1" component={TopTabNavigator} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};

const BottomTabNavigator = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabNavigatorIOS />
  ) : (
    <BottomTabNavigatorAndroid />
  );
};

export default BottomTabNavigator;
