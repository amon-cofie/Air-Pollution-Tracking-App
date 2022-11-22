import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from './cities';
import pollutionDataSlice from './pollutionData';

const rootReducer = combineReducers({
  cities: citiesSlice,
  pollutionData: pollutionDataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
