import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../pages/Login/userSlice';
import questionReducer from '../components/QuestionCard/questionSlice';
import randmoUserReducer from '../slices/randmoUser.slice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    questions: questionReducer,
    randomUser: randmoUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
