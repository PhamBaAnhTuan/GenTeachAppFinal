import { Dimensions, SafeAreaView, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';
// context
import { useStoreContext } from '@/context/Context';
import { useRoute } from '@react-navigation/native';
// colors
import { Colors } from '@/constants/Colors';

const Information = () => {
   // params
   const route = useRoute();
   const selectedCourse = route.params?.selectedCourse;
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <Text style={[styles.title, { color: Colors.text }]}>Course builder</Text>
   
                  <View style={styles.in4Container}>
                     <Image style={styles.authorImg} source={require('../../../assets/background/logo2.png')} resizeMode='cover' />
                     <View style={styles.authorInfo}>
                        <Text style={[styles.authorName, { color: Colors.text }]}>GenTeach</Text>
                        <Text style={[styles.role, { color: Colors.text }]}>Lecturer of Medicine and Pharmacy at Dong A University</Text>
                     </View>
                  </View>
               </View>
   
               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <Text style={[styles.title, { color: Colors.text }]}>Description</Text>
                  <Text style={{ textAlign: 'justify' }}>{selectedCourse.description}</Text>
               </View>
               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <Text style={[styles.title, { color: Colors.text }]}>Course builder</Text>
   
                  <View style={styles.in4Container}>
                     <Image style={styles.authorImg} source={require('../../../assets/background/logo2.png')} resizeMode='cover' />
                     <View style={styles.authorInfo}>
                        <Text style={[styles.authorName, { color: Colors.text }]}>GenTeach</Text>
                        <Text style={[styles.role, { color: Colors.text }]}>Lecturer of Medicine and Pharmacy at Dong A University</Text>
                     </View>
                  </View>
               </View>
   
               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <Text style={[styles.title, { color: Colors.text }]}>Description</Text>
                  <Text style={{ textAlign: 'justify' }}>{selectedCourse.description}</Text>
               </View>
               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <Text style={[styles.title, { color: Colors.text }]}>Course builder</Text>
   
                  <View style={styles.in4Container}>
                     <Image style={styles.authorImg} source={require('../../../assets/background/logo2.png')} resizeMode='cover' />
                     <View style={styles.authorInfo}>
                        <Text style={[styles.authorName, { color: Colors.text }]}>GenTeach</Text>
                        <Text style={[styles.role, { color: Colors.text }]}>Lecturer of Medicine and Pharmacy at Dong A University</Text>
                     </View>
                  </View>
               </View>

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Information

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: 5,
      paddingVertical: 10,
      paddingHorizontal: 5,
      // borderWidth: 1
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
      paddingLeft: 5
   },


   // In4 container
   in4Container: {
      height: 80,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between'
   },
   authorImg: {
      height: 70,
      width: '20%',
      borderRadius: 50,
      marginHorizontal: 10,
   },

   authorInfo: {
      height: '100%',
      width: '70%',
      // borderWidth: 1,
      justifyContent: 'center',
   },
   authorName: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   role: {
      fontSize: 13,
      textAlign: 'justify',
   }
})