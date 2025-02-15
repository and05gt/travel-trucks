import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (page, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { location, vehicleType: form, vehicleEquipment } = state.filters;

      const selectedEquipment = Object.fromEntries(
        Object.entries(vehicleEquipment).filter(([, value]) => value),
      );

      if (selectedEquipment.automatic) {
        selectedEquipment['automatic'] = selectedEquipment['transmission'];
        selectedEquipment.transmission = 'automatic';
        delete selectedEquipment['automatic'];
      }

      const params = {
        location,
        form,
        ...selectedEquipment,
      };

      const { data } = await axios.get(`/campers?page=${page}&limit=4`, {
        params,
      });
      return data;
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
