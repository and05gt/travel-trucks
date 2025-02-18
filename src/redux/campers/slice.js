import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById } from './operations.js';

const initialState = {
  campers: [],
  loading: false,
  error: null,
  currentCamper: null,
  favorites: [],
  page: 1,
  total: 0,
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
    changePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;

        if (state.page > 1) {
          state.campers = [...state.campers, ...action.payload.items];
        } else {
          state.campers = action.payload.items;
        }
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
          state.campers = [];
        },
      );
  },
});

export const { toggleFavorite, changePage } = slice.actions;
export const campersReducer = slice.reducer;
