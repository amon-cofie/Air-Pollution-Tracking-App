import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = `6c7f1cb9c3e9af10bebb3ebf463ba368`;

const initialState = {
  pollutionData: {},
  // AQI: 1,
  isLoading: false,
};

export const fetchPollutionData = createAsyncThunk(
  'GET_POLLUTION_DATA',
  async (payload) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${payload.lat}&lon=${payload.lon}&appid=${API_KEY}`,
    );
    console.log(response.data);
    return response.data;
  },
);

const pollutionDataSlice = createSlice({
  name: 'pollutionData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPollutionData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPollutionData.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.pollutionData = action.payload;
      // console.log(state.pollutionData);
      state.isLoading = false;
    },
    [fetchPollutionData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default pollutionDataSlice.reducer;
