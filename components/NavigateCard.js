import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from '@env';


const NavigateCard = () => {
  return (
    <SafeAreaView className='bg-white flex-1'>
      <Text className='text-center py-5 text-xl'>Good Morning, Richard</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
            <GooglePlacesAutocomplete
              styles={toInputBoxStyles}
              placeholder='Where to?'
              fetchDetails={true}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
              }}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
});