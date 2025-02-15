import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleEquipment: [],
  vehicleType: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { changeFilters } = slice.actions;
export const filtersReducer = slice.reducer;
