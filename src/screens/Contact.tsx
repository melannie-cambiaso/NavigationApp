import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import styles from '../theme/appTheme';

const ContactScreen = () => {
  const {
    sigIn,
    authState: { isLoggedIn }
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Contact </Text>

      {!isLoggedIn && <Button title="Login" onPress={sigIn} />}
    </View>
  );
};

export default ContactScreen;
