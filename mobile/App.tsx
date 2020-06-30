import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar, AppRegistry} from 'react-native';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import Home from './src/pages/Home';

// JSX: É o XML dentro do Javascript
export default function App() {
  const [fontsLoaded] = useFonts({  
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold  
  }); 
  if (!fontsLoaded) {
    return 
      <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Home />
    </>  
  );
};