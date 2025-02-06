import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thunk } from 'redux-thunk';
import Reducer from './reducer';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage
};

const rootReducer = combineReducers({
   reducer: persistReducer(persistConfig, Reducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;