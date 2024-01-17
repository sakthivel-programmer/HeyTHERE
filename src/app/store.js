import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/counter/usersReducer';

export const store = configureStore({
  reducer: {
    usersReducer
  },
});
