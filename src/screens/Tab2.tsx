import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../components/TouchableIcon';

import styles, { colors } from '../theme/appTheme';

const Tab2Screen = () => {
  const { top: marginTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.globalMargin, marginTop }}>
      <Text style={styles.title}> Iconos</Text>
      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="american-football-outline" />
        <TouchableIcon name="aperture-outline" />
        <TouchableIcon name="business-outline" />
        <TouchableIcon name="color-filter-outline" />
        <TouchableIcon name="rainy-outline" />
        <TouchableIcon name="game-controller-outline" />
        <TouchableIcon name="nutrition-outline" />
      </Text>
    </View>
  );
};

export default Tab2Screen;
