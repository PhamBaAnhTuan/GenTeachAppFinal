import { Alert, Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/context/Context';
// icons
import { Entypo, AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
// components
import ListCart from '@/components/shop/ListCart';
import Header from '@/components/Header';
// actions
import { removeFromCartAction } from '@/redux/actions';
// colors
import { Colors } from '@/constants/Colors';

const Cart = () => {
   // context
   const { heme, useRedux, dispatch } = useStoreContext();
   // redux
   const { cart } = useRedux;
   // Handle remove
   const [item, setItem]: any = useState({});
   const [isRemoving, setIsRemoving] = useState(false);

   useEffect(() => {
      if (isRemoving && item?.id) {
         handleRemove();
         setIsRemoving(false);
      }
   }, [item, isRemoving]);
   // Handle remove item
   const handleRemove = () => {
      Alert.alert(
         `Remove ${item.name}?`,
         'Are you sure you want to remove this item from your cart?',
         [
            {
               text: 'No', style: 'cancel',
               onPress: () => {
                  ToastAndroid.show(`Canceled!`, ToastAndroid.SHORT);
               }
            },
            {
               text: 'Yes',
               onPress: () => { dispatch(removeFromCartAction(item)) }
            },
         ],
      );
   };
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title='Your Cart'
               backMethod={()=> router.replace('/shop')}
               headerRight={null}
            />
            <ScrollView showsVerticalScrollIndicator={false}>

               {cart
                  ? <View >
                     {cart.map((item: any) => (
                        <ListCart
                           key={item.id}
                           itemImg={item.img ? { uri: item.img } : require('../../assets/banner/banner6.jpg')}
                           itemName={item.name}
                           discount={item.discount}
                           price={item.price}
                           sold={item.price}
                           rate={item.rate}
                           info={
                              () => {
                                 router.push({
                                    pathname: '/shopDetail/buynow',
                                    params: {param: JSON.stringify(item), type: 'buy'}
                                 })
                              }
                           }
                           delete={
                              () => {
                                 setItem(item);
                                 setIsRemoving(true);
                              }
                           }
                        />
                     ))}
                  </View>
                  : <Text>No item</Text>
               }
            </ScrollView>

            {/* <View style={styles.buyBtnContainer}>
               <View style={styles.leftContainer}>
                  <TouchableOpacity
                     style={[styles.chatIcon, { borderColor: Colors.surface }]}
                     onPress={() => router.push({
                        pathname: '/shopDetail/buynow',
                        params: { param: JSON.stringify(cart), type: 'gift' }
                     })}
                  >
                     <Ionicons name="gift" size={22} color={Colors.surface} />
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.cartIcon, { borderColor: Colors.surface }]}>
                     <Text>total</Text>
                  </TouchableOpacity>
               </View>

               <TouchableOpacity
                  style={styles.buyBtn}
                  onPress={() => router.push({
                     pathname: '/detailScreen/buynow',
                     params: { param: JSON.stringify(cart), type: 'buy' }
                  })}
               >
                  <Text style={styles.buyText}>Buy now</Text>
               </TouchableOpacity>
            </View> */}
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Cart;

const styles = StyleSheet.create({
   // Buy btn container
   buyBtnContainer: {
      // position: 'absolute',
      // bottom: 0,
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
      color: 'white'
   }
})