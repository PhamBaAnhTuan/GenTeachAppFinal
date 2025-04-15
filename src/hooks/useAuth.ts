import { UseSelector, shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuth = () => {
	const {
		user,
		isAuthenticated,
		accessToken,
		isLoading,
		error,
		video,
		category,
		products,
		expert,
		course,
		cart,
		topic,
		podcast,
	} = useSelector((state: RootState) => state.auth);
	return {
		user,
		isAuthenticated,
		accessToken,
		isLoading,
		error,
		video,
		category,
		products,
		expert,
		course,
		cart,
		topic,
		podcast,
	};
};
