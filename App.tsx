import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/Global/Styles/theme';
import { SignIn } from './src/Screens/SignIn';
import { Routes } from './src/Routes/index.routes';
import { AuthProvider } from './src/Hooks/auth';

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
      <ThemeProvider theme={ theme }>
          <AuthProvider>
           <Routes />
          </AuthProvider>
      </ThemeProvider>
   
  );
};
