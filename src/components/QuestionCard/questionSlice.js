import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';
import { _getQuestions, _saveQuestion } from '../../app/api';

const initialState = {
  questions: {},
  loading: 'idle',
  status: 'pending',
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchAllQuestions',
  async () => {
    const response = await _getQuestions();
    return response;
  }
);

export const saveQuestion = createAsyncThunk(
  'questions/saveQuestion',
  async (question) => {
    const response = await _saveQuestion(question);
    return response;
  }
);

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    createQuestion: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      const questions = action.payload;

      // Object.values(questions).map((res) => {
      //   state.loading = 'fulfilled';
      //   return (state.questions[res.id] = res);
      // });

      Object.values(questions).map((res) => {
        state.loading = 'fulfilled';
        return (state.questions[res.id] = res);
      });
      // .sort((a, b) => console.log(state.questions));
      // (a, b) => tweets[b].timeStamp - tweets[a].timeStamp
      // state.questions[b].timestamp - state.questions[a].timestamp
    });

    builder.addCase(saveQuestion.fulfilled, (state, action) => {
      const question = action.payload;

      state.status = 'fulfilled';

      Object.values(state.questions).push(question);
    });
  },
});

export const { createQuestion } = questionSlice.actions;
export default questionSlice.reducer;
