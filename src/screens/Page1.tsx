import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { colors } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={30} color={colors.primary} />
        </TouchableOpacity>
      )
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{ marginVertical: 20 }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: '#5856D6' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro'
            })
          }>
          <Icon name="man" size={20} color="white" />
          <Text style={styles.buttonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: '#FF9427' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María'
            })
          }>
          <Icon name="woman" size={20} color="white" />
          <Text style={styles.buttonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
