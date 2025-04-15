import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
	light: {
		text: "#212121",
		background: "#757575",
		onBackground: "#ffffff",
		icon: "#616161",

		// primary: "#4CAF50",
		onPrimary: "#FFFFFF",

		// secondary: "#E8F5E9",
		onSecondary: "#2E7D32",

		surface: "#E0E0E0",
		onSurface: "#212121",

		// error: "#D32F2F",
		// success: "#388E3C",
		// warning: "#FBC02D",
		// info: "#1976D2",
		disabled: "#B0BEC5",
		divider: "#E0E0E0",

		default: "#2C3E50",
		secondary: "#FFFFFF",
		primary: "#4A90E2",
		info: "#00B0FF",
		success: "#00C851",
		warning: "#FFBB33",
		error: "#FF4444",
	},
	dark: {
		text: "#E0E0E0",
		background: "#121212",
		onBackground: "#B0BEC5",
		icon: "#B0BEC5",

		// primary: "#4CAF50",
		onPrimary: "#FFFFFF",

		// secondary: "#1B5E20",
		onSecondary: "#E8F5E9",

		surface: "#1E1E1E",
		onSurface: "#E0E0E0",

		// error: "#EF5350",
		// success: "#4CAF50",
		// warning: "#FFCA28",
		// info: "#42A5F5",
		disabled: "#616161",
		divider: "#424242",

		default: "#465C71",
		secondary: "#1A1A1A",
		primary: "#6AB0FF",
		info: "#33C4FF",
		success: "#33D67A",
		warning: "#FFCC66",
		error: "#FF6666",
	},
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		resetState: () => {
			return initialState;
		},
		setThemeAction: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
	},
});

export const { setThemeAction } = themeSlice.actions;
export default themeSlice.reducer;
