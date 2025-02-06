import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// Context
import { useStoreContext } from '@/context/Context';
// Icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// route get params
import { useGlobalSearchParams } from 'expo-router';
// components
import Header from '@/components/Header';
// colors
import { Colors } from '@/constants/Colors';

const BuyNow = () => {
   // context
   const { router, useRedux } = useStoreContext();
   // redux
   const { user } = useRedux;
   // params
   const { param, type }: any = useGlobalSearchParams();
   // Parse params
   const item = JSON.parse(param)
   // Handle amount
   const [amount, setAmount] = useState(1);
   const Increase = () => setAmount(amount + 1)
   const Decrease = () => setAmount(amount !== 1 ? amount - 1 : amount)
   let totalPrice: number = item.price * amount;
   // Time
   const [method, setMethod] = useState('');
   // Loading
   const [loading, setLoading] = useState(false);
   const booking = () => {
      setLoading(true);
      setTimeout(() => {
         type === 'buy'
            ? router.push({ pathname: '/shopDetail/doneScreen', params: { type: 'buy' } })
            : router.push({ pathname: '/shopDetail/doneScreen', params: { type: 'gift', name: name } })
         console.log('buy done')
         setLoading(false);
      }, 2000);
   };

   // handle input
   const [name, setName] = useState('');
   const textChange = (text: string) => setName(text);
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <Header
               title={type === 'buy'
                  ? 'Purchase'
                  : 'Gift'
               }
               headerRight={null}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={[styles.itemIn4Container, { backgroundColor: Colors.surface }]}>
                  <Image style={styles.itemImg} source={{ uri: item.img }} />

                  <View style={styles.in4Container}>
                     <Text style={[styles.itemName, { color: Colors.text }]}>{item.name}</Text>
                     <Text style={[styles.brandName, { color: Colors.text }]}>{item.brand}</Text>

                     <View style={styles.discountContainer}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.onText }}>{item.discount}% OFF</Text>
                        </View>
                        {item.free_ship ?
                           (<View style={[styles.freeShipWrap, { backgroundColor: Colors.success }]}>
                              <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.onText }}>FREE SHIP</Text>
                           </View>)

                           : null}
                     </View>

                     <View style={styles.priceContainer}>
                        <Text style={styles.price}>{item.price} $</Text>
                     </View>

                     <View style={styles.amountContainer}>
                        <TouchableOpacity style={styles.icon} onPress={Decrease}>
                           <Text style={{ fontSize: 17, fontWeight: 'bold' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 5 }}>{amount}</Text>
                        <TouchableOpacity style={styles.icon} onPress={Increase}>
                           <Text style={{ fontSize: 17, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]}>Họ và tên người nhận</Text>
                     <TextInput
                        value={type === 'buy' ? user?.firstName + user?.lastName : name}
                        style={styles.textInput}
                        onChangeText={textChange}
                     />
                  </View>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]}>Địa chỉ nhận hàng</Text>
                     <TextInput
                        value={type === 'buy' ? user?.address : ''}
                        style={styles.textInput}
                        placeholder='Số nhà, Quận Huyện, Tỉnh Thành phố'
                     />
                  </View>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]}>Số điện thoại</Text>
                     <TextInput
                        value={type === 'buy' ? user?.phoneNumber: ''}
                        style={styles.textInput}
                        keyboardType='number-pad'
                     />
                  </View>
               </View>

               <View style={[styles.container, { backgroundColor: Colors.surface }]}>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Discount</Text>

                     <View style={styles.voucherWrap}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: Colors.onText }}>{item.discount}% OFF</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={21} color={Colors.text} />
                     </View>
                  </View>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Free ship</Text>

                     <View style={styles.voucherWrap}>
                        <View style={[styles.freeShipWrap, { backgroundColor: Colors.success }]}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: Colors.onText }}>FREE SHIP</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={21} color={Colors.text} />
                     </View>
                  </View>

                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Rate</Text>

                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>{item.rate}</Text>
                        <MaterialIcons name="star" size={21} color="gold" />
                     </View>
                  </View>

                  <TouchableOpacity style={styles.voucherContainer} >
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Comments</Text>
                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: Colors.text }]}>20+ Comments</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={21} color={Colors.text} />
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={[styles.container, { backgroundColor: Colors.surface }]}>
                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: Colors.text }]} >Payment method</Text>
                  </View>

                  <View style={styles.picker}>
                     {/* <Picker
                        selectedValue={method}
                        // style={styles.picker}
                        // itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) => setMethod(itemValue)}
                     >
                        <Picker.Item label='Thanh toán khi nhận hàng' value="Thanh toán khi nhận hàng" />
                        <Picker.Item label='Thẻ tín dụng/Ghi nợ' value="Thẻ tín dụng/Ghi nợ" />
                        <Picker.Item label='Google Pay' value="Google Pay" />
                        <Picker.Item label='Zalo Pay' value="Zalo Pay" />
                        <Picker.Item label='Momo' value="Momo" />
                     </Picker> */}
                     <Text>Cash</Text>
                  </View>
               </View>
            </ScrollView>

            <View style={styles.buyBtnContainer}>
               {loading === true ?
                  (<ActivityIndicator size={'large'} color={'plum'} />)
                  : (
                     <>
                        <View style={styles.leftContainer}>
                           <Text style={[styles.price, { color: Colors.onText }]}>{totalPrice || 0} $</Text>
                        </View>
                        <TouchableOpacity style={styles.buyBtn} onPress={booking}>
                           {type === 'buy'
                              ? <Text style={styles.buyText}>Purchase</Text>
                              : <Text style={styles.buyText}>Gift</Text>
                           }
                        </TouchableOpacity>
                     </>
                  )
               }
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default BuyNow

