import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import routes from '../../config/routes';
import { navigator } from '../../navigation';
import { styles } from './styles';

const Selector = () => {
  const { goToPage } = navigator();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToPage.bind(null, routes.MILK)}>
        <Text style={styles.text}>Arribo de Leche</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToPage.bind(null, routes.CHEESE)}>
        <Text style={styles.text}>Tanda de quesos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Selector;
