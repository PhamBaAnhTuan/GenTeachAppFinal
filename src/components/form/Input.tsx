import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { Colors } from '@/src/constants/Colors';

interface Props {
   title: string,
   handleTextChange: any,
   keyboardType: any,
   value: string,
   secureTextEntry: boolean
}
const Input = (props: Props) => {
   return (
      <View style={styles.container}>
         <Text style={[styles.title, { color: Colors.text }]}>{props.title}</Text>
         <TextInput style={[styles.textInput, { color: Colors.text, backgroundColor: Colors.lightPink }]}
            keyboardType={props.keyboardType}
            value={props.value}
            onChangeText={props.handleTextChange}
            secureTextEntry={props.secureTextEntry}
         />
      </View >
   )
}

export default Input

const styles = StyleSheet.create({
   container: {
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
   textInput: {
      height: 45,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 7,
      paddingLeft: 10,
   },
})