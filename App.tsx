import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/Global/Styles/theme';
import { AppRoutes } from './src/Routes/app.routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  //fonts false 
  if(!fontsLoaded){
    return <AppLoading />
  };
  return ( 
    <NavigationContainer>
      <ThemeProvider theme={ theme }>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
   
  );
};
