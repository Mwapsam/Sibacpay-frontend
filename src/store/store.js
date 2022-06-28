import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import merchantSlice from './merchant';

const store = configureStore({
  reducer: {
    user,
    merchant: merchantSlice,
  },
});

export default store;
