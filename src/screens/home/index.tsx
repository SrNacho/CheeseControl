import React from 'react';
import {Text, View} from 'react-native';

import Service from '../../provider/Services/index';

const Home = () => {
  const algo = async () => {
    const response = await Service.fetchExample();
    console.log(response);
  };
  algo();

  return (
    <View>
      <Text>asdasd</Text>
    </View>
  );
};

export default Home;
