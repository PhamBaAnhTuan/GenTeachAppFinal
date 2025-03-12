import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import StickerDone from '@/components/animations/StickerDone'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// param
import { useGlobalSearchParams, router } from 'expo-router';
// context
import { useStoreContext } from '@/context/Context';
// components
import StickerDone from '@/components/animations/StickerDone';
import Button from '@/components/form/Button';
// colors
import { Colors } from '@/constants/Colors';

const DoneScreen = () => {
   // params
   const { type, name, expertName }: any = useGlobalSearchParams();
   // 
   const [showFirstComponent, setShowFirstComponent] = useState(true);
   const [showSecondComponent, setShowSecondComponent] = useState(false);
   useEffect(() => {
      if (showFirstComponent) {
         const timer = setTimeout(() => {
            setShowSecondComponent(true);
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [showFirstComponent]);
   // Back
   const goBack = () => {
      type === 'booking'
         ? router.replace('/chat')
         : router.replace('/shop')
   }
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={styles.container}>
               {showFirstComponent &&
                  (
                     <View style={styles.doneIcon}>
                        <StickerDone />
                     </View>
                  )
               }
               {showSecondComponent &&
                  (
                     <View style={styles.textContainer}>
                        {type === 'booking' &&
                           <Text style={styles.text}>
                              Calendar sent to {expertName},
                              Please waiting for notification!
                           </Text>
                        }
                        {type === 'buy' &&
                           <Text style={styles.text}>Order successfully!</Text>
                        }
                        {type === 'gift' &&
                           <Text style={styles.text}>Gift is sending to {name}!</Text>
                        }

                        <Text style={{ marginTop: 10 }}>Thank you for trust and use GenTeach!</Text>
                     </View>
                  )
               }
            </View>

            {showSecondComponent &&
               (
                  <View style={styles.returnBtnContainer}>
                     <Button
                        title={`Back to ${type === 'booking' ? 'Genchat' : 'Genshop'}`}
                        color={'green'}
                        onPress={goBack}
                     />
                  </View>
               )
            }

         </LinearGradient>
      </SafeAreaView >
   )
}

export default DoneScreen

const styles = StyleSheet.create({
   container: {
      height: '90%',
      width: '100%',
      // borderWidth: 1,
   },
   doneIcon: {
      height: 300,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   textContainer: {
      height: 200,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
   },
   text: {
      fontSize: 17,
      fontWeight: '500',
      textAlign: 'center',
   },


   // Booking btn container
   returnBtnContainer: {
      position: 'absolute',
      bottom: 15,
      width: '100%',
   },
})