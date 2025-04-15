import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useGlobalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
// context
import { useStoreContext } from '@/src/context/Context';
// components
import Input from '@/src/components/form/Input';
import Header from '@/src/components/Header';
import Button from '@/src/components/form/Button';
// icons
import { Entypo } from '@expo/vector-icons';
// colors
import { Colors } from '@/src/constants/Colors';

const VideoDetail = () => {
   // params
   const { param }: any = useGlobalSearchParams();
   // Parse the 'video' params
   const video = useMemo(() => JSON.parse(param), [param]);

   // handle form
   const [form, setForm]: any = useState({});
   useEffect(() => {
      if (video) {
         setForm({
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
   const log = () => console.log(form)
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
               backMethod={() => router.back()}
               headerRight={null}
            />
            <View>
               <Input
                  title='Caption'
                  handleTextChange={(value: any) => setForm({ ...form, caption: value })}
                  keyboardType='default'
                  value={form.caption}
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