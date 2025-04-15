import {
   ActivityIndicator,
   Alert, Image,
   StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View
} from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/src/context/Context';
// actions
import { signUpAction } from '@/src/store/slices/authSlice';
// icons
import { Fontisto } from '@expo/vector-icons';
// components
import InputField from '@/src/components/form/InputField';
import Button from '@/src/components/form/Button';
// colors
import { Colors } from '@/src/constants/Colors';
// hooks
import { useAuth } from '../hooks/useAuth';
import { dispatch } from '../hooks/useDispatch';

const signup = () => {
   // auth
   const { isAuthenticated, accessToken, user, isLoading } = useAuth();
   // handle check remember
   const [remember, setRemember]: any = useState('checkbox-passive')
   const handleRemember = () => {
      remember == 'checkbox-passive' ? setRemember('checkbox-active') : setRemember('checkbox-passive');
   };
   // handle signup
   // form state
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const signUp = () => {
      dispatch(signUpAction({ username: userName, password: password }));
   }
   // log
   const log = () => console.log(
      'User: ', user?.username,
      '\nIs authenticated: ', isAuthenticated,
   )
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Image style={styles.bgImg} source={require('../assets/background/logo1.png')} />

            <View style={styles.form}>
               <InputField
                  title='Username'
                  keyboardType={'email-address'}
                  isPasswordInput={false}
                  value={userName}
                  handleTextChange={(text: string) => setUserName(text)}
               />
               <InputField
                  title='Password'
                  keyboardType={'password'}
                  isPasswordInput={true}
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
               {isLoading
                  ? (<ActivityIndicator size='large' color={Colors.pink} style={{ height: 45, width: '100%', }} />)
                  : (<Button
                     title='SIGN UP'
                     color={Colors.pink}
                     onPress={signUp}
                  />)
               }
            </View>

            <View style={styles.signInTextContainer}>
               <Text style={{ fontWeight: 'bold', color: Colors.text }}>Have an account yet? </Text>
               <TouchableOpacity onPress={() => router.push('/signin')}>
                  <Text style={{ color: Colors.pink, fontWeight: 'bold' }}>Sign in</Text>
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default signup

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
   signInTextContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   }
})