import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../theme/appTheme';

interface Props {
  name: string;
}

const TouchableIcon = ({ name }: Props) => {
  const { changeFavIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavIcon(name)}>
      <Icon name={name} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
