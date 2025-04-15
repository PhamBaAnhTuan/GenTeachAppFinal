import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// context
import { useStoreContext } from '@/src/context/Context';
// icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// route get params
import { useGlobalSearchParams, router } from 'expo-router';
// components
import Header from '@/src/components/Header';
// actions
import { addToCartAction } from '@/src/store/actions';
// colors
import { Colors } from '@/src/constants/Colors';
// hooks
import { dispatch } from '@/src/hooks/useDispatch';

const ShopDetail = () => {
   // params
   const { param }: any = useGlobalSearchParams();
   const item = JSON.parse(param);
   // Handle follow
   const [follow, setFollow] = useState('Follow');
   const handleFollow = () => {
      follow === 'Follow'
         ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
         : (setFollow('Follow'), ToastAndroid.show('Un followed', ToastAndroid.SHORT));
   }
   // handle add to cart
   const handleAddToCart = () => {
      dispatch(addToCartAction(item));
   }
   const log = () => console.log(item)

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>
               <Header
                  title={item.name ? item.name : item.title}
                  backMethod={() => router.replace('/shop')}
                  headerRight={
                     <TouchableOpacity onPress={() => router.push('/cart')}>
                        <Feather name="shopping-cart" size={21} color={Colors.text} />
                     </TouchableOpacity>
                  }
               />

               <View style={styles.imgContainer}>
                  <Image style={styles.itemImg} source={item.image ? { uri: item.image } : require('../../assets/background/logo2.png')} />
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.voucherContainer}>
                     <Text style={[styles.itemName, { color: Colors.text }]}>{item.name ? item.name : item.title}</Text>
                  </View>
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.voucherContainer}>
                     <Text style={styles.price}>{item.price} $</Text>
                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>{item.rate}</Text>
                        <MaterialIcons name="star" size={21} color="gold" />
                     </View>
                  </View>

                  <TouchableOpacity style={styles.brandContainer}>
                     <TouchableOpacity >
                        <Text style={[styles.brandName, { color: 'plum' }]} >
                           {item.brand}
                           {item.author}
                        </Text >
                     </TouchableOpacity>

                     <TouchableOpacity style={[styles.flBtn, { borderColor: Colors.text }]} onPress={handleFollow} >
                        <Text style={{ color: Colors.text, fontSize: 11 }} >{follow}</Text>
                     </TouchableOpacity>
                  </TouchableOpacity>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Category</Text>

                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>{item.category_name}</Text>
                     </View>
                  </View>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Discount</Text>

                     <View style={styles.voucherWrap}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.surface }}>{item.discount}% OFF</Text>
                        </View>
                     </View>
                  </View>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Free ship</Text>

                     {item.free_ship ? (
                        <View style={styles.voucherWrap}>
                           <View style={[styles.freeShipWrap, { backgroundColor: Colors.success }]}>
                              <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.onText }}>FREE SHIP</Text>
                           </View>
                        </View>)
                        : null
                     }
                  </View>

                  <TouchableOpacity style={styles.voucherContainer} >
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Comment</Text>
                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>20+ Comment</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={21} color={Colors.text} />
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={[styles.in4Container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Description</Text>
                  </View>
                  {item.description
                     ? (<Text style={{ textAlign: 'justify' }}>{item.description}</Text>)
                     : (<Text style={{ textAlign: 'center' }}>No description</Text>)
                  }
               </View>

            </ScrollView>

            <View style={styles.buyBtnContainer}>
               <View style={styles.leftContainer}>
                  <TouchableOpacity
                     style={[styles.chatIcon, { borderColor: Colors.surface }]}
                     onPress={() => router.push({
                        pathname: '/shopDetail/buynow',
                        params: { param: JSON.stringify(item), type: 'gift' }
                     })}
                  >
                     <Ionicons name="gift" size={22} color={Colors.surface} />
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.cartIcon, { borderColor: Colors.surface }]} onPress={handleAddToCart}>
                     <FontAwesome name="cart-plus" size={22} color={Colors.surface} />
                  </TouchableOpacity>
               </View>

               <TouchableOpacity
                  style={styles.buyBtn}
                  onPress={() => router.push({
                     pathname: '/shopDetail/buynow',
                     params: { param: JSON.stringify(item), type: 'buy' }
                  })}
               >
                  <Text style={[styles.buyText, { color: Colors.onText }]}>Buy now</Text>
               </TouchableOpacity>
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default ShopDetail

const styles = StyleSheet.create({
   imgContainer: {
      height: 350,
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
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      // borderWidth: 1,
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
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      // paddingRight: 5
   },

   // Voucher container
   voucherContainer: {
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
   cartIcon: {
      height: '80%',
      width: '50%',
      borderLeftWidth: 0.5,
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
   }
})