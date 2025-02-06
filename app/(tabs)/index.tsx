import {
  Image, StyleSheet, Platform, useColorScheme, Text, Button, View, Dimensions,
  TouchableOpacity, StatusBar, ToastAndroid, FlatList, Modal, Alert, Pressable, ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useRef, useState } from 'react';
import Constants from 'expo-constants';
// Colors
import { Colors } from '@/constants/Colors';
// context
import { useStoreContext } from '@/context/Context';
// router
import { router, useGlobalSearchParams, useSegments } from 'expo-router';
// actions
import { signOutAction } from '@/redux/actions';
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';

// import BottomSheet from '@gorhom/bottom-sheet';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


export default function HomeScreen() {
  // context
  const { useRedux, dispatch, router } = useStoreContext();
  // redux
  const { isAuthenticated, user, accessToken, video, category, products, cart } = useRedux;
  // url
  const url = Constants.expoConfig?.extra?.API_URL;
  // params
  const { name } = useGlobalSearchParams();

  // Handle follow
  const [follow, setFollow] = useState('Follow');
  const setFL = () => {
    follow === 'Follow'
      ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
      : (setFollow('Follow'), ToastAndroid.show('Unfollow', ToastAndroid.SHORT));
  };
  // Handle heart
  const [heart, setHeart]: any = useState('hearto');
  const [color, setColor]: any = useState(Colors.text);
  const handleHeart = () => {
    setHeart(heart === 'hearto' ? 'heart' : 'hearto');
    setColor(color === Colors.text ? 'red' : Colors.text);
  };
  // handle sign out
  const signOut = () => {
    dispatch(signOutAction());
  }

  // log
  const log = () => console.log(
    'User: ', user,
    '\nAccess token: ', accessToken,
    '\nIs authenticated: ', isAuthenticated,
    '\nURL: ', url,
    '\nVideo: ', video.map((vid: any) => vid.caption),
    '\nCategory: ', category.map((cat: any) => cat.name),
    '\nProducts: ', products.map((product: any) => product.name),
    '\nCart: ', cart.map((item: any) => item.name),
  );
  // video
  const arr = [1, 2, 3]
  const statusBar: any = Platform.OS === 'android' ? StatusBar.currentHeight : 44
  const renderItem = ({ item, index }: any) => (
    <View style={[{ flex: 1, height: Dimensions.get('screen').height - statusBar - 70 }]} key={index}>

      <ActivityIndicator size={'large'} color={Colors.lightPink} style={{ alignSelf: 'center', position: 'absolute', top: 350 }} />

      <TouchableOpacity
        style={styles.personIcon}
        onPress={() => router.push('profile')}
      >
        <Ionicons name="person-outline" size={24} color={Colors.text} />
      </TouchableOpacity>

      <View style={styles.navbarInterAct}>
        <TouchableOpacity style={styles.likeWrap} onPress={handleHeart}>
          <AntDesign name={heart} size={25} color={color} />
          <Text style={[styles.text1, { color: Colors.text }]} >{item.like}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <FontAwesome6 name="comment-alt" size={25} color={Colors.text} />
          <Text style={[styles.text1, { color: Colors.text }]} >{item?.comment}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap} onPress={log}>
          <Feather name="send" size={25} color={Colors.text} />
          <Text style={[styles.text1, { color: Colors.text }]} >{item?.share}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <Entypo name="dots-three-vertical" size={20} color={Colors.text} />
        </TouchableOpacity>

      </View>

      <View style={styles.captionContainer}>

        <View style={styles.in4Wrap}>
          <View style={styles.avtWrap}>
            <TouchableOpacity>
              <Image style={styles.avt} resizeMode="cover" source={
                item?.expert_img ? { uri: item.expert_img }
                  : require('../../assets/images/icon.png')
              } />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: Colors.text, paddingLeft: 10 }}>{item?.expert_name}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.flWrap, { borderColor: Colors.text }]} onPress={setFL}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.text }}>{follow}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.captionWrap}>
          <Text style={{ fontSize: 12, fontWeight: '400', color: Colors.text }}>{item?.caption}</Text>
        </View>

      </View>

      <View style={styles.musicWrap}>
        <TouchableOpacity style={[styles.musicBox, { borderColor: Colors.text }]}>
          <FontAwesome name="music" size={15} color={Colors.text} />
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10, color: Colors.text }}>GenTeach music</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/background/logo2.png')} resizeMode="center" style={[styles.musicImg, { borderColor: Colors.divider }]} />
        </TouchableOpacity>
      </View>
    </View>
  )
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={Colors.linear}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <FlatList
          data={video}
          renderItem={renderItem}
          pagingEnabled
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  personIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  videoContainer: {
    height: 'auto',
    width: 'auto',

  },

  // navbar container
  navbarInterAct: {
    height: 250,
    width: 60,
    // borderWidth: 1,
    position: 'absolute',
    bottom: 35,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  likeWrap: {
    height: 'auto',
    width: 'auto',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.onText,
    // paddingTop: 5
  },

  captionContainer: {
    height: 80,
    width: 300,
    // borderWidth: 1,
    position: 'absolute',
    left: 0,
    bottom: 35,
    paddingLeft: 10
  },

  in4Wrap: {
    height: '50%',
    width: 260,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avtWrap: {
    height: '100%',
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // borderWidth: 1,
    // marginLeft: 5
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 30,
    // borderWidth: 1,
  },

  flWrap: {
    height: 25,
    width: 75,
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.onText
  },

  captionWrap: {
    height: '50%',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  musicWrap: {
    height: 30,
    width: '100%',
    // borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    // marginBottom: 5
  },
  musicBox: {
    height: '100%',
    width: 'auto',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.onText,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  musicImg: {
    height: '100%',
    width: 30,
    borderWidth: 2,
    borderRadius: 5,
  },


  // modal
  tabContainer: {
    // flex: 1,
    // height: 300,
    // width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});