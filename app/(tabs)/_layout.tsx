import React from 'react';
import { Platform, useColorScheme } from 'react-native';
// router
import { Tabs } from 'expo-router';
// Colors
import { Colors } from '@/constants/Colors';
// icons
import { Ionicons } from '@expo/vector-icons';
import { useStoreContext } from '@/context/Context';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "index") {
            [iconName, color, size] = focused
              ? ['home', 'plum', 27]
              : ['home-outline', 'grey', 20];
          } else if (route.name === "shop") {
            [iconName, color, size] = focused
              ? ['cart', 'plum', 27]
              : ['cart-outline', 'grey', 20];
          } else if (route.name === "chat") {
            [iconName, color, size] = focused
              ? ['chatbubble-sharp', 'plum', 27]
              : ['chatbubble-outline', 'grey', 20];
          } else if (route.name === "study") {
            [iconName, color, size] = focused
              ? ['book', 'plum', 27]
              : ['book-outline', 'grey', 20];
          } else if (route.name === "podcast") {
            [iconName, color, size] = focused
              ? ['headset', 'plum', 27]
              : ['headset-outline', 'grey', 20];
          }
          // You can return any React element here, including custom icons
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Colors.lightPink,
        tabBarInactiveBackgroundColor: Colors.lightPink,
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
        },

      })}

    >
      <Tabs.Screen
        name="chat"
      />
      <Tabs.Screen
        name="shop"
      />
      <Tabs.Screen
        name="index"
      />
      <Tabs.Screen
        name="study"
      />
      <Tabs.Screen
        name="podcast"
      />
    </ Tabs>
  );
}
