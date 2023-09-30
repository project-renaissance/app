import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  expired_at: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      /* eslint no-param-reassign: "error" */

      state.token = action.payload.token;
      state.expired_at = action.payload.expired_at;
    },
  },
});

const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
