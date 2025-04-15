import React, { useState } from "react";
import {
	View, Text, TextInput, Image, TouchableOpacity,
	Button, StyleSheet, Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import Slider from '@react-native-community/slider';
// params
import { useGlobalSearchParams, router } from "expo-router";
// icons
import { AntDesign } from "@expo/vector-icons";
// icons
import {
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons,
	FontAwesome6,
	Feather
} from "@expo/vector-icons";
// colors
import { Colors } from "@/src/constants/Colors";
import Header from "@/src/components/Header";

const PodcastDetail = () => {
	// params
	const { param }: any = useGlobalSearchParams();
	// parse the 'video' params
	const selectedPodcast = JSON.parse(param);

	const [favoriteIcon, setFavoriteIcon]: any = useState({ icon: 'favorite-border', color: Colors.text });
	const handleFavoriteIcon = () => {
		setFavoriteIcon((preState: any) => ({
			icon: preState.icon === 'favorite-border' ? 'favorite' : 'favorite-border',
			color: preState.color === Colors.text ? 'plum' : Colors.text,
		}));
	};
	const [pauseIcon, setPauseIcon]: any = useState({ icon: 'pause-circle', color: Colors.text });
	const handlePauseIcon = () => {
		setPauseIcon((preState: any) => ({
			icon: preState.icon === 'pause-circle' ? 'play-circle' : 'pause-circle',
			// color: preState.color === 'black' ? 'plum' : 'black',
		}));
	};

	// Slider
	const [value, setValue] = useState(0);
	const log = () => { console.log(favoriteIcon) }

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<LinearGradient
				colors={Colors.linear}
				style={{ flex: 1 }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<Header
					title={selectedPodcast?.name}
					backMethod={() => router.replace('/podcast')}
					headerRight={null}
				/>

				<View style={{ height: "50%", justifyContent: 'center' }}>
					<Image
						source={selectedPodcast?.img ? { uri: selectedPodcast.img } : require('../../assets/background/logo2.png')}
						resizeMode="cover"
						style={styles.podcastImg}
					/>
				</View>

				<View style={styles.titleContainer}>
					<TouchableOpacity>
						<FontAwesome6 name="share" size={24} color={Colors.text} />
					</TouchableOpacity>
					<View>
						<Text style={[styles.podcastTitle, { color: Colors.text }]}>{selectedPodcast?.name}</Text>
						<Text style={[styles.podcastAuth, { color: Colors.text }]}>{selectedPodcast?.expert_name}</Text>
					</View>
					<TouchableOpacity onPress={handleFavoriteIcon}>
						<MaterialIcons
							name={favoriteIcon.icon}
							size={24}
							color={favoriteIcon.color}
						/>
					</TouchableOpacity>
				</View>


				<View style={styles.timeLine}>
					<View>
						<Text style={{ fontSize: 13 }}>0:00</Text>
					</View>

					{/* <Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={100}
						step={1}
						value={value}
						onValueChange={setValue}
						minimumTrackTintColor="pink"
						maximumTrackTintColor="black"
						thumbTintColor="plum"
					/> */}

					<View>
						<Text style={{ fontSize: 13, color: Colors.text }}>{selectedPodcast?.time}</Text>
					</View>
				</View>


				<View style={styles.navbarControl}>
					<TouchableOpacity onPress={() => router.push('/podcastDetail/podcastList')}>
						<MaterialCommunityIcons
							name="playlist-play"
							size={24}
							color={Colors.text}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign
							name="fastbackward"
							size={24}
							color={Colors.text}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={handlePauseIcon}
					// delayPressOut={200}
					>

						<Feather name={pauseIcon.icon} size={70} color={Colors.text} />
					</TouchableOpacity>

					<TouchableOpacity>
						<AntDesign name="fastforward" size={24} color={Colors.text} />
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="play-speed"
							size={24}
							color={Colors.text}
						/>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default PodcastDetail;

const styles = StyleSheet.create({
	// Podcast Detail
	navbarTop: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		// borderWidth: 1,
	},
	podcastImg: {
		height: 330,
		width: 330,
		alignSelf: 'center',
		justifyContent: 'center',
		// flex: 1,
		borderRadius: 15
	},
	// Podcast name, author
	titleContainer: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		// borderWidth: 1
	},
	podcastTitle: {
		// width: 230,
		fontSize: 17,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		// borderWidth: 1
	},
	podcastAuth: {
		fontSize: 14,
		alignSelf: 'center',
		textAlign: 'center',
		fontWeight: '600'
	},

	// Timeline
	timeLine: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: 10,
		// borderWidth: 1,
	},
	// Slider
	slider: {
		width: '75%',
		height: 40,
	},
	// Navbar Controller
	navbarControl: {
		height: 120,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		// borderWidth: 1
	}
})