import { ToastAndroid } from "react-native";

export const FormValidation = (username: string, password: string): boolean => {
	if (!username) {
		ToastAndroid.show("Enter Username", ToastAndroid.SHORT);
		return false;
	} else if (username.length < 5) {
		ToastAndroid.show("Username must be at least 5 characters long", ToastAndroid.SHORT);
		return false;
	}

	// Validate password
	if (!password) {
		ToastAndroid.show("Enter Password", ToastAndroid.SHORT);
		return false;
	} else if (password.length < 5) {
		ToastAndroid.show("Password must be at least 5 characters long", ToastAndroid.SHORT);
		return false;
	}
	// Trả về true nếu không có lỗi (validation thành công)
	return true
};