const styles = StyleSheet.create({
   // Item in 4 container
   itemIn4Container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 2,
      // borderWidth: 1
   },

   // Item container
   itemImg: {
      height: 100,
      width: 100,
      borderRadius: 10,
      resizeMode: 'cover'
      // borderWidth: 1,
   },

   // In4 container
   in4Container: {
      height: '100%',
      width: '65%',
      // borderWidth: 1,
      // alignSelf: 'center',
   },
   itemName: {
      fontSize: 15,
      fontWeight: 'bold',
      // textAlign: 'left',
      // paddingVertical: 5,
      // borderWidth: 1
   },
   brandName: {
      fontSize: 12,
   },

   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between'
   },
   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      paddingHorizontal: 5
   },
   freeShipWrap: {
      height: 'auto',
      width: 70,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },

   // Price container
   priceContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   price: {
      fontSize: 17,
      color: 'tomato',
      fontWeight: '500'
   },
   sold: {
      fontSize: 10,
      color: 'black'
   },

   // Amount container
   amountContainer: {
      height: 'auto',
      width: 'auto',
      borderWidth: 1,
      borderRadius: 3,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   icon: {
      height: 'auto',
      width: 25,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },


   // Payment method container
   picker: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      alignSelf: 'center',
      // alignItems: 'center',
      justifyContent: 'center',
   },
   pickerItem: {
      fontSize: 13,
      fontWeight: 'bold',
      alignItems: 'center',
      // justifyContent: 'center',
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


   // Container
   container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      // alignItems: 'center',
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginBottom: 2,
      // borderWidth: 1
   },

   // Addres container
   addressContainer: {
      height: 'auto',
      width: '100%',
      borderRightColor: '#bbe3ff',
      paddingVertical: 5,
      // borderWidth: 1,
   },
   text: {
      fontSize: 12,
      fontWeight: 'bold',
      // borderWidth: 1,
   },
   textInput: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
   },


   // Buy btn container
   buyBtnContainer: {
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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

   // Price
   // price: {
   //    fontSize: 20,
   //    fontWeight: "bold",
   //    color: 'white',
   //    // borderWidth: 1,
   // },

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