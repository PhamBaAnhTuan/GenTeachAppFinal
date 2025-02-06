import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useStoreContext } from '@/context/Context';
// colors
import { Colors } from '@/constants/Colors';


interface Props {
   onPress: any,
   img: any,
   name: string,
   brand: string,
   discount: number,
   freeShip: boolean,
   price: number,
   sold: number
}

const ItemCard = (props: Props) => {
   return (
      <TouchableOpacity style={[styles.container, { backgroundColor: Colors.surface }]} onPress={props.onPress}>
         <View style={styles.itemImg}>
            <Image style={{height: '100%', width: '100%', borderRadius: 10}} source={props.img} />
         </View>

         <View style={styles.in4Container}>
            <Text style={[styles.itemName, { color: Colors.text }]}>{props.name}</Text>
            <Text style={[styles.brandName, { color: Colors.text }]}>{props.brand}</Text>

            <View style={styles.discountContainer}>
               <View style={styles.discountWrap}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.surface }}>{props.discount}% OFF</Text>
               </View>
               {props.freeShip ?
                  (<View style={[styles.freeShipWrap, { backgroundColor: Colors.success }]}>
                     <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.surface }}>FREE SHIP</Text>
                  </View>)

                  : null}
            </View>

            <View style={styles.priceContainer}>
               <Text style={styles.price}>{props.price} $</Text>
               <Text style={[styles.sold, { color: Colors.text }]}>{props.sold} sold</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default ItemCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 170,
      // borderWidth: 1,
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
      marginHorizontal: 3,
      justifyContent: 'space-around',
   },

   itemImg: {
      height: 160,
      width: 160,
      borderRadius: 10,
      // borderWidth: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // In4 container
   in4Container: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center'
   },

   itemName: {
      fontSize: 13,
      fontWeight: 'bold',
      textAlign: 'left'
      // paddingVertical: 5,
      // borderWidth: 1
   },
   brandName:{
      // height: 15,
      fontSize: 10,
      // fontWeight: 'bold',
      // borderWidth: 1
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
      fontSize: 13,
      color: 'tomato',
      fontWeight: '500'
   },
   sold: {
      fontSize: 10,
      color: 'black'
   }
})