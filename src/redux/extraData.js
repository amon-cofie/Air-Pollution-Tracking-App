import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allCountries: [],
  isLoading: true,
};

const URL = 'https://restcountries.com/v3.1/all';

export const fetchExtraData = createAsyncThunk('data/extraData', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const extraDataSlice = createSlice({
  name: 'extraData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchExtraData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchExtraData.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.allCountries = action.payload;
      // console.log(state.pollutionData);
      state.isLoading = false;
    },
    [fetchExtraData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default extraDataSlice.reducer;
