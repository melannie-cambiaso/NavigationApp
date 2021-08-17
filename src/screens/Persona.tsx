import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import styles from '../theme/appTheme';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({ route, navigation }: Props) => {
  const { params } = route;
  const { nombre = '' } = params;
  useEffect(() => {
    navigation.setOptions({
      title: nombre
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      {/* <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      /> */}
    </View>
  );
};

export default PersonaScreen;
