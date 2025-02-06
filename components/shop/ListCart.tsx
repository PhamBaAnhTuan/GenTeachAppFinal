import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import { ListItem, Button, Icon } from '@rneui/themed';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
// colors
import { Colors } from '@/constants/Colors';

interface Props {
   info: () => void,
   delete: () => void,
   itemImg: any,
   itemName: string,
   discount: number,
   price: number,
   sold: number,
   rate: number,
}
const ListCart = (props: Props) => {
   // Handle amount
   const [amount, setAmount] = useState(1);
   const Increase = () => setAmount(amount + 1);
   const Decrease = () => setAmount(amount !== 1 ? amount - 1 : amount);
   return (
      <View style={{ marginVertical: 0 }}>
         <ListItem.Swipeable
            // style={styles.container}
            leftContent={(reset) => (
               <Button
                  title="Info"
                  onPress={() => {
                     props.info()
                     reset()
                  }}
                  icon={{ name: 'info', color: 'white' }}
                  buttonStyle={{ height: '100%', backgroundColor: Colors.blue }}
               />
            )}
            rightContent={(reset) => (
               <Button
                  title="Delete"
                  onPress={() => {
                     props.delete()
                     reset()
                  }}
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ height: '100%', backgroundColor: Colors.error }}
               />
            )}
         >
            <ListItem.Content>
               <View style={[styles.container]}>

                  <Image style={styles.itemImg} source={props.itemImg} />

                  <View style={styles.itemIn4}>
                     <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{props.itemName}</Text>

                     <View style={styles.discountContainer}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black' }}>{props.discount}% OFF</Text>
                        </View>

                        <View style={[styles.freeShipWrap, { backgroundColor: Colors.success }]}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: Colors.onText }}>FREE SHIP</Text>
                        </View>
                     </View>

                     <View style={styles.priceContainer}>
                        <Text style={styles.price}>${props.price}</Text>
                        <Text style={[styles.sold, { color: 'black' }]}>{props.sold} sold</Text>
                        <View style={styles.starContainer}>
                           <Text style={[styles.sold, { color: 'black' }]}>{props.rate}</Text>
                           <MaterialIcons name="star" size={21} color="gold" />
                        </View>
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
                  <ListItem.Chevron />

               </View>
            </ListItem.Content>

         </ListItem.Swipeable>
      </View>
   )
}

export default ListCart

const styles = StyleSheet.create({
   container: {
      height: 120,
      width: '100%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // backgroundColor: 'green',
      marginVertical: -10
   },


   checkboxIcon: {
      height: 'auto',
      width: '12%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   itemImg: {
      height: '90%',
      width: '30%',
      resizeMode: 'cover',
      borderRadius: 5
   },


   // Item container
   itemIn4: {
      height: '100%',
      width: '40%',
      // borderWidth: 1,
      justifyContent: 'space-evenly',
      marginLeft: 15
   },

   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
   },
   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
      marginRight: 10
   },
   freeShipWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5
   },


   priceContainer: {
      height: 'auto',
      width: '75%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   price: {
      fontSize: 15,
      color: 'tomato',
      fontWeight: '500',
   },
   sold: {
      fontSize: 11,
      color: 'black'
   },
   // Star container
   starContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   starIcon: {
      height: 15,
      width: 15
   },


   // Amount container
   amountContainer: {
      height: 'auto',
      width: '50%',
      borderWidth: 1,
      borderRadius: 3,
      flexDirection: 'row',
      // alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      // paddingHorizontal: 3,
   },
   icon: {
      height: 'auto',
      width: 25,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   }
})