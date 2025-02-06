import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import Header from '@/components/Header';
// colors
import { Colors } from '@/constants/Colors';

const StudyDetail = () => {
   // context
   const { router } = useStoreContext();
   // params
   const { param }: any = useGlobalSearchParams();
   // parse params
   const selectedCourse = JSON.parse(param)
   // handle follow
   const [follow, setFollow] = useState('Follow');
   const handleFollow = () => {
      follow === 'Follow'
         ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
         : (setFollow('Follow'), ToastAndroid.show('Un follow', ToastAndroid.SHORT));
   }
   // Handle add to cart
   const addToCollection = () => {
      ToastAndroid.show('Added to collection', ToastAndroid.SHORT);
   }
   return (
      <SafeAreaView style={{flex: 1}}>
         <LinearGradient
            colors={Colors.linear}
            style={{flex: 1}}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>
               
               <Header
                  title={selectedCourse?.name}
                  headerRight={null}
               />

               <View style={styles.imgContainer}>
                  <Image style={styles.itemImg} source={selectedCourse.img ? { uri: selectedCourse.img } : require('../../assets/banner/banner4.jpg')} />
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.in4Wrap}>
                     <Text style={[styles.itemName, { color: Colors.text }]}>{selectedCourse.name}</Text>
                  </View>
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.in4Wrap}>
                     {selectedCourse.is_free
                        ?
                        (
                           <>
                              <View style={[styles.freeWrap, { backgroundColor: Colors.success }]}>
                                 <Text style={[styles.freeText, { color: Colors.onText }]}>Free</Text>
                              </View>
                              <Text style={[styles.text, { color: Colors.text }]}>{selectedCourse.progress}% progress</Text>
                           </>
                        )
                        :
                        (<>
                           <Text style={styles.price}>{selectedCourse.price} VND</Text>
                           <Text style={[styles.text, { color: Colors.text }]}>{selectedCourse.progress}% progress</Text>
                        </>)
                     }
                  </View>

                  <View style={styles.brandContainer}>
                     <TouchableOpacity >
                        <Text style={[styles.brandName, { color: 'plum' }]} >
                           {selectedCourse.expert_name}
                        </Text >
                     </TouchableOpacity>

                     <TouchableOpacity style={[styles.flBtn, { borderColor: Colors.text }]} onPress={handleFollow} >
                        <Text style={{ color: Colors.text, fontSize: 11 }} >{follow}</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.in4Wrap}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Field</Text>

                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>{selectedCourse.topic_name}</Text>
                     </View>
                  </View>

                  <View style={styles.in4Wrap}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Discount</Text>

                     <View style={styles.voucherWrap}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: Colors.onText }}>{selectedCourse.discount}% off</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.text} />
                     </View>
                  </View>

                  <View style={styles.in4Wrap}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Rate</Text>

                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>{selectedCourse.rate}</Text>
                        <MaterialIcons name="star" size={21} color="gold" />
                     </View>
                  </View>

                  <TouchableOpacity style={styles.in4Wrap} >
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Comments</Text>
                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>20+ Comments</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.text} />
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.in4Wrap}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Description</Text>
                  </View>

                  <Text style={{ textAlign: 'justify' }}>{selectedCourse.description}</Text>
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.in4Wrap}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Roadmap</Text>
                  </View>

                  <RoadMapCard
                     role={'StudyDetail'}
                     title='Module 1:'
                     content="Hiểu về Tình Yêu và Cảm Xúc"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={false}
                     notice={9}
                  />
                  <RoadMapCard
                     role={'StudyDetail'}
                     title='Module 2:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={false}
                     notice={9}
                  />
                  <RoadMapCard
                     role={'StudyDetail'}
                     title='Module 3:'
                     content="Xử Lý Tình Huống Phức Tạp và Nhận Biết Dấu Hiệu Cảnh Báo"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={false}
                     notice={9}
                  />
                  <RoadMapCard
                     role={'StudyDetail'}
                     title='Workshop:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={false}
                     notice={9}
                  />
               </View>

            </ScrollView>

            <View style={styles.buyBtnContainer}>
               <View style={styles.leftContainer}>
                  <TouchableOpacity style={[styles.collectIcon, { borderColor: Colors.text }]} onPress={addToCollection}>
                     <MaterialIcons name="collections-bookmark" size={24} color={Colors.onText} />
                  </TouchableOpacity>
               </View>

               <TouchableOpacity style={styles.buyBtn} onPress={() => router.push({
                  pathname: '/studyDetail/(toptab)',
                  params: { param: JSON.stringify(selectedCourse)}
               })}>
                  <Text style={styles.buyText}>Register</Text>
               </TouchableOpacity>
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default StudyDetail

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
   },


   // Header
   header: {
      height: 60,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      // borderWidth: 1,
   },

   imgContainer: {
      height: 170,
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      alignItems: 'center',
   },

   itemImg: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 5
   },


   // In4 container
   in4Container: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
      // backgroundColor: 'gray',
      marginTop: 2,
      paddingHorizontal: 7,
      paddingVertical: 7
   },

   itemName: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
      // borderWidth: 1,
      textAlign: 'justify'
   },


   // Brand container
   brandContainer: {
      height: 30,
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
   },
   brandName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
   },
   flBtn: {
      height: 25,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
      // marginLeft: 20,
   },

   // Price container
   price: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'tomato',
      // borderWidth: 1,
   },
   text: {
      fontSize: 11,
      fontWeight: 'bold',
      color: 'white',
      // paddingRight: 5
   },
   freeWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
   },
   freeText: {
      fontSize: 13,
      fontWeight: 'bold',
   },

   // Voucher container
   in4Wrap: {
      height: 'auto',
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      paddingVertical: 10
   },
   voucherText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white'
   },

   voucherWrap: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },

   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5
   },

   freeShipWrap: {
      height: 'auto',
      width: 'auto',
      paddingHorizontal: 5,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // Buy btn container
   buyBtnContainer: {
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginBottom: 10,
      // borderWidth: 1,
   },

   leftContainer: {
      height: '100%',
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
      backgroundColor: 'plum'
   },

   // Icon
   chatIcon: {
      height: '80%',
      width: '50%',
      borderRightWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },
   collectIcon: {
      height: '80%',
      width: '100%',
      // borderLeftWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },


   buyBtn: {
      height: '100%',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      backgroundColor: 'tomato'
   },
   buyText: {
      fontWeight: '500',
      color: 'white'
   }
})