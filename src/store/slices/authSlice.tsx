import { createSlice, createAsyncThunk, PayloadAction, isRejectedWithValue } from "@reduxjs/toolkit";
// api
import { authenticateAPI } from "@/src/services/authAPI";
import { ToastAndroid } from "react-native";

import { FormValidation } from "@/src/utils/formValidation";

export const signInAction = createAsyncThunk(
	"auth/signInAction",
	async ({ username, password, resetForm }: { username: string; password: string; resetForm: any }, { rejectWithValue }) => {
		try {
			if (!FormValidation(username, password)) {
				return rejectWithValue("Thông tin đăng nhập không hợp lệ");
			}
			const data = await authenticateAPI(username, password, "signin");
			console.log("Auth slide: ", data);
			resetForm()
			return { user: data.user_data, accessToken: data.access_token };

		} catch (error: any) {
			console.log("failed...");
			console.log(error);
			ToastAndroid.show(error, ToastAndroid.SHORT)
			// resetForm()
			return rejectWithValue(error);
		}
	},
);

export const signUpAction = createAsyncThunk(
	"auth/signUpAction",
	async ({ username, password, resetForm }: { username: string; password: string, resetForm: () => void }, { rejectWithValue }) => {
		try {
			console.log("signing up...");
			const data = await authenticateAPI(username, password, "signup");
			console.log(data);
			// resetForm()
			return { user: data.user_data, accessToken: data.access_token };
		} catch (error) {
			console.log("failed...");
			console.log(error);
			// resetForm()
			return rejectWithValue(error);
		}
	},
);

// export const updateProfile = createAsyncThunk(
// 	"auth/updateProfile",
// 	async ({ data }: { data: any }, { rejectWithValue }) => {
// 		try {
// 			console.log("updating profile...");
// 			console.log("User profile: ", data);
// 			return { data };
// 		} catch (error) {
// 			console.log("failed...");
// 			console.log(error);
// 			return rejectWithValue(error);
// 		}
// 	}
// )

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		user: null,
		accessToken: null,
		isLoading: false,
		error: null,
		video: [],
		category: [],
		products: [],
		expert: [],
		topic: [],
		course: [],
		podcast: [],
		cart: [],
	},
	reducers: {
		signOutAction: (state) => {
			state.isAuthenticated = false;
			state.user = null;
			state.accessToken = null;
		},
		updateProfile: (state: any, action: PayloadAction<any>) => {
			state.user = { ...state.user, ...action.payload };
		},
	},
	extraReducers(builder) {
		builder
			.addCase(signInAction.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(signInAction.fulfilled, (state, action: PayloadAction<{ accessToken: any; user: any } | undefined>) => {
				state.isLoading = false;
				if (action.payload) {
					state.isAuthenticated = true;
					state.user = action.payload.user;
					state.accessToken = action.payload.accessToken;
				}
			})
			.addCase(signInAction.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
});

export const { signOutAction, updateProfile } = authSlice.actions;
export default authSlice.reducer;