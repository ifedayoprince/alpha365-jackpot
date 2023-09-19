// store.ts
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice'; // Import your timerSlice

const store = configureStore({
  reducer: {
    timer: timerReducer,
    // Add other reducers as needed.
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
