import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import { ListItem, Button, Icon } from '@rneui/themed';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
// colors
import { Colors } from '@/src/constants/Colors';

interface Props {
   title: string,
   delete: () => void,
   play: () => void
}

const ListPodcast = (props: Props) => {
   return (
      <View style={{ marginVertical: 0 }}>
         <ListItem.Swipeable
         leftContent={(reset) => (
            <Button
               title="Play"
               onPress={() => {
                  props.play()
                  reset()
               }}
               icon={{ name: 'info', color: 'white' }}
               buttonStyle={{ minHeight: '100%', backgroundColor: 'green' }}
            />
         )}
            rightContent={(reset) => (
               <Button
                  title="Delete"
                  onPress={() =>{
                     props.delete()
                     reset()
                  }}
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
               />
            )}
         >
            <ListItem.Content>
               <ListItem.Title style={{ fontSize: 14, color: Colors.text }}>{props.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
         </ListItem.Swipeable>
      </View>
   )
}

export default ListPodcast

const styles = StyleSheet.create({})