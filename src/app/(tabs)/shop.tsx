import { Image, StyleSheet, Platform, useColorScheme, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// slider
import { ImageSlider } from "react-native-image-slider-banner";
// context
import { useStoreContext } from '@/src/context/Context';
// colors
import { Colors } from '@/src/constants/Colors';
// icons
import { Feather, Ionicons } from '@expo/vector-icons';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/store/store';
// components
import SearchInput from '@/src/components/SearchInput';
import TypeCard from '@/src/components/shop/TypeCard';
import ItemCard from '@/src/components/shop/ItemCard';
// hooks
import { useAuth } from '@/src/hooks/useAuth';
import { dispatch } from '@/src/hooks/useDispatch';


export default function ShopScreen() {
  // auth
  const { category, products } = useAuth()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={Colors.linear}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={{ width: '85%' }}>
              <SearchInput />
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity onPress={() => router.push('/cart')}>
                <Ionicons name="cart-outline" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bannerContainer}>
            <ImageSlider
              data={[
                {
                  img: require("../../assets/banner/banner4.jpg"),
                },
                {
                  img: require("../../assets/banner/banner6.jpg"),
                },
                {
                  img: require("../../assets/banner/banner8.jpg"),
                },
                {
                  img: require("../../assets/banner/banner7.png"),
                },
                {
                  img: require("../../assets/banner/banner6.jpg"),
                },
              ]}
              localImg
              autoPlay={true}
              timer={5000}
              preview={false}
              showIndicator={false}
              showHeader={false}
              caroselImageStyle={{
                resizeMode: "contain",
                height: 150,
                width: Dimensions.get('screen').width,
                alignSelf: 'center'
              }}
            />
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.titleText, { color: Colors.text }]}>Popular</Text>
              <TouchableOpacity style={styles.viewAllTextWrap}>
                <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
              <View style={styles.categoryWrap}>
                {category && category.map((item: any, index: number) => (
                  <TypeCard
                    key={index}
                    icon={item.img ? { uri: item.img } : require('../../assets/background/logo2.png')}
                    typeName={item.name}
                    onPress={null}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          {category && category.map((item: any) => (
            <View key={item.id} style={{ marginTop: 10 }}>
              <View style={styles.titleContainer}>
                <Text style={[styles.titleText, { color: Colors.text }]}>{item.name}</Text>

                <TouchableOpacity
                  style={styles.viewAllTextWrap}
                  onPress={null}
                >
                  <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
                </TouchableOpacity>

              </View>

              <ScrollView horizontal={true}>
                <View style={styles.itemCardWrap}>
                  {products && products.map((item: any) => (
                    <ItemCard
                      key={item.id}
                      onPress={() => router.push(
                        {
                          pathname: '/shopDetail',
                          params: { param: JSON.stringify(item) }
                        }
                      )}
                      img={item.image ? { uri: item.image } : require('../../assets/background/logo1.png')}
                      name={item.name ? item.name : item.title}
                      brand={item.brand ? item.brand : item.category}
                      discount={item.discount}
                      freeShip={item.free_ship}
                      price={item.price}
                      sold={9832}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          ))}
        </ScrollView>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 2
  },
  headerRight: {
    height: 45,
    width: '13%',
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  // banner container
  bannerContainer: {
    height: 150,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    // marginVertical: 10
  },


  // Category
  categoryContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    marginTop: 20
  },


  titleContainer: {
    height: 30,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  viewAllTextWrap: {
    height: '100%',
    width: 'auto',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllText: {
    fontSize: 12,
    textDecorationLine: 'underline'
  },

  categoryWrap: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },


  itemCardWrap: {
    maxHeight: 270,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
