import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams, router } from 'expo-router';

import Lesson from './Lesson';
import HomeWork from './HomeWork';
import Information from './Information';
// context
import { useStoreContext } from '@/context/Context';
// icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// components
import Header from '@/components/Header';
// colors
import { Colors } from '@/constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {;
   // params
   const { param }: any = useGlobalSearchParams();
   // parse params
   const selectedCourse = JSON.parse(param)
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title={selectedCourse.name}
               backMethod={()=> router.back()}
               headerRight={null}
            />

            <Tab.Navigator
               // initialRouteName='Lesson'
               screenOptions={{
                  tabBarStyle: {
                     backgroundColor: 'plum'
                  },
                  tabBarLabelStyle: {
                     fontSize: 13,
                     fontWeight: 'bold'
                  },
                  tabBarActiveTintColor: Colors.text,
                  tabBarInactiveTintColor: 'lightgray'
               }}>
               <Tab.Screen name="Lesson" component={Lesson} initialParams={{ selectedCourse: selectedCourse }} />
               <Tab.Screen name="Home work" component={HomeWork} initialParams={{ selectedCourse: selectedCourse }} />
               <Tab.Screen name="Information" component={Information} initialParams={{ selectedCourse: selectedCourse }} />
            </Tab.Navigator>
         </LinearGradient>
      </SafeAreaView>
   );
}

export default TopTabNavigator;

const styles = StyleSheet.create({

})