import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// context
import { useStoreContext } from '@/context/Context';
// components
import GradeCard from '@/components/study/GradeCard'
import { useRoute } from '@react-navigation/native';
// colors
import { Colors } from '@/constants/Colors';

const HomeWork = () => {
   // param
   const route = useRoute();
   const selectedCourse = route.params?.selectedCourse;
   return (
      <SafeAreaView style={{flex: 1}}>
         <LinearGradient
            colors={Colors.linear}
            style={{flex: 1}}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={[styles.progress, {backgroundColor: Colors.surface}]}>
                  <Text style={[styles.title, { color: Colors.text }]}>0% Lesson progress</Text>
                  <View style={styles.slider}></View>
               </View>

               <View style={styles.gradeCardContainer}>
                  <Text style={[styles.title, { color: Colors.text }]}>List of lessons</Text>
                  <GradeCard
                     title='Tình yêu là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cảm xúc là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cách xây dựng và duy trì mối quan hệ lành mạnh'
                     content='Thảo luận'
                     percents={7}
                  />
                  <GradeCard
                     title='Nhận biết và xử lý tình huống'
                     content='Thảo luận'
                     percents={5}
                  />
                  <GradeCard
                     title='Góc nhìn cá nhân về tình yêu đôi lứa'
                     content='Thảo luận'
                     percents={5}
                  />
               </View>

               <View style={styles.gradeCardContainer}>
                  <Text style={[styles.title, { color: Colors.text }]}>List of lessons</Text>
                  <GradeCard
                     title='Tình yêu là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cảm xúc là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cách xây dựng và duy trì mối quan hệ lành mạnh'
                     content='Thảo luận'
                     percents={7}
                  />
                  <GradeCard
                     title='Nhận biết và xử lý tình huống'
                     content='Thảo luận'
                     percents={5}
                  />
                  <GradeCard
                     title='Góc nhìn cá nhân về tình yêu đôi lứa'
                     content='Thảo luận'
                     percents={5}
                  />
               </View>

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default HomeWork

const styles = StyleSheet.create({
   // Slider
   progress: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 5,
      borderRadius: 5,
      marginTop: 5
   },
   title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
      paddingLeft: 5
   },
   slider: {
      height: 5,
      width: '98%',
      backgroundColor: '#ccc',
      borderRadius: 10,
      alignSelf: 'center',
   },


   // Grade card
   gradeCardContainer: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      // borderWidth: 1,
      paddingVertical: 10,
   }
})