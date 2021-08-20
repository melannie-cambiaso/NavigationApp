import React from 'react';
import { Text, View } from 'react-native';

import styles from '../theme/appTheme';

const ContactScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Contact </Text>
    </View>
  );
};

export default ContactScreen;
