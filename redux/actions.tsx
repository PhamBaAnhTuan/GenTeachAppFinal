import axios from "axios";
import { Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;

export const signInAction = (username: string, password: string, resetAuth: () => void, setLoading: any, rememberUser: boolean) => {
   return async (dispatch: Dispatch) => {
      if (!username && !password) {
         ToastAndroid.show('Enter Full name and Password!', ToastAndroid.SHORT);
         return;
      } if (!username) {
         ToastAndroid.show('Enter Username!', ToastAndroid.SHORT);
         return;
      } if (!password) {
         ToastAndroid.show('Enter Password!', ToastAndroid.SHORT);
         return;
      }
      try {
         setLoading(true);
         const response = await axios.post(`${API_URL}/user/signin/`,
            {
               username,
               password
            }
         );
         console.log('Sign in successfully: ', response.data);
         ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
         dispatch({
            type: 'SIGN_IN',
            payload: response.data
         })
         rememberUser ? console.log('Remember user!') : resetAuth();
         
      } catch (error: any) {
         console.log('SIGN IN ERROR: ', error.response.data.error || 'An error occurred');
         ToastAndroid.show(error.response.data.error || 'Sign in failed!', ToastAndroid.SHORT);
         resetAuth();
         setLoading(false);
      } finally {
         setLoading(false);
      }
      console.log('signin')
   };
}

export const signUpAction = (username: string, password: string, resetAuth: () => void, setLoading: any) => {
   return async (dispatch: Dispatch) => {
      if (!username || !password) {
         ToastAndroid.show('Enter Full name and Password!', ToastAndroid.SHORT);
         return;
      } if (!username || username.length < 6) {
         ToastAndroid.show('Username at least 6 characters!', ToastAndroid.SHORT);
         return;
      } if (!password || password.length < 6) {
         ToastAndroid.show('Password at least 6 characters!', ToastAndroid.SHORT);
         return;
      }
      try {
         setLoading(true);
         const response = await axios.post(`${API_URL}/user/signup/`,
            {
               username,
               password
            }
         );
         console.log('User sign up successfully: ', response.data.message);
         dispatch({
            type: 'SIGN_UP',
            payload: true
         })
         ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
         resetAuth();
      } catch (error: any) {
         let msg = error.response;
         if (msg = { "username": "A user with that username already exists." }) { msg = 'Username already exist!' }
         console.log('SIGN UP ERROR: ', msg);
         ToastAndroid.show(msg, ToastAndroid.SHORT);
         // resetAuth();
      } finally {
         setLoading(false);
      }
   }
}

export const signOutAction = () => {
   ToastAndroid.show('Signed out!', ToastAndroid.SHORT);
   return {
      type: 'SIGN_OUT',
      payload: false
   }
}

export const getUserProfile = (userId: number, accessToken: string) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await axios.get(`${API_URL}/user/profile/${userId}/`, {
            headers: {
               'Authorization': `Bearer ${accessToken}`,
            },
         });
         dispatch({
            type: 'GET_USER_PROFILE',
            payload: response.data
         })
         console.log('Get user profile successfully: ', response.data.user);
      } catch (error: any) {
         console.log('GET USER PROFILE ERROR: ', error.response.data.detail);
      }
   }
}

export const updateProfile = (data: any, resetForm: () => void) => {
   return (dispatch: Dispatch) => {
      if (!data.firstName || !data.lastName || !data.address || !data.phoneNumber) {
         ToastAndroid.show('Enter full information!', ToastAndroid.SHORT);
         return;
      }
      if (data.phoneNumber.toString().length < 10) {
         ToastAndroid.show('Phone number at least 10 digits!', ToastAndroid.SHORT);
         return;
      }
      dispatch({
         type: 'UPDATE_PROFILE',
         payload: data
      })
      console.log('Update profile successfully: ', data);
      ToastAndroid.show('Update profile successfully!', ToastAndroid.SHORT);
      resetForm();
   }
}

export const getAction = (url: string, type: string) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await axios.get(`${API_URL}/${url}`);
         dispatch({
            type: `GET_${type}`,
            payload: response.data
         })
         console.log(`Get ${type} successfully: `, response.data.map((item: any) => item?.id));
      } catch (error: any) {
         console.log(`GET ${type} ERROR: `, error.message);
      }
   }
}

export const postAction = (url: string, type: string, data: any, accessToken: string, resetFrom: () => void) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await axios.post(`${API_URL}/${url}`, data, {
            headers: {
               'Authorization': `Bearer ${accessToken}`,
            },
         });
         dispatch({
            type: `POST_${type}`,
            payload: response.data
         })

         console.log(`Add ${type} successfully: `, response.data);
         ToastAndroid.show(`Add ${type} successfully!`, ToastAndroid.SHORT);
         resetFrom();
      } catch (error: any) {
         console.log(`ADD ${type} ERROR: `, error.message);
      }
   }
}

export const updateAction = (url: string, type: string, id: number, data: any, accessToken: string, resetForm: () => void) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await axios.patch(`${API_URL}/${url}/${id}/`, data, {
            headers: {
               'Authorization': `Bearer ${accessToken}`,
            },
         });
         dispatch({
            type: `UPDATE_${type}`,
            payload: response.data,
         })

         console.log(`Update ${type} successfully: `, response.data);
         ToastAndroid.show(`Update ${type} successfully!`, ToastAndroid.SHORT);
         resetForm();
      } catch (error: any) {
         console.log(`UPDATE ${type} ERROR: `, error.message);
      }
   }
}

export const deleteAction = (url: string, type: string, id: number, name: string, accessToken: string) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await axios.delete(`${API_URL}/${url}/${id}/`, {
            headers: {
               'Authorization': `Bearer ${accessToken}`,
            },
         });
         dispatch({
            type: `DELETE_${type}`,
            payload: id
         })
         console.log(`Delete ${type} successfully: `, name);
         ToastAndroid.show(`Delete ${type} successfully!`, ToastAndroid.SHORT);
      } catch (error: any) {
         console.log(`DELETE ${type} ERROR: `, error.message);
      }
   }
}

export const addToCartAction = (item: any) => {
   console.log(`Added ${item.name} to cart!`);
   ToastAndroid.show(`Added ${item.name} to cart!`, ToastAndroid.SHORT);
   return {
      type: 'ADD_TO_CART',
      payload: item
   }
}

export const removeFromCartAction = (item: any) => {
   console.log(`Removed ${item.name} from cart!`);
   ToastAndroid.show(`Remove ${item.name} from cart!`, ToastAndroid.SHORT);
   return {
      type: 'REMOVE_FROM_CART',
      payload: item
   }
}