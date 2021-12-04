import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import routes from '../../config/routes';
import { navigator } from '../../navigation';
import Service from '../../provider/Services/index';
import { styles } from './styles';

const Milk = () => {
  const { goToPage, goBack } = navigator();
  const [milkData, setMilkData] = useState<any>();

  const fetch = async () => {
    const response: any = await Service.fetchMilk();
    setMilkData(response.results);
  };

  useEffect(() => {
    fetch();
  }, []);

  const renderMilk = ({
    item,
  }: {
    item: {
      _id: number;
      fecha: string;
      estado: string;
      temp_entrada: number;
    };
  }) => (
    <View style={styles.container}>
      <View style={styles.tamboContainer}>
        <Text style={styles.tambo}>TAMBO {`${item._id}`}</Text>
        <Text style={styles.date}>{`${item.fecha}`}</Text>
      </View>
      <Text style={styles.quality}>Calidad: {`${item.estado}`}</Text>
      <Text style={styles.temp}>{`${item.temp_entrada}`} °C</Text>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPage.bind(null, routes.ADD_MILK)}>
          <Text style={styles.add}>AÑADIR</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.flat}
        data={milkData}
        keyExtractor={({ _id }) => `milk:${_id}`}
        renderItem={renderMilk}
      />
    </View>
  );
};

export default Milk;
