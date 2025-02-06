import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { useStoreContext } from '@/context/Context';
import { Colors } from '@/constants/Colors';

interface Props{
   title: string,
   headerRight: any
}
const Header = (props: Props) => {
   // context
   const { router } = useStoreContext();
   return (
      <View style={styles.header}>
         <View style={styles.leftContainer}>
            <TouchableOpacity onPress={() => router.back()} style={styles.iconContainer}>
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
      paddingHorizontal: 10,
   },
   leftContainer:{
      height: '100%',
      width: '50%',
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