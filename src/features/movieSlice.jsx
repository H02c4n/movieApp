import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movieList:[],
    loading:false,
    error:false,
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
      },
      loadData: (state, { payload }) => {
        state.movieList = payload;
        state.loading = false;
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
      fetchEnd: (state) => {
        state.loading = false
      },
  }
});

export const {fetchStart, loadData, fetchFail, fetchEnd} = movieSlice.actions

export default movieSlice.reducer