import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import {About} from '../screens/About'
import {Settings} from '../screens/Settings'

const {
  Navigator,
  Screen
} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
   <Screen name="Home" component={Home} />
 {/*    <Screen name="Settings" component={Settings} /> */}
   {/*  <Screen name="About" component={About} />  */} 
    </Navigator>
  );
}