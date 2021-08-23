import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen, Tab2Screen } from '../screens';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

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
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Tab2':
              iconName = 'albums-outline';
              break;

            default:
              iconName = 'list-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
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
        tabBarColor: 'white',
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: colors.primary,
          color: 'white'
        },
        tabBarLabelStyle: {
          fontSize: 15,
          color: 'white'
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
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Tab2':
              iconName = 'albums-outline';
              break;

            default:
              iconName = 'list-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
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
