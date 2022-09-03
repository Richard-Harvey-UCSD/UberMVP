import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';


const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
  {
    id: '789',
    icon: 'car',
    location: 'Shop',
    destination: 'London Bridge, London, UK',
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View
          className='bg-gray-200'
          style={{ height: 0.5 }}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity className='flex-row items-center p-5'>
          <View className='mr-4 rounded-full bg-gray-300 p-3'>
            <Icon
              name={item.icon}
              type='ionicon'
              color='white'
              size={18}
            />
          </View>
          <View>
            <Text className='font-semibold text-lg'>{item.location}</Text>
            <Text className='text-gray-500'>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;