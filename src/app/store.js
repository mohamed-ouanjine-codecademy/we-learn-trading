// store.js
import { configureStore } from '@reduxjs/toolkit';
import roadMapReducer from '../features/road-map/RoadMapSlice'; // Import your root reducer

const store = configureStore({
  reducer: {
    roadMap: roadMapReducer
  }
});

export default store;
