import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { AlbumScreen, ChatScreen, ContactScreen } from '../screens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        },
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'white'
        },
        tabBarIcon: props => {
          const { name } = route;
          const { color } = props;
          let iconName: string;
          switch (name) {
            case 'Chat':
              iconName = 'chatbox-outline';
              break;

            case 'Contact':
              iconName = 'people-outline';
              break;

            default:
              iconName = 'albums';
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        }
      })}
      style={{ paddingTop: top }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
