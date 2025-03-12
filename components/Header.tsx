import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

interface Props{
   title: string,
   backMethod: any,
   headerRight: any
}
const Header = (props: Props) => {
   return (
      <View style={styles.header}>
         <View style={styles.leftContainer}>
            <TouchableOpacity onPress={props.backMethod} style={styles.iconContainer}>
               <Ionicons name="chevron-back" size={23} color={Colors.text}/>
            </TouchableOpacity>
            <View>
               <Text style={{ fontWeight: 'bold', color: Colors.text, marginLeft: 10 }}>{props.title}</Text>
            </View>
         </View>
         <TouchableOpacity style={styles.iconContainer}>
            {props.headerRight}
         </TouchableOpacity>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   header: {
      // borderWidth: 1,
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
   },
   leftContainer:{
      height: '100%',
      width: '80%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between'
   },

   iconContainer:{
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   }
})