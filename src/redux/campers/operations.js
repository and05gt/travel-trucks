import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, queryParams }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/campers?page=${page}&limit=4&${queryParams}`,
      );
      return data;
    } catch (error) {
      if (error.status === 404) {
        return thunkAPI.rejectWithValue('Not found campers');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      if (error.status === 404) {
        return thunkAPI.rejectWithValue('Not found camper');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
