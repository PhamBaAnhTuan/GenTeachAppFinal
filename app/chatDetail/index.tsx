import { ActivityIndicator, Dimensions, FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// context
import { useStoreContext } from '@/context/Context';
// icons
import { AntDesign, Ionicons, Feather, Entypo } from '@expo/vector-icons';
// components
import ChatBubble from '@/components/chatbot/ChatBubble';
// chat bot
import axios from 'axios';
// colors
import { Colors } from '@/constants/Colors';

const ChatDetail = () => {
   // context
   const { router } = useStoreContext();
   // params
   const { param }: any = useGlobalSearchParams();
   // parse the 'video' params
   const expert = JSON.parse(param)
   // Chat
   const [chat, setChat] = useState([]);
   const [input, setInput] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const apiKey = 'AIzaSyBUXx-ImDgnfjL6wtQBxjFWPyt8ERe2uWM';

   const handleInput = async () => {
      let updatedChat = [
         ...chat,
         {
            role: 'user',
            parts: [{ text: input }],
         },
      ];

      setLoading(true);

      try {
         const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
               contents: updatedChat,
            }
         );
         console.log('Gemini response: ' + JSON.stringify(response.data));

         const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

         if (modelResponse) {
            const updatedChatWithModel: any = [
               ...updatedChat,
               {
                  role: 'model',
                  parts: [{ text: modelResponse }],
               }
            ];
            setChat(updatedChatWithModel);
            setInput('');
         }
         console.log('bot: ', JSON.stringify(chat));
      } catch (error: any) {
         console.log('err calling Gemini: ', error);
         console.log('err response: ', error.response);
         setError('Try again');
      } finally {
         setLoading(false);
      }
   };

   const renderItem = ({ item }: any) =>
      <ChatBubble
         role={item.role}
         text={item.parts[0].text}
      // onSpeech={() => handleSpeech(item.parts[0].text)}
      />

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <LinearGradient
            colors={Colors.linear}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={styles.header} >

               <View style={styles.headerLeft}>
                  <TouchableOpacity onPress={() => router.back()} >
                     <Ionicons name="chevron-back" size={21} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push({
                     pathname: '/chatDetail/expertIn4',
                     params: { param: JSON.stringify(expert) }
                  })}>
                     <Image source={{ uri: expert?.img }} style={styles.img} resizeMode="cover"></Image>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => router.push({
                     pathname: '/chatDetail/expertIn4',
                     params: { param: JSON.stringify(expert) }
                  })}>
                     <Text style={[styles.userName, {color: Colors.text}]}>{expert?.name}</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.headerRight}>
                  <TouchableOpacity >
                     <Ionicons name="call" size={21} color={Colors.text} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 20 }}>
                     <Entypo name="dots-three-vertical" size={20} color={Colors.text} />
                  </TouchableOpacity>
               </View>

            </View>

            <FlatList
               // ref={flatListRef}
               data={chat}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
               contentContainerStyle={styles.chatContainer}
            />

            <View style={styles.chatInputContainer} >

               <KeyboardAvoidingView behavior='padding' >
                  <View style={styles.chatInputWrap}>
                     <TouchableOpacity style={styles.icon}>
                        <Feather name="camera" size={24} color={Colors.text} />
                     </TouchableOpacity>

                     <TextInput
                        style={styles.chatInput}
                        placeholder='Typing...'
                        value={input}
                        onChangeText={setInput}
                     />

                     {loading === true ? (<ActivityIndicator />)
                        : (
                           <TouchableOpacity style={styles.icon}>
                              <Feather name="send" size={24} color={Colors.text} />
                           </TouchableOpacity>
                        )
                     }

                  </View>
               </KeyboardAvoidingView>

            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default ChatDetail

const styles = StyleSheet.create({
   // header
   header: {
      height: 55,
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      borderBottomWidth: 0.5
   },
   img: {
      height: 40,
      width: 40,
      marginLeft: 20,
      borderRadius: 30,
   },

   userName: {
      marginLeft: 10,
      // borderWidth: 1,
      fontSize: 14,
      fontWeight: "500",
      // color: "white"
   },

   headerRight: {
      height: '100%',
      width: '20%',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-around',
      // marginHorizontal: 10,
      // borderWidth: 1
   },
   headerLeft: {
      height: '100%',
      width: '50%',
      flexDirection: "row",
      alignItems: "center",
      // borderWidth: 1
   },


   // Chat container
   // Chat ai
   chatContainer: {
      height: 'auto',
      width: '100%',
      paddingHorizontal: 5
   },


   // Chat container
   chatInputContainer: {
      height: 70,
      justifyContent: 'center',
      // borderWidth: 1
   },
   chatInputWrap: {
      height: 50,
      width: '98%',
      flexDirection: "row",
      alignItems: "center",
      alignSelf: 'center',
      justifyContent: "space-evenly",
      borderWidth: 1,
      borderRadius: 15,
   },
   chatInput: {
      height: '100%',
      width: '75%',
      fontSize: 15,
      fontWeight: "400",
      // paddingHorizontal: 5,
   },
   icon: {
      height: 'auto',
      width: '12%',
      alignItems: 'center',
      justifyContent: 'center',
   },
})