import { Image, StyleSheet, Platform, useColorScheme, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
// context
import { useStoreContext } from '@/src/context/Context';
// color
import { Colors } from '@/src/constants/Colors';
// components
import SearchInput from '@/src/components/SearchInput';
import ExpertCard from '@/src/components/chat/ExpertCard';
// hooks
import { useAuth } from '@/src/hooks/useAuth';


export default function ChatScreen() {
  // auth
  const { expert } = useAuth()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={Colors.linear}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchInput />

          <View style={styles.expertContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: Colors.text }]}>Mental health expert</Text>
              <TouchableOpacity>
                <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.expertCardContainer}>
              <ScrollView horizontal={true}>
                {expert && expert.map((item: any) => (
                  <ExpertCard
                    key={item.id}
                    onPress={() => router.push({
                      pathname: '/chatDetail',
                      params: { param: JSON.stringify(item) }
                    })}
                    img={item.img ? { uri: item.img } : require('../../assets/images/icon.png')}
                    name={item.name}
                    isOnline={item.is_online}
                    rate={item.rate}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.expertContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: Colors.text }]}>Mental health expert</Text>
              <TouchableOpacity>
                <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.expertCardContainer}>
              <ScrollView horizontal={true}>
                {expert && expert.map((item: any) => (
                  <ExpertCard
                    key={item.id}
                    onPress={() => router.push({
                      pathname: '/chatDetail',
                      params: { param: JSON.stringify(item) }
                    })}
                    img={item.img ? { uri: item.img } : require('../../assets/images/icon.png')}
                    name={item.name}
                    isOnline={item.is_online}
                    rate={item.rate}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.expertContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: Colors.text }]}>Mental health expert</Text>
              <TouchableOpacity>
                <Text style={[styles.viewAllText, { color: Colors.text }]}>View all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.expertCardContainer}>
              <ScrollView horizontal={true}>
                {expert && expert.map((item: any) => (
                  <ExpertCard
                    key={item.id}
                    onPress={() => router.push({
                      pathname: '/chatDetail',
                      params: { param: JSON.stringify(item) }
                    })}
                    img={item.img ? { uri: item.img } : require('../../assets/images/icon.png')}
                    name={item.name}
                    isOnline={item.is_online}
                    rate={item.rate}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  expertContainer: {
    height: 'auto',
    width: '100%',
    // borderRadius: 10,
    // padding: 10,
    // alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  expertCardContainer: {
    marginBottom: 20,
  },
});
