import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '@/reducers/UserReducer';
import CartReducer from '@/reducers/CartReducer';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer
  }
})
