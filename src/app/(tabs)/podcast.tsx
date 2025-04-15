import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/src/context/Context';
// components
import SearchInput from '@/src/components/SearchInput';
import PodcastCard from '@/src/components/podcast/PodcastCard';
// colors
import { Colors } from '@/src/constants/Colors';
// hooks
import { useAuth } from '@/src/hooks/useAuth';

export default function PodcastScreen() {
   // auth
   const { podcast } = useAuth()
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>
               <SearchInput />

               <View style={styles.container}>
                  <View style={styles.podcastTitleContainer}>
                     <Text style={[styles.podcastTitle, { color: Colors.text }]}>Popular</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcast && podcast.map((item: any) => (
                           <PodcastCard
                              key={item.id}
                              onPress={() => router.push({
                                 pathname: '/podcastDetail',
                                 params: { param: JSON.stringify(item) }
                              })}
                              img={item.img ? { uri: item.img } : require('../../assets/background/logo1.png')}
                              name={item.name}
                              author={item.expert_name}
                           />
                        ))}

                     </ScrollView>
                  </View>
               </View>

               <View style={styles.container}>
                  <View style={styles.podcastTitleContainer}>
                     <Text style={[styles.podcastTitle, { color: Colors.text }]}>Love</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcast && podcast.map((item: any) => (
                           <PodcastCard
                              key={item.id}
                              onPress={() => router.push({
                                 pathname: '/podcastDetail',
                                 params: { param: JSON.stringify(item) }
                              })}
                              img={item.img ? { uri: item.img } : require('../../assets/background/logo1.png')}
                              name={item.name}
                              author={item.expert_name}
                           />
                        ))}

                     </ScrollView>
                  </View>
               </View>

               <View style={styles.container}>
                  <View style={styles.podcastTitleContainer}>
                     <Text style={[styles.podcastTitle, { color: Colors.text }]}>Self reflection</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcast && podcast.map((item: any) => (
                           <PodcastCard
                              key={item.id}
                              onPress={() => router.push({
                                 pathname: '/podcastDetail',
                                 params: { param: JSON.stringify(item) }
                              })}
                              img={item.img ? { uri: item.img } : require('../../assets/background/logo1.png')}
                              name={item.name}
                              author={item.expert_name}
                           />
                        ))}

                     </ScrollView>
                  </View>
               </View>
            </ScrollView>

         </LinearGradient>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   // popular podcast container
   container: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginVertical: 10,
   },

   podcastTitleContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingBottom: 10
   },
   podcastTitle: {
      fontSize: 16,
      fontWeight: 'bold',
   },

   viewAllTextWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   viewAllText: {
      fontSize: 12,
      textDecorationLine: 'underline'
   },


   // Podcast container
   podcastContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
   }
})