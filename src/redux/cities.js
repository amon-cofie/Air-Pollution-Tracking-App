import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import axios from 'axios';

const initialState = {
  cities: [],
  isLoading: true,
  displayInput: false,
  displayMagnify: true,
};

const API_KEY = '6c7f1cb9c3e9af10bebb3ebf463ba368';

export const fetchCities = createAsyncThunk(
  'GET_CONTINENTS',
  async (payload) => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${payload}&limit=5&appid=${API_KEY}`,
    );
    return response.data;
  },
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    displayInput: (state) => ({
      ...state,
      displayInput: true,
    }),
    removeInput: (state) => ({
      ...state,
      displayInput: false,
    }),
    displayMagnify: (state) => ({
      ...state,
      displayMagnify: true,
    }),
    removeMagnify: (state) => ({
      ...state,
      displayMagnify: false,
    }),
  },
  extraReducers: {
    [fetchCities.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCities.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.cities = action.payload;
      state.isLoading = false;
    },
    [fetchCities.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  displayInput, removeInput, displayMagnify, removeMagnify,
} = citiesSlice.actions;

export default citiesSlice.reducer;
