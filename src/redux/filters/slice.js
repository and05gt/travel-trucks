import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleType: '',
  vehicleEquipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    changeTypeFilter: (state, action) => {
      state.vehicleType = action.payload;
    },
    changeEquipmentFilter: (state, action) => {
      state.vehicleEquipment = {
        ...state.vehicleEquipment,
        [action.payload]: !state.vehicleEquipment[action.payload],
      };
    },
  },
});

export const { changeLocationFilter, changeTypeFilter, changeEquipmentFilter } =
  slice.actions;
export const filtersReducer = slice.reducer;
