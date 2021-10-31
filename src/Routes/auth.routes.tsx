import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../Screens/SignIn';


const { Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator
    >
      <Screen 
        options={{
          headerShown: false,
        }}
        name="SignIn" 
        component={SignIn}
        />
    </Navigator>
  )
}