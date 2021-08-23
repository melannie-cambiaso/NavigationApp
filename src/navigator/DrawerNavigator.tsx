import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import styles, { colors } from '../theme/appTheme';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
        />
      </View>
      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuButton}>
          <Icon name="compass-outline" size={20} color={colors.primary} />
          <Text style={styles.menuText}> Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}>
          <Icon name="cog-outline" size={20} color={colors.primary} />
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const LateralMenu = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        headerShown: false,
        drawerType: width >= 700 ? 'permanent' : 'front'
      }}>
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default LateralMenu;
