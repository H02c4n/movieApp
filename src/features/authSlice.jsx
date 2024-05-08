import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    loading:false,
    error:false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
      },
      loginSuccess: (state, {payload}) => {
        state.loading = false;
        state.currentUser = payload;
      },
      logoutSuccess: (state) => {
        state.loading = false;
        state.currentUser = null;
      },
      registerSuccess: (state, {payload}) => {
        state.loading = false;
        state.currentUser = payload;
        state.error = false;
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
  }
});

export const {fetchStart, loginSuccess, logoutSuccess, registerSuccess, fetchFail} = authSlice.actions

export default authSlice.reducer