import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../../app/api';

const initialState = {
  questions: {},
  loading: 'idle',
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

export const saveQuestionAnswer = createAsyncThunk(
  'questions/saveAnsweredQuestion',
  async (answerDetails, _thunk) => {
    const response = await _saveQuestionAnswer(answerDetails);

    return response;
  }
);

const questionSlice = createSlice({
  name: 'questions',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      const questions = action.payload;

      Object.values(questions).map((res) => {
        state.loading = 'fulfilled';
        return (state.questions[res.id] = res);
      });
    });

    builder.addCase(saveQuestion.fulfilled, (state, action) => {
      const question = action.payload;

      state.questions[question.id] = question;
    });

    builder.addCase(saveQuestionAnswer.fulfilled, (state, action) => {
      const questions = action.payload.questions;

      Object.values(questions).forEach((res) => {
        state.questions[res.id] = res;
      });
    });
  },
});

export const { createQuestion } = questionSlice.actions;
export default questionSlice.reducer;
