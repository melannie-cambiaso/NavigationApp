import React, { useContext } from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import styles from '../theme/appTheme';

const AlbumScreen = () => {
  const {
    logOut,
    authState: { isLoggedIn }
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Album </Text>
      {isLoggedIn && <Button title="Log out" onPress={logOut} />}
    </View>
  );
};

export default AlbumScreen;
