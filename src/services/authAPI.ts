import axios from "axios";

const API_URL = "http://192.168.31.188:8000/user/";

export const authenticateAPI = async (username: string, password: string, method: string) => {
	try {
		console.log(`${method + "..."}`);
		const response: any = await axios.post(API_URL + method + "/", { username, password });
		console.log(`${method} successfully: ${response?.data?.user_data?.username}`);
		return response.data;
	} catch (error: any) {
		throw error?.response?.data?.error;
	}
};

export const updateAction = async (data: any, method: string) => {
	try {
		console.log(`${method}`);
	} catch (error: any) {}
};
