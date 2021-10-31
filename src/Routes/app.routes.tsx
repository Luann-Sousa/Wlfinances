import * as React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard }  from '../Screens/Dashboard';
import { Register } from '../Screens/Register';
import { Resume } from '../Screens/Resume';
import { Platform } from 'react-native';

export type RootBottomTabParamList = {
  Dashboard: undefined,
  Register: undefined,
  Resume: undefined;

};
const { Navigator, Screen }= createBottomTabNavigator<RootBottomTabParamList>();


export  function AppRoutes() {
  //usando meu thema global
  const theme = useTheme();
  return (
  
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.secudary,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle:{
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 88,
          },
        }}
      >
        <Screen 
          name="Dashboard" 
          component={ Dashboard }
          options={{
            tabBarIcon: (({ size, color})=>(
              <MaterialIcons 
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            )),
          }}
        />
        <Screen 
          name="Register" 
          component={ Register } 
          options={{
            tabBarIcon: (({ size, color})=>(
              <MaterialIcons 
                name="attach-money"
                size={size}
                color={color}
              />
            )),
          }}
        />
        <Screen name="Resume" 
          component={ Resume } 
          options={{
            tabBarIcon: (({ size, color})=>(
              <MaterialIcons 
                name="pie-chart"
                size={size}
                color={color}
              />
            )),
          }}
        />
      </Navigator>
  );
};