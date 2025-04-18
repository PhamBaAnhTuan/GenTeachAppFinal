import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/src/context/Context';
// components
import SearchInput from '@/src/components/SearchInput';
import TopicCard from '@/src/components/study/TopicCard';
import CourseCard from '@/src/components/study/CourseCard';
// colors
import { Colors } from '@/src/constants/Colors';
// hooks
import { useAuth } from '@/src/hooks/useAuth';
import { dispatch } from '@/src/hooks/useDispatch';

export default function StudyScreen() {
   // auth
   const { course, topic } = useAuth()
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

               <View style={styles.topicContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: Colors.text }]}>Topic</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.topicCardContainer}>
                     <ScrollView horizontal={true}>
                        {topic && topic.map((topic: any) => (
                           <TopicCard
                              key={topic.id}
                              onPress={null}
                              topicTitle={topic.name}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: Colors.text }]}>Popular course</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {course && course.map((item: any) => (
                           <CourseCard
                              key={item.id}
                              onPress={() => router.push(
                                 {
                                    pathname: '/studyDetail',
                                    params: { param: JSON.stringify(item) }
                                 }
                              )}
                              img={item.img ? { uri: item.img } : require('../../assets/banner/banner4.jpg')}
                              authorImg={item.expert_img ? { uri: item.expert_img } : require('../../assets/background/logo1.png')}
                              author={item.expert_name}
                              name={item.name}
                              price={item.price}
                              isFree={item.is_free}
                              field={item.topic_name}
                              rate={item.rate}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: Colors.text }]}>Self development</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {course && course.map((item: any) => (
                           <CourseCard
                              key={item.id}
                              onPress={() => router.push(
                                 {
                                    pathname: '/studyDetail',
                                    params: { param: JSON.stringify(item) }
                                 }
                              )}
                              img={item.img ? { uri: item.img } : require('../../assets/banner/banner4.jpg')}
                              authorImg={item.expert_img ? { uri: item.expert_img } : require('../../assets/background/logo1.png')}
                              author={item.expert_name}
                              name={item.name}
                              price={item.price}
                              isFree={item.is_free}
                              field={item.topic_name}
                              rate={item.rate}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: Colors.text }]}>Popular course</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {course && course.map((item: any) => (
                           <CourseCard
                              key={item.id}
                              onPress={() => router.push(
                                 {
                                    pathname: '/studyDetail',
                                    params: { param: JSON.stringify(item) }
                                 }
                              )}
                              img={item.img ? { uri: item.img } : require('../../assets/banner/banner4.jpg')}
                              authorImg={item.expert_img ? { uri: item.expert_img } : require('../../assets/background/logo1.png')}
                              author={item.expert_name}
                              name={item.name}
                              price={item.price}
                              isFree={item.is_free}
                              field={item.topic_name}
                              rate={item.rate}
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
   // Topic container
   topicContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // marginTop: 10
   },
   topicCardContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
   },


   // Popular course container
   popularCourseContainer: {
      height: 'auto',
      width: '100%',
   },

   popularCourseTitleContainer: {
      height: 40,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
   },
   popularCourseTitle: {
      fontSize: 16,
      fontWeight: 'bold',
   },

   viewAllTextWrap: {
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   viewAllText: {
      fontSize: 12,
      textDecorationLine: 'underline'
   },


   // Course container
   courseContainer: {
      height: 'auto',
      width: '100%',
      alignItems: 'center',
      // justifyContent: 'space-around',
      // borderWidth: 1,
   },
})