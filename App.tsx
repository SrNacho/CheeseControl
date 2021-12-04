import React from 'react';
import { Milk, AddMilk, Selector, Cheese, AddCheese } from './src/screens/index';
import routes from './src/config/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={routes.SELECTOR} component={Selector} />
          <Stack.Screen name={routes.MILK} component={Milk} />
          <Stack.Screen name={routes.ADD_MILK} component={AddMilk} />
          <Stack.Screen name={routes.CHEESE} component={Cheese} />
          <Stack.Screen name={routes.ADD_CHEESE} component={AddCheese} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
