import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 1,
    marginBottom: 6,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  tamboContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tambo: {
    fontSize: 24,
    fontWeight: '700',
  },
  date: {
    fontSize: 20,
    fontWeight: '700',
  },
  quality: {
    fontSize: 18,
    fontWeight: '700',
  },
  temp: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: '700',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  close: {
    fontSize: 23,
    marginLeft: 10,
    fontWeight: '700',
  },
  add: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 1,
    backgroundColor: 'green',
    borderRadius: 100,
    color: 'white',
  },
  flat: {
    paddingVertical: 10,
  },
});
