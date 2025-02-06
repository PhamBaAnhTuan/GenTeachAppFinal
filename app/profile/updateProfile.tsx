import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
// context
import { useStoreContext } from '@/context/Context';
// param
import { useGlobalSearchParams } from 'expo-router';
// actions
import { updateProfile } from '@/redux/actions';
// components
import Header from '@/components/Header'
import Input from '@/components/form/Input';
import Button from '@/components/form/Button';
// color
import { Colors } from '@/constants/Colors';

const UpdateProfile = () => {
   // context
   const { router, dispatch, useRedux, data, setData, resetForm } = useStoreContext();
   // redux
   const { user } = useRedux;
   useEffect(() => {
      if (user) {
         setData({
            firstName: user?.firstName,
            lastName: user?.lastName,
            phoneNumber: user?.phoneNumber,
            address: user?.address,
         })
      }
   }, [user])
   // handle update profile
   const handleUpdateProfile = () => {
      Alert.alert('Update profile', 'Are you sure?', [
         { text: 'No', onPress: () => { }, style: 'cancel' },
         {
            text: 'Yes', onPress: () => {
               dispatch(updateProfile(data, resetForm));
               router.back();
            }
         },
      ])
   }
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Edit your profile'
               headerRight={null}
            />
            <View>
               <Input
                  title='First name'
                  handleTextChange={(value: any) => setData({ ...data, firstName: value })}
                  keyboardType='default'
                  value={data.firstName}
                  secureTextEntry={false}
               />
               <Input
                  title='Last name'
                  handleTextChange={(value: any) => setData({ ...data, lastName: value })}
                  keyboardType='default'
                  value={data.lastName}
                  secureTextEntry={false}
               />
               <Input
                  title='Phone number'
                  handleTextChange={(value: any) => setData({ ...data, phoneNumber: value })}
                  keyboardType='default'
                  value={data.phoneNumber}
                  secureTextEntry={false}
               />
               <Input
                  title='Address'
                  handleTextChange={(value: any) => setData({ ...data, address: value })}
                  keyboardType='default'
                  value={data.address}
                  secureTextEntry={false}
               />
            </View>

            <View style={{position: 'absolute', bottom: 15, width: '100%'}}>
               <Button
                  title='Update'
                  onPress={handleUpdateProfile}
                  color={'green'}
               />
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default UpdateProfile

const styles = StyleSheet.create({})