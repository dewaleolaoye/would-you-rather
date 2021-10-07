import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  randomUser: [],
  loading: 'idle',
};

export const fetchRandomUser = createAsyncThunk(
  'randomUser/fetchAllUser',
  async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');

      // console.log(response, 'RESPONSE');
      return response.json();
    } catch (error) {}
  }
);

const randomUser = createSlice({
  initialState,
  name: 'randomUser',

  reducers: {
    // fetchMore: (state, action) => {},
    // fetchMore2: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRandomUser.pending, (state, action) => {
      // console.log(action, 'PENDING');
      state.loading = 'pending';
    });

    builder.addCase(fetchRandomUser.rejected, (state, action) => {
      // console.log(action, 'REJECTED');
      state.loading = 'rejected';
    });

    builder.addCase(fetchRandomUser.fulfilled, (state, { payload }) => {
      state.randomUser = payload;
      state.loading = 'fulfilled';
    });
  },
});

// export const {} = randomUser.actions;
export default randomUser.reducer;
