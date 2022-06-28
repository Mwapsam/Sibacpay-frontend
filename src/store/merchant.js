import { createSlice } from '@reduxjs/toolkit';
import createMerchant, { getMerchant } from '../services/merchant.service';

const merchantSlice = createSlice({
  name: 'merchant',
  initialState: {
    merchant: [],
    status: null,
  },
  extraReducers: {
    [createMerchant.pending]: (state) => {
      state.status = 'loading';
    },
    [createMerchant.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.merchant.unshift(payload);
      console.log(payload);
    },
    [getMerchant.rejected]: (state) => {
      state.status = 'failed';
      state.merchant = [];
      state.isMerchantStored = false;
    },
    [getMerchant.fulfilled]: (state, action) => {
      state.status = 'success';
      state.merchant = action.payload;
    },
  },
});

export default merchantSlice.reducer;
