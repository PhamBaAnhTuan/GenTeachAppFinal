import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { createContext, useContext, useState, useEffect } from 'react';
// type
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/store/store';

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   // Dispatch for redux
   const dispatch: AppDispatch = useDispatch<AppDispatch>();
   // Redux
   const useRedux = useSelector((state: RootState) => state.auth);
   // Form
   const [email, setEmail] = useState('');
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [data, setData] = useState({});
   // Reset auth
   const resetAuth = () => {
      setUserName('');
      setPassword('');
      setEmail('');
   };
   // reset form
   const resetForm = () => setData({})
   // loading
   const [loading, setLoading] = useState(false);
   // remember user
   const [rememberUser, setRememberUser] = useState(false);

   return (
      <Context.Provider value={{
         useRedux, dispatch,
         email, userName, password, data,
         resetAuth, resetForm,
         setEmail,
         setUserName,
         setPassword,
         setData,
         loading, setLoading,
         rememberUser, setRememberUser
      }}>
         {children}
      </Context.Provider>
   )
}

export const useStoreContext = () => {
   const value = useContext(Context);
   if (!value) {
      throw new Error('useStore must be used within an ContextProvider');
   }
   return value;
}