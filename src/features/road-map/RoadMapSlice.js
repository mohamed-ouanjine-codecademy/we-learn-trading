// roadMapSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  plan: 'technicalAnalysis',
  roadMap: {},
  getRoadMap: {
    isPending: false,
    isFulfilled: false,
    isRejected: false
  }
};

export const getRoadMap = createAsyncThunk(
  'roadMap/getRoadMap',
  async (planName) => {
    try {
      const response = await fetch(`/data/${planName}Plan.json`);
      const roadMap = await response.json();

      return roadMap;
    } catch (error) {
      throw error;
    }
  }
)

const roadMapSlice = createSlice({
  name: 'readMap',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoadMap.pending, (state) => {
        state.roadMap = {};

        state.getRoadMap.isPending = true;
        state.getRoadMap.isFulfilled = false;
        state.getRoadMap.isRejected = false;
      })
      .addCase(getRoadMap.fulfilled, (state, action) => {
        state.roadMap = action.payload;

        state.getRoadMap.isPending = false;
        state.getRoadMap.isFulfilled = true;
        state.getRoadMap.isRejected = false;
      })
      .addCase(getRoadMap.rejected, (state) => {
        state.getRoadMap.isPending = false;
        state.getRoadMap.isFulfilled = false;
        state.getRoadMap.isRejected = true;
      })
  }
});

export const {
  setPlan
} = roadMapSlice.actions;

export default roadMapSlice.reducer;