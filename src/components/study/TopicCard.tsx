import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useStoreContext } from '@/src/context/Context';
// colors
import { Colors } from '@/src/constants/Colors';


interface Props{
   onPress: any,
   topicTitle: string,
}

const TopicCard = (props: Props) => {
   return (
      <TouchableOpacity style={[styles.container, {backgroundColor: Colors.lightPink}]} onPress={props.onPress}>
         <Text style={[styles.topicTitle, {color: Colors.text}]}>{props.topicTitle}</Text>
      </TouchableOpacity>
   )
}

export default TopicCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 'auto',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 3
   },

   topicTitle: {
      fontSize: 13,
      fontWeight: 'bold'
   }
})