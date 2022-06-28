import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import LocalStorage from '../helpers/localStorage';

const jwtToken = LocalStorage.getUser();

const createMerchant = createAsyncThunk(
  'merchant/createMerchant',
  async (merchant) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/merchants`, merchant, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  },
);

export const getMerchant = createAsyncThunk(
  'merchant/getMerchant',
  async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/merchants/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  },
);

export default createMerchant;
