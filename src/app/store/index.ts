import { configureStore, combineReducers, isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import usersReducer from 'features/users/store/usersSlice';

const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast.error(action.payload || 'An error occured');
  }

  return next(action);
};

const reducers = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(errorMiddleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
