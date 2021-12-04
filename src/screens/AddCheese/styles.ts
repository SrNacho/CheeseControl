import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

export const InputDescription = styled(Text)({
  fontSize: 18,
  fontWeight: '700',
  marginLeft: 6,
});

export const styles = StyleSheet.create({
  confirm: {
    fontSize: 20,
    color: '#fff',
  },
  flexContainer: {
    flex: 1,
  },
  goBack: {
    margin: 10,
  },
  close: {
    fontSize: 23,
    fontWeight: '700',
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    backgroundColor: '#dbdbdb',
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#dbdbdb',
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  picker: {
    fontSize: 20,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    fontSize: 38,
    fontWeight: '700',
    marginLeft: 6,
  },
  errorCode: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
  },
  confirmButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
});
