import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Login/userSlice';
import questionReducer from '../components/QuestionCard/questionSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    questions: questionReducer,
  },
});
