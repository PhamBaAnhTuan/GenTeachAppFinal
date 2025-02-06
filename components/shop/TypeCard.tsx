import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useStoreContext } from '@/context/Context';
// colors
import { Colors } from '@/constants/Colors';

interface Props {
   icon: any,
   typeName: string,
   onPress: any
}
const TypeCard = (props: Props) => {
   // Theme
   const {theme} = useStoreContext();
   return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
         <View style={[styles.imgContainer, {backgroundColor: Colors.surface}]}>
            <Image style={styles.icon} source={props.icon}/>
         </View>
         <Text style={[styles.text, {color: Colors.text}]}>{props.typeName}</Text>
      </TouchableOpacity>
   )
}

export default TypeCard

const styles = StyleSheet.create({
   container:{
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 1
   },

   imgContainer:{
      height: 50,
      width: 50,
      // borderWidth: 1,
      borderRadius: 10,
      borderColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center'
   },

   icon:{
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
   },

   text:{
      // borderWidth: 1,
      width: 70,
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center'
   }
})