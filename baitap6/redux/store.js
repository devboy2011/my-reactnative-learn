import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});