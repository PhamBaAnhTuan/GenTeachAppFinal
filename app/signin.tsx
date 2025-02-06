import {
   Alert, Image,
   StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View,
   ActivityIndicator
} from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// context
import { useStoreContext } from '@/context/Context';
// actions
import { getAction, signInAction, signOutAction } from '@/redux/actions';
// icons
import { Fontisto } from '@expo/vector-icons';
// components
import Input from '@/components/form/Input';
import Button from '@/components/form/Button';
// colors
import { Colors } from '@/constants/Colors';
import Constants from 'expo-constants'

const signin = () => {
   const API_URL = Constants.expoConfig?.extra?.API_URL;
   // context
   const {
      useRedux, dispatch, router,
      email, userName, password, setEmail, setUserName, setPassword, resetAuth,
      loading, setLoading,
      rememberUser, setRememberUser
   } = useStoreContext();
   // redux
   const { isAuthenticated, user, accessToken, video } = useRedux;
   // handle check remember
   const [remember, setRemember]: any = useState('checkbox-passive')
   const handleRemember = () => {
      remember == 'checkbox-passive' 
      ? (setRemember('checkbox-active'), setRememberUser(true))
      : (setRemember('checkbox-passive'), setRememberUser(false));
   };
   // handle signin
   const signIn = () => {
      dispatch(signInAction(userName, password, resetAuth, setLoading, rememberUser));
   }
   // log
   const log = () => console.log(
      'User: ', user?.username,
      '\nAccess token: ', accessToken,
      '\nIs authenticated: ', isAuthenticated,
      '\nURL: ', API_URL,
      '\nRemember: ', rememberUser,
      '\nLoading: ', loading,
   )
   return (
      <SafeAreaView style={{ flex: 1}}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Image style={styles.bgImg} source={require('../assets/background/logo1.png')} />

            <View style={styles.form}>
               <Input
                  title='Username'
                  keyboardType={'email-address'}
                  secureTextEntry={true}
                  value={userName}
                  handleTextChange={(text: string) => setUserName(text)}
               />
               <Input
                  title='Password'
                  keyboardType={'password'}
                  secureTextEntry={true}
                  value={password}
                  handleTextChange={(text: string) => setPassword(text)}
               />
            </View>

            <View style={styles.rememberContainer}>
               <TouchableOpacity style={styles.rmbWrapLeft} onPress={handleRemember}>
                  <Fontisto name={remember} size={20} color={Colors.text} />
                  <Text style={{ fontSize: 12, paddingLeft: 5, color: Colors.text }}>Remember me</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={log} >
                  <Text style={{ color: 'tomato', fontSize: 12 }}>Forgot password?</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
               {loading
                  ? (<ActivityIndicator size='large' color={Colors.pink} style={{height: 45, width: '100%',}} />)
                  : (<Button
                     title='Sign in'
                     color={Colors.pink}
                     onPress={signIn}
                  />)
               }
            </View>

            <View style={styles.signUpTextContainer}>
               <Text style={{ fontWeight: 'bold', color: Colors.text }}>Not a member? </Text>
               <TouchableOpacity onPress={() => router.push('signup')}>
                  <Text style={{ color: Colors.pink, fontWeight: 'bold' }}>Sign up</Text>
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default signin

const styles = StyleSheet.create({
   // bg img container
   bgImg: {
      height: '25%',
      width: '100%',
      resizeMode: 'contain'
   },


   // form container
   form: {
      height: 250,
      width: '100%',
      justifyContent: 'center',
      // borderWidth: 1
   },


   // remember container
   rememberContainer: {
      // borderWidth: 1,
      height: 30,
      width: '95%',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
   },
   rmbWrapLeft: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },


   // btn container
   btnContainer: {
      paddingVertical: 100,
      // borderWidth: 1
   },

   // other method
   signUpTextContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   }
})