import React from 'react';
import { Text, View } from 'react-native';

import styles from '../theme/appTheme';

const AlbumScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Album </Text>
    </View>
  );
};

export default AlbumScreen;
