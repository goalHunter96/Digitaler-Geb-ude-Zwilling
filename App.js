
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';



import index from '/app';
import Dashboard from './app/Dashboard';
import liste from './app/liste';
import search from './app/search';
import Tabs from './navigation/tabs';


/*const Tab = createMaterialBottomTabNavigator()*/
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
                

      </Stack.Navigator>
      <Stack.Navigator
        screenOptions={{
          headerBackButtonMenuEnabled: true,
          headerBackTitle: ' ',
          headerStyle: {
            backgroundColor: '#006EC7'
          },
        }}
        initialRouteName='index'>
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Mitarbeiterliste' component={liste} />
        <Stack.Screen name='Suche' component={search} />
      </Stack.Navigator>

      <Tabs />
    </NavigationContainer>
  )
}









/*
}*/