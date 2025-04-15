import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStoreContext } from '@/src/context/Context';
import { Colors } from '@/src/constants/Colors';

interface Props{
   title: string,
   onPress: any,
   color: any
}
const Button = (props: Props) => {
   return (
      <TouchableOpacity style={[styles.signInBtn, {backgroundColor: props.color}]} onPress={props.onPress}>
         <Text style={[styles.signInText, { color: Colors.onText }]}>{props.title}</Text>
      </TouchableOpacity>
   )
}

export default Button

const styles = StyleSheet.create({
   signInBtn: {
      height: 45,
      width: '95%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      // borderWidth: 1,
   },
   signInText: {
      fontSize: 14,
      fontWeight: 'bold',
   },
})