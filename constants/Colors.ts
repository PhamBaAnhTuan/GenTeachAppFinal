/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const linear = <any>["#dda0dd", "#66ffff"];

export const Colors = {
	linear: linear,
	tint: tintColorLight,
	icon: "#687076",
	tabIconDefault: "#687076",
	tabIconSelected: tintColorLight,

	pink: "#e3aadd",
	lightPink: "#f4e7f8",

	lightBrown: "#f2DDDC",
	lightOrange: "#f6bcba",
	blue: "#bbe3ff",
	plum: "#c8a8e9",
	sky: "#c3c7f4",

	light: {
		background: "#f1f1f1",
	},
	dark: {
		background: "#010101",
	},

	text: "#333333",
	onText: "#ffffff",

	primary: "plum",
	onPrimary: "#ffffff",
	
	secondary: "#e3aadd",
	onSecondary: "#ffffff",

	surface: "#f0f0f0",
	onSurface: "#000000",

	error: "#d32f2f",
	success: "#388e3c",
	warning: "#fbc02d",
	info: "#1976d2",
	disabled: "#e0e0e0",
	divider: "#bdbdbd",
};
