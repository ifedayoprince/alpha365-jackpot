// timerSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
}

const initialState: TimerState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    resetTimerTo10Minutes: (state) => {
      state.hours = 0;
      state.minutes = 10;
      state.seconds = 0;
    },
    resetTimerTo5Minutes: (state) => {
      state.hours = 0;
      state.minutes = 5;
      state.seconds = 0;
    },
    resetTimerTo2_5Minutes: (state) => {
      state.hours = 0;
      state.minutes = 2;
      state.seconds = 30;
    },
  },
});

export const {
  resetTimerTo10Minutes,
  resetTimerTo5Minutes,
  resetTimerTo2_5Minutes,
} = timerSlice.actions;
export default timerSlice.reducer;
