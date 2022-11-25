import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from './cities';
import pollutionDataSlice from './pollutionData';
import extraDataSlice from './extraData';

const rootReducer = combineReducers({
  cities: citiesSlice,
  pollutionData: pollutionDataSlice,
  extraData: extraDataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
