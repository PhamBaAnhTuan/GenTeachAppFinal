import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// icons
import { AntDesign, FontAwesome, Entypo, Ionicons, Fontisto } from '@expo/vector-icons';
// context
import { useStoreContext } from '@/context/Context';
// components
import Header from '@/components/Header';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
// calendar
import { Calendar } from 'react-native-calendars';
// picker
import { Picker } from '@react-native-picker/picker';
// colors
import { Colors } from '@/constants/Colors';


const Booking = () => {
   // context
   const { router, useRedux } = useStoreContext();
   // redux
   const { user } = useRedux;
   // params
   const { param }: any = useGlobalSearchParams();
   // parse the 'video' params
   const selectedExpert = JSON.parse(param);
   // calendar
   const [selectedDate, setSelectedDate] = useState('');
   const onDayPress = (day: any) => {
      setSelectedDate(day.dateString);
   };
   // Hide calendar
   const [isCalendarVisible, setIsCalendarVisible] = useState(false);
   const toggleCalendar = () => {
      setIsCalendarVisible(!isCalendarVisible);
   };
   // Time
   const [time, setTime] = useState('');
   // Loading
   const [loading, setLoading] = useState(false);
   const booking = () => {
      setLoading(true);
      setTimeout(() => {
         router.push({
            pathname: '/shopDetail/doneScreen',
            params: { expertName: selectedExpert.name, type: 'booking' },
         })
         setLoading(false);
      }, 1000);
   }
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <Header
               title={`Booking ${selectedExpert.name}`}
               headerRight={null}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.selectContainer}>
                  <Text style={styles.label}>Date:</Text>
   
                  <TouchableOpacity style={[styles.picker, {backgroundColor: Colors.lightPink}]} onPress={toggleCalendar}>
                     <Text>{selectedDate}</Text>
                  </TouchableOpacity>
                  {isCalendarVisible &&
                     <View>
                        <Calendar
                           current={selectedDate}
                           onDayPress={onDayPress}
                           markedDates={{
                              [selectedDate]: {
                                 selected: true,
                                 selectedColor: '#00adf5',
                              },
                           }}
                           theme={{
                              selectedDayBackgroundColor: '#00adf5',
                              todayTextColor: '#00adf5',
                              arrowColor: '#00adf5',
                           }}
                           monthFormat={'dd MM yyyy'}
                        />
                        <TouchableOpacity style={styles.doneBtn} onPress={toggleCalendar}>
                           <Text>Done</Text>
                        </TouchableOpacity>
                     </View>
                  }
               </View>
   
               <View style={styles.selectContainer}>
                  <Text style={styles.label}>Time:</Text>
   
                  <View style={[styles.picker, {backgroundColor: Colors.lightPink}]}>
                     <Picker
                        selectedValue={time}
                        onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                     >
                        <Picker.Item label='7 a.m' value="7 a.m" />
                        <Picker.Item label='8 a.m' value="8 a.m" />
                        <Picker.Item label='9 a.m' value="9 a.m" />
                        <Picker.Item label='10 a.m' value="10 a.m" />
                        <Picker.Item label='11 a.m' value="11 a.m" />
                        <Picker.Item label='13 a.m' value="13 a.m" />
                        <Picker.Item label='14 a.m' value="14 a.m" />
                        <Picker.Item label='15 a.m' value="15 a.m" />
                        <Picker.Item label='16 a.m' value="16 a.m" />
                     </Picker>
                  </View>
               </View>
   
               <Input
                  title='Full name'
                  keyboardType={'default'}
                  handleTextChange={null}
                  secureTextEntry={false}
                  value={user?.firstName + user?.lastName}
               />
               <Input
                  title='Phone number'
                  keyboardType={'number-pad'}
                  handleTextChange={null}
                  secureTextEntry={false}
                  value={user?.phoneNumber}
               />
               <Input
                  title='Address'
                  keyboardType={'default'}
                  handleTextChange={null}
                  secureTextEntry={false}
                  value={user?.address}
               />
               <Input
                  title='Health insurance number'
                  keyboardType={'default'}
                  handleTextChange={null}
                  secureTextEntry={false}
                  value={user?.health_insurance_number}
               />
   
               <View style={styles.bookingBtnContainer}>
                  {loading === true ?
                     (<ActivityIndicator color={'plum'} size={'large'}/>)
                     : (
                        <Button
                           title='Booking'
                           color={Colors.success}
                           onPress={booking}
                        />
                     )
                  }
               </View>
            </ScrollView>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default Booking

const styles = StyleSheet.create({
   selectContainer: {
      height: 'auto',
      width: '100%',
   },

   label: {
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 17,
      marginBottom: 2
   },
   picker: {
      height: 45,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      alignSelf: 'center',
      justifyContent: 'center',
   },

   calendar: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1
   },

   selectedText: {
      marginTop: 20,
      fontSize: 18,
   },

   doneBtn: {
      height: 30,
      width: 70,
      // borderWidth: 1,
      borderRadius: 25,
      marginTop: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00adf5'
   },

   // Booking btn container
   bookingBtnContainer: {
      width: '100%',
      marginTop: 30
   },
})