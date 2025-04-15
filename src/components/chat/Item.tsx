import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// colors
import { Colors } from '@/src/constants/Colors';

interface Props {
   onPress: any,
   icon: any,
   name: string,
}

const Item = (props: Props) => {
   return (
      <TouchableOpacity style={styles.item} onPress={props.onPress}>
         {props.icon}
         <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: Colors.text }}>{props.name}</Text>
      </TouchableOpacity>
   )
}

export default Item

const styles = StyleSheet.create({
   item: {
      height: 'auto',
      width: 80,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
})