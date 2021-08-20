import React from 'react';
import { Text, View } from 'react-native';

import styles from '../theme/appTheme';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Tab 1</Text>
    </View>
  );
};

export default Tab1Screen;
