import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// colors
import { Colors } from '@/src/constants/Colors';

interface Props{
   onPress: any,
   img: any,
   name: string,
   author: string,
}
const PodcastCard = (props: Props) => {
   return (
      <TouchableOpacity style={[styles.container, {backgroundColor: Colors.surface}]} onPress={props.onPress}>
         <View style={styles.podcastImg}>
            <Image style={{height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 7}} source={props.img}/>
         </View>
         <View style={styles.in4Container}>
            <Text style={[styles.podcastName, {color: Colors.text}]}>{props.name}</Text>
            <Text style={[styles.authorName, {color: Colors.text}]}>{props.author}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default PodcastCard

const styles = StyleSheet.create({
   container:{
      height: 'auto',
      width: 160,
      // borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: 3,
      padding: 5,
      justifyContent: 'space-evenly',
   },

   podcastImg:{
      height: 150,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },


   // In4 container
   in4Container:{
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // paddingLeft: 5
   },
   podcastName:{
      fontSize: 14,
      fontWeight: 'bold'
   },
   authorName:{
      fontSize: 12,
      fontWeight: '400'
   }
})