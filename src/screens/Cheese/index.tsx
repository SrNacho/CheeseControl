import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import routes from '../../config/routes';
import { navigator } from '../../navigation';
import Service from '../../provider/Services/index';
import { styles } from './styles';

const Cheese = () => {
  const { goToPage, goBack } = navigator();
  const [cheeseData, setCheeseData] = useState<any>();

  const fetch = async () => {
    const response: any = await Service.fetchCheese();
    setCheeseData(response.results);
  };

  useEffect(() => {
    fetch();
  }, []);

  const render = ({
    item,
  }: {
    item: {
      _id: number;
      producido: string;
      calidad: string;
      maduracion: number;
      cant_quesos: number;
    };
  }) => (
    <View style={styles.container}>
      <View style={styles.tamboContainer}>
        <Text style={styles.tambo}>TANDA {`${item._id}`}</Text>
      </View>
      <Text style={styles.date}>Producido: {`${item.producido}`}</Text>
      <Text style={styles.regularText}>Calidad: {`${item.calidad}`}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.regularText}>Maduracion: {`${item.maduracion}`}</Text>
        <Text style={styles.regularText}>Cant.: {`${item.cant_quesos}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPage.bind(null, routes.ADD_CHEESE)}>
          <Text style={styles.add}>AÑADIR</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.flat}
        data={cheeseData}
        keyExtractor={({ _id }) => `cheese:${_id}`}
        renderItem={render}
      />
    </View>
  );
};

export default Cheese;
