import moment from 'moment';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Text } from 'react-native-paper';
import { TextInput } from '../../components';
import { InputDescription, styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { navigator } from '../../navigation';
import Service from '../../provider/Services/index';

const AddMilk = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [quality, setQuality] = useState('Regular');
  const { goBack } = navigator();
  const { control, handleSubmit, formState } = useForm();
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const post = async ({ tambo, temp }: { tambo: string; temp: string }) => {
    setLoading(true);
    setErrorText('');

    const response: any = await Service.postMilk({
      tambo: Number.parseInt(tambo),
      fecha: moment(date).format('DD-MM-YYYY'),
      estado: quality,
      temp_entrada: Number.parseInt(temp),
    });

    if (response.status === 200) {
      goBack();
    }
    setErrorText(response.message[0]);
    setLoading(false);
  };

  const onError = () => {
    setErrorText('Complete todos los campos');
  };

  const onSelectDate = (item: Date) => {
    setOpen(false);
    setDate(item);
  };

  return (
    <TouchableWithoutFeedback style={styles.flexContainer} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.flexContainer}>
        <ScrollView contentContainerStyle={styles.flexContainer}>
          <TouchableOpacity style={styles.goBack} onPress={goBack}>
            <Text style={styles.close}>X</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={onSelectDate}
            onCancel={setOpen.bind(null, false)}
          />
          <View style={styles.container}>
            <View>
              <InputDescription>Nº Tambo</InputDescription>
              <TextInput
                control={control}
                keyboardType="number-pad"
                style={[
                  styles.input,
                  {
                    borderColor: formState.errors?.tambo ? 'red' : '#000',
                  },
                ]}
                name="tambo"
                rules={{ required: true }}
              />
              <InputDescription>Fecha de ingreso</InputDescription>
              <TouchableOpacity
                onPress={setOpen.bind(null, true)}
                style={[styles.input, { alignItems: 'center', justifyContent: 'center' }]}
              >
                <View style={styles.dateContainer}>
                  <Text style={styles.date}>{moment(date).format('DD/MM/YYYY H:mm A')}</Text>
                </View>
              </TouchableOpacity>

              <InputDescription>Estado</InputDescription>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={quality}
                  style={styles.picker}
                  onValueChange={(item) => setQuality(item)}
                >
                  <Picker.Item label="Mala" value="Mala" />
                  <Picker.Item label="Regular" value="Regular" />
                  <Picker.Item label="Buena" value="Buena" />
                </Picker>
              </View>
              <InputDescription>Temperatura de Entrada</InputDescription>
              <View style={styles.tempContainer}>
                <TextInput
                  control={control}
                  keyboardType="numeric"
                  style={[
                    styles.input,
                    {
                      flex: 1,
                      borderColor: formState.errors?.temp ? 'red' : '#000',
                    },
                  ]}
                  name="temp"
                  rules={{ required: true }}
                />
                <Text style={styles.temp}>°C</Text>
              </View>
            </View>
            <Text style={styles.errorCode}>{errorText}</Text>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <TouchableOpacity onPress={handleSubmit(post, onError)} style={styles.confirmButton}>
                <Text style={styles.confirm}>CONFIRMAR</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddMilk;
