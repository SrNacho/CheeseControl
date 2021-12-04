import { CommonActions, useNavigation } from '@react-navigation/native';
import { RoutesTypes } from '../config/routes';

export const navigator = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const goToPage = (name: RoutesTypes, params = {}) => {
    navigation.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  };

  const resetNavigation = (name: RoutesTypes) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: name }],
      }),
    );
  };

  return { goBack, goToPage, resetNavigation };
};

export default { navigator };
