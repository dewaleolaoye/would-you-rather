import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../pages/Login/userSlice';
import questionReducer from '../components/QuestionCard/questionSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    questions: questionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
