import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import addressReducer from '../features/addressSlice';
import authReducer from '../features/authSlice';
import cartReducer from '../features/cartSlice';
import orderReducer from '../features/ordersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'currentUser', 'cart', 'address', 'order'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
