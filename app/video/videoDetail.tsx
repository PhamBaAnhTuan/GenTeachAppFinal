import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { useGlobalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
// context
import { useStoreContext } from '@/context/Context';
// components
import Input from '@/components/form/Input';
import Header from '@/components/Header';
import Button from '@/components/form/Button';
// icons
import { Entypo } from '@expo/vector-icons';
// colors
import { Colors } from '@/constants/Colors';

const VideoDetail = () => {
   // context
   const { dispatch, useRedux, data, setData } = useStoreContext();
   // params
   const { param }: any = useGlobalSearchParams();
   // Parse the 'video' params
   const video = useMemo(() => JSON.parse(param), [param]);

   useEffect(() => {
      if (video) {
         setData({
            caption: video?.caption,
            url: video?.url
         })
      }
   }, [video])
   // handle update video
   const handleUpdateVideo = () => {
      Alert.alert('Update video', 'Are you sure?', [
         { text: 'No', onPress: () => { }, style: 'cancel' },
         {
            text: 'Yes', onPress: log
         },
      ])
   }
   const log = () => console.log(data)
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Video Detail'
               backMethod={()=> router.back()}
               headerRight={null}
            />
            <View>
               <Input
                  title='Caption'
                  handleTextChange={(value: any) => setData({ ...data, caption: value })}
                  keyboardType='default'
                  value={data.caption}
                  secureTextEntry={false}
               />
            </View>

            <View style={{ position: 'absolute', bottom: 15, width: '100%' }}>
               <Button
                  title='Update'
                  onPress={handleUpdateVideo}
                  color={'green'}
               />
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default VideoDetail

const styles = StyleSheet.create({})