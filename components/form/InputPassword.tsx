import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// context
import { useStoreContext } from '@/context/Context';
// colors
import { Colors } from '@/constants/Colors';
// icons
import { Feather } from '@expo/vector-icons';

interface Props {
   title: string,
   handleTextChange: any,
   keyboardType: any,
   value: string,
}
const InputPassword = (props: Props) => {
   const [icon, setIcon]:any = useState('eye')
   const [secureEntry, setSecureEntry] = useState(true)
   const handleIcon = () =>{
      setIcon(icon === 'eye'? 'eye-off' : 'eye')
      setSecureEntry(!secureEntry)
   }
   return (
      <View style={styles.container}>
         <Text style={[styles.title, { color: Colors.text }]}>{props.title}</Text>
         <View style={[styles.inputContainer, {backgroundColor: Colors.lightPink}]}>
            <TextInput style={[styles.textInput, { color: Colors.text, backgroundColor: Colors.lightPink }]}
               keyboardType={props.keyboardType}
               value={props.value}
               onChangeText={props.handleTextChange}
               secureTextEntry={secureEntry}
            />
            <TouchableOpacity style={styles.icon} onPress={handleIcon}>
               <Feather name={icon} size={24} color="black" />
            </TouchableOpacity>
         </View>
      </View >
   )
}

export default InputPassword

const styles = StyleSheet.create({
   container:{
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      marginBottom: 10,
   },
   title: {
      width: '95%',
      fontSize: 13,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingBottom: 5,
   },

   inputContainer:{
      height: 45,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   textInput: {
      height: 45,
      width: '87%',
      borderRadius: 7,
      paddingLeft: 10,
      // borderWidth: 1,
   },
   icon:{
      height: 45,
      width: '13%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
   }
})