import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getQuestions } from '../../app/api';

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

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      const questions = action.payload;

      Object.values(questions).forEach((res) => {
        state.questions[res.id] = res;
        state.loading = 'fulfilled';
      });
    });
  },
});

// export const {} = questionSlice.actions
export default questionSlice.reducer;
