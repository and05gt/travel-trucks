import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById } from './operations.js';

const initialState = {
  campers: [],
  loading: false,
  error: null,
  currentCamper: {},
  favorites: [],
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id,
      );

      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCampers.pending, getCamperById.pending),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        isAnyOf(fetchCampers.fulfilled, getCamperById.fulfilled),
        (state) => {
          state.loading = false;
        },
      )
      .addMatcher(
        isAnyOf(fetchCampers.rejected, getCamperById.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { toggleFavorite } = slice.actions;
export const campersReducer = slice.reducer;
