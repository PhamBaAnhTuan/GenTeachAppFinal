import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/src/context/Context';
// icons
import { AntDesign, Ionicons } from '@expo/vector-icons';
// components
import ListItems from '@/src/components/ListItems';
import Header from '@/src/components/Header';
// colors
import { Colors } from '@/src/constants/Colors';
// actions
import { deleteAction } from '@/src/store/actions';
// hooks
import { useAuth } from '@/src/hooks/useAuth';
import { dispatch } from '@/src/hooks/useDispatch';

const VideoListScreen = () => {
   // auth
   const { isAuthenticated, accessToken, user, isLoading } = useAuth();
   // handle remove video
   const [data, setData]: any = useState({});
   const [isRemoving, setIsRemoving] = useState(false);
   useEffect(() => {
      if (isRemoving && data?.id) {
         handleRemoveVideo();
         setIsRemoving(false);
      }

   }, [data, isRemoving]);
   const handleRemoveVideo = () => {
      Alert.alert('Remove this video', `Are you sure to remove ${data?.caption}?`, [
         {
            text: 'No', onPress: () => {
               setData({})
            }, style: 'cancel'
         },
         {
            text: 'Yes', onPress: () => {
               dispatch(deleteAction('video', 'VIDEO', data.id, data.caption, accessToken));
            }
         },
      ])
   }
   const log = () => console.log('data: ', data);
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Video List'
               backMethod={() => router.replace('/profile')}
               headerRight={null}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.videoContainer}>
                  {video ? video.map((vid: any) => (
                     <ListItems
                        key={vid.id}
                        delete={() => {
                           setData(vid),
                              setIsRemoving(true)
                        }}
                        info={() => router.push(
                           {
                              pathname: '/video/videoDetail',
                              params: { param: JSON.stringify(vid) }
                           }
                        )}
                        icon={'home'}
                        title={vid.caption}
                     />
                  ))
                     : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                           <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>No videos found.</Text>
                        </View>
                     )
                  }
               </View>
            </ScrollView>
            <TouchableOpacity style={[styles.addIconContainer, { backgroundColor: Colors.lightPink }]} onPress={log}>
               <Ionicons name="add" size={27} color={Colors.text} />
            </TouchableOpacity>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default VideoListScreen

const styles = StyleSheet.create({
   videoContainer: {
      height: 'auto',
      width: '100%',
   },

   addIconContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex: 999,
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
   }
})