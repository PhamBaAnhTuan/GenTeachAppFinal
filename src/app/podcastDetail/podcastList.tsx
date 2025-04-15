import { Alert, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
// icons
import { AntDesign, Ionicons } from '@expo/vector-icons';
// components
import ListPodcast from '@/src/components/podcast/ListPodcast';
import Header from '@/src/components/Header';
// colors
import { Colors } from '@/src/constants/Colors';
// actions
import { deleteAction } from '@/src/store/actions';
// hooks
import { useAuth } from '@/src/hooks/useAuth';
import { dispatch } from '@/src/hooks/useDispatch';

const PodcastListScreen = () => {
   // auth
   const { podcast } = useAuth();
   // handle play podcast
   const [data, setData]: any = useState({});
   const handlePlay = () => {
      ToastAndroid.show(`Playing ${data.name}`, ToastAndroid.SHORT)
   }
   // handle remove podcast
   const handleRemoveVideo = () => {
      Alert.alert('Remove this podcast', 'Are you sure?', [
         { text: 'No', onPress: () => { }, style: 'cancel' },
         {
            text: 'Yes', onPress: () => {
               // dispatch(deleteAction('video', 'VIDEO', data.id, data.caption, accessToken));
               console.log('delete', data.name)
            }
         },
      ])
   }
   const log = () => console.log(data);
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Podcast List'
               backMethod={null}
               headerRight={null}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.videoContainer}>
                  {podcast && podcast.map((item: any, index: number) => (
                     <ListPodcast
                        key={index}
                        play={() => {
                           setData(podcast[index])
                           handlePlay()
                        }}
                        delete={() => {
                           setData(podcast[index])
                           handleRemoveVideo()
                        }}
                        title={item.name}
                     />
                  ))}
               </View>
            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default PodcastListScreen

const styles = StyleSheet.create({
   videoContainer: {
      height: 'auto',
      width: '100%',
   },
})