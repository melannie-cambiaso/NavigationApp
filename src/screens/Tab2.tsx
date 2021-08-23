import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { colors } from '../theme/appTheme';

const Tab2Screen = () => {
  const { top: marginTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.globalMargin, marginTop }}>
      <Text style={styles.title}> Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon
          name="american-football-outline"
          size={80}
          color={colors.primary}
        />
        <Icon name="aperture-outline" size={80} color={colors.primary} />
        <Icon name="business-outline" size={80} color={colors.primary} />
        <Icon name="color-filter-outline" size={80} color={colors.primary} />
        <Icon name="rainy-outline" size={80} color={colors.primary} />
        <Icon name="game-controller-outline" size={80} color={colors.primary} />
        <Icon name="nutrition-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab2Screen;
