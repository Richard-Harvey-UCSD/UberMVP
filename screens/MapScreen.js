import { View, Text } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map';


const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>MapScreen</Text>

      <View className='h-1/2'>
        <Map />
      </View>

      <View className='h-1/2'>
        <Stack.Navigator>
          
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;