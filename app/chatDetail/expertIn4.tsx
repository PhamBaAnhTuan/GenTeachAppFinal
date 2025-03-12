import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalSearchParams, router } from 'expo-router';
// icons
import { AntDesign, Ionicons, Feather, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// components
import SettingCard from '@/components/home/SettingCard';
import Item from '@/components/chat/Item';
import Header from '@/components/Header';
// colors
import { Colors } from '@/constants/Colors';


const ExpertIn4 = () => {
   // params
   const { param }: any = useGlobalSearchParams();
   // parse the 'video' params
   const selectedExpert = JSON.parse(param);
   // state
   const [notice, setNotice]:any = useState('Off');
   const [icon, setIcon]:any = useState<string>('notifications-outline');
   const toggleNotice = () => {
      setNotice(notice === 'On' ? 'Off' : 'On');
      setIcon(icon === 'notifications-outline' ? 'notifications-off-outline' : 'notifications-outline');
      ToastAndroid.show(`Notification ${notice}`, ToastAndroid.SHORT);
   };
   const log = () => console.log('expert in4: ', selectedExpert)
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <Header
               title={selectedExpert?.name}
               backMethod={()=>router.back()}
               headerRight={null}
            />

            <View style={styles.expertIn4Container}>
               <Image style={styles.avt} source={{ uri: selectedExpert?.img }} />
               <Text style={[styles.name, {color: Colors.text}]}>{selectedExpert?.name}</Text>
            </View>

            <View style={styles.optionContainer}>
               <Item
                  onPress={log}
                  icon={<Ionicons name="person-outline" size={24} color={Colors.text} />}
                  name='Profile'
               />
               <Item
                  onPress={null}
                  icon={<Feather name="search" size={24} color={Colors.text} />}
                  name='Search'
               />
               <Item
                  onPress={toggleNotice}
                  icon={<Ionicons name={icon} size={24} color={Colors.text} />}
                  name='Notification'
               />
               <Item
                  onPress={null}
                  icon={<Entypo name="dots-three-horizontal" size={24} color={Colors.text} />}
                  name='More'
               />
            </View>

            <View style={styles.itemContainer}>
               <SettingCard
                  onPress={null}
                  name='Theme'
                  icon={<MaterialCommunityIcons name="theme-light-dark" size={24} color={Colors.text} />}
               />
               <SettingCard
                  onPress={() => router.push({
                     pathname: './booking',
                     params: { param: JSON.stringify(selectedExpert) }
                  })}
                  name='Booking'
                  icon={<FontAwesome name="calendar-check-o" size={24} color={Colors.text} />}
               />
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default ExpertIn4

const styles = StyleSheet.create({
   expertIn4Container: {
      height: '25%',
      width: 'auto',
      alignItems: "center",
      justifyContent: 'center',
      // borderWidth: 1
   },
   avt: {
      height: 90,
      width: 90,
      // borderWidth: 1,
      marginBottom: 10,
      borderRadius: 50
   },
   name: {
      fontSize: 20,
      fontWeight: 'bold',
      // borderWidth: 1
   },

   optionContainer: {
      height: '10%',
      width: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },
   item: {
      height: 'auto',
      width: 80,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   itemContainer: {
      height: 'auto',
      width: '97%',
      borderWidth: 1,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 10
   }
})