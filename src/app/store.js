import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Login/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
