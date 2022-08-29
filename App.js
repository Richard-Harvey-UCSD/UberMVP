import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import { store } from './store';


export default function App() {
  return (
    // check this later
    <SafeAreaProvider>
      <Provider store={store}>
        <TailwindProvider>
          <StatusBar style='auto' />
          <HomeScreen />
        </TailwindProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
