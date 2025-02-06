import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, StyleSheet } from "react-native";;
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface Props{
   onPress: any,
   icon: any,
   name: string
}
const SettingCard = (props: Props) => {
   return (
      <TouchableOpacity onPress={props.onPress}>
         <View style={styles.settingContainer}>
            <View style={styles.wrapLeft}>
               <View>{props.icon}</View>
               <Text style={styles.name}>{props.name}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.text} />
         </View>

         <View style={{ height: 0.7, width: 330, backgroundColor: 'black', alignSelf: 'center', opacity: 0.3 }}></View>
      </TouchableOpacity>
   );
};

export default SettingCard;

const styles = StyleSheet.create({
   settingContainer: {
      height: 55,
      width: '98%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      // borderWidth: 1,
   },
   wrapLeft: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
      paddingHorizontal: 10
   },

   name: {
      // fontSize: 15,
      width: 170,
      marginLeft: 20,
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#404040'
   },
})