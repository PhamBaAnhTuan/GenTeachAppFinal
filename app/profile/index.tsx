import React from 'react';
import {
   Alert, Image, StyleSheet, Text, TouchableOpacity, View,
   ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// icons
import {
   AntDesign, Entypo, Feather, FontAwesome5,
   Fontisto, Ionicons, MaterialIcons
} from '@expo/vector-icons'
// context
import { useStoreContext } from '@/context/Context';
// components
import SettingCard from '@/components/home/SettingCard';
import Header from '@/components/Header';
// actions
import { signOutAction } from '@/redux/actions';
// colors
import { Colors } from '@/constants/Colors';

const ProfileScreen = () => {
   // context
   const { useRedux, dispatch } = useStoreContext();
   // redux
   const { user, accessToken, isAuthenticated, video } = useRedux;
   // handle signout
   const handleSignOut = () => {
      Alert.alert(
         'Sign Out',
         'Are you sure you want to sign out?',
         [
            { text: 'Cancel', style: 'cancel' },
            {
               text: 'OK', onPress: () => {
                  dispatch(signOutAction());
               }
            },
         ],
         // { cancelable: true }
      )
   };
   // log
   const log = () => console.log(
      'User: ', user,
      '\nAccess token: ', accessToken,
      '\nIs authenticated: ', isAuthenticated,
   );
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Your Profile'
               backMethod={() => router.back()}
               headerRight={null}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.profileImgContainer}>
                  <Image
                     style={styles.profileImg}
                     source={require("../../assets/background/logo2.png")}
                     resizeMode="center"
                  />

                  <View style={{ marginLeft: 5 }}>
                     <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.text }}>{user?.username || 'TuanPham'}</Text>
                     <Text style={{ color: Colors.text }}>{user?.email || `${user?.username}@gmail.com`}</Text>
                  </View>

                  <TouchableOpacity onPress={() => router.push('/profile/updateProfile')}>
                     <Feather name="edit" size={24} color={Colors.text} />
                  </TouchableOpacity>
               </View>

               <View style={styles.in4Container}>
                  <View style={styles.textWrap}>
                     <Text style={[styles.number, { color: Colors.text }]}>0</Text>
                     <Text style={[styles.text, { color: Colors.text }]}>Follower</Text>
                  </View>
                  <View style={styles.textWrap}>
                     <Text style={[styles.number, { color: Colors.text }]}>0</Text>
                     <Text style={[styles.text, { color: Colors.text }]}>Following</Text>
                  </View>
                  <View style={styles.textWrap}>
                     <Text style={[styles.number, { color: Colors.text }]}>0</Text>
                     <Text style={[styles.text, { color: Colors.text }]}>Post</Text>
                  </View>
               </View>


               <View style={[styles.settingContainer]}>
                  <SettingCard
                     onPress={log}
                     name="Follower"
                     icon={<Fontisto name="persons" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Following"
                     icon={<Fontisto name="person" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Posts"
                     icon={<Entypo name="documents" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={() => router.push('/video')}
                     name="Videos"
                     icon={<MaterialIcons name="ondemand-video" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Collection"
                     icon={<Feather name="bookmark" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Upgrade account"
                     icon={<FontAwesome5 name="angle-double-up" size={24} color={Colors.text} />}
                  />
               </View>

               <View style={styles.moreContainer}>
                  <SettingCard
                     onPress={() => Alert.alert('About GenTeach', 'Access Facebook or Instagram for more!')}
                     name="About GenTeach"
                     icon={<Ionicons name="information-circle-outline" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Feed back"
                     icon={<AntDesign name="exclamation" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={null}
                     name="Help requirements"
                     icon={<Ionicons name="help" size={24} color={Colors.text} />}
                  />

                  <SettingCard
                     onPress={handleSignOut}
                     name="Sign out"
                     icon={<AntDesign name="logout" size={24} color="red" />}
                  />
               </View>

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default ProfileScreen

const styles = StyleSheet.create({
   // Profile
   header: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      // borderWidth: 1
   },

   // profile container
   profileImgContainer: {
      height: 100,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },
   profileImg: {
      height: 80,
      width: 80,
      marginRight: 10,
      borderRadius: 50
   },


   in4Container: {
      height: 70,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   textWrap: {
      alignItems: 'center',
   },
   number: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
   },
   text: {
      fontSize: 12,
      opacity: 0.7,
   },


   // Setting container
   settingContainer: {
      height: 'auto',
      width: '97%',
      borderWidth: 0.5,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   settingWrap: {
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 20
      // borderWidth: 1,
   },
   wrapLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      // paddingHorizontal: 10
   },

   // 
   moreContainer: {
      height: 'auto',
      width: '97%',
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 0.5,
      alignSelf: 'center',
      alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 10,
   },
})