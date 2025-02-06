import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// context
import { useStoreContext } from '@/context/Context';
// icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// components
import RoadMapCard from '@/components/study/RoadMapCard';
import { useRoute } from '@react-navigation/native';
// colors
import { Colors } from '@/constants/Colors';


const Lesson = () => {
   // param
   const route = useRoute();
   const selectedCourse = route.params?.selectedCourse;
   // Slider
   const [value, setValue] = useState(0);
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={styles.courseContainer}>
                  <Text style={[styles.title, { color: Colors.text }]}>Introduction</Text>
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 1:'
                     content="Hiểu về Tình Yêu và Cảm Xúc"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 2:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 3:'
                     content="Xử Lý Tình Huống Phức Tạp và Nhận Biết Dấu Hiệu Cảnh Báo"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Workshop:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={true}
                     notice={'Hãy nhắc tôi'}
                  />
               </View>

               <View style={styles.courseContainer}>
                  <Text style={[styles.title, { color: Colors.text }]}>Long term roadmap</Text>
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 1:'
                     content="Hiểu về Tình Yêu và Cảm Xúc"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 2:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 3:'
                     content="Xử Lý Tình Huống Phức Tạp và Nhận Biết Dấu Hiệu Cảnh Báo"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Workshop:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={true}
                     notice={'Hãy nhắc tôi'}
                  />
               </View>
            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Lesson

const styles = StyleSheet.create({
   // Slider
   progress: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      // paddingHorizontal: 5,
      paddingVertical: 20
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
      // marginVertical: 10,
      alignSelf: 'center',
   },

   // Course container
   courseContainer: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      paddingVertical: 5,
      // marginBottom: 10
   },
})