import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../../app/api';

const initialState = {
  allUsers: {},
  loading: 'idle',
  authedUser: {},
};

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const response = await _getUsers();
    return response;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.authedUser = Object.values(action.payload)[0];
    },

    logoutUser: (state, action) => {
      state.authedUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      const users = action.payload;

      Object.values(users).forEach((res) => {
        state.allUsers[res.id] = res;
        state.loading = 'fulfilled';
      });
    });
  },
});

export const { authUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
