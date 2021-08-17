import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../theme/appTheme';

const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>
      <Button
        title="Ir a página 3"
        onPress={() =>
          navigation.dispatch(CommonActions.navigate('Page3Screen'))
        }
      />
    </View>
  );
};

export default Page2Screen;
