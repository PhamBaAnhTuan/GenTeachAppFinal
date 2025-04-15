import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import { ListItem, Button, Icon } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
// colors
import { Colors } from '@/src/constants/Colors';

interface Props {
   title: string,
   icon: any,
   info: () => void,
   delete: () => void
}
const ListItems = (props: Props) => {
   return (
      <ListItem.Swipeable
         style={styles.container}
         leftContent={(reset) => (
            <Button
               title="Update"
               onPress={() => {
                  props.info()
                  reset()
               }}
               icon={{ name: 'edit', color: 'white' }}
               buttonStyle={{ minHeight: '100%' }}
            />
         )}
         rightContent={(reset) => (
            <Button
               title="Delete"
               onPress={() => {
                  props.delete()
                  reset()
               }}
               icon={{ name: 'delete', color: 'white' }}
               buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
         )}
      >
         <ListItem.Content>
            <ListItem.Title style={{fontSize: 14, color: Colors.text}}>{props.title}</ListItem.Title>
         </ListItem.Content>
         <ListItem.Chevron />
      </ListItem.Swipeable>
   )
}

export default ListItems

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: '100%',
   }
})