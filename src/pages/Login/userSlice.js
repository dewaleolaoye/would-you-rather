import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: {},
  loading: 'idle',
  authedUser: {},
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      const users = action.payload;

      Object.values(users).forEach((res) => {
        state.allUsers[res.id] = res;
        state.loading = 'fulfilled';
      });
    },

    authUser: (state, action) => {
      state.authedUser = Object.values(action.payload)[0];
    },

    logoutUser: (state, action) => {
      state.authedUser = action.payload;
    },
  },
});

export const { fetchUsers, authUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
