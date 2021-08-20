import React from 'react';
import { Text, View } from 'react-native';

import styles from '../theme/appTheme';

const ChatScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Chat</Text>
    </View>
  );
};

export default ChatScreen;
