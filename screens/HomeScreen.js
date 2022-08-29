import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from '@env';


const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        <Image
          source={{ uri: 'https://links.papareact.com/gzs' }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where from?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});