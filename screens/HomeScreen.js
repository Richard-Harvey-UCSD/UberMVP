import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';


const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        {/* <Image
          source={{ uri: 'https://links.papareact.com/gzs' }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
            marginLeft: 6
          }}
        /> */}

        <Text className='text-5xl font-semibold p-2'>
          Uber Carpool
        </Text>

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          onPress={(data, details = null) => {
            // console.log('data: ', data);
            // console.log('details: ', details);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          returnKeyType={'search'}
          placeholder='Where from?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});