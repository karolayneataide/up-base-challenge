import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from './options';

import { Bookmarks } from '../screens/Bookmarks';
import { HiringScreen } from '../screens/Hiring';
import { HomeScreen } from '../screens/Home';
import { MyAccount } from '../screens/MyAccount';
import { ShiftsScreen } from '../screens/Shifts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStackScreen = () => (
  <Stack.Navigator initialRouteName="Hiring" screenOptions={screenOptions}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Hiring"
      component={HiringScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ headerTitle: 'Contratar' }}
    />
    <Tab.Screen name="Plantões" component={ShiftsScreen} />
    <Tab.Screen name="Favoritos" component={Bookmarks} />
    <Tab.Screen name="Minha conta" component={MyAccount} />
  </Tab.Navigator>
);

export default RootNavigator;
