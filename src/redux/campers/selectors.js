// import { createSelector } from '@reduxjs/toolkit';
// import { selectLocationFilter } from '../filters/selectors.js';

export const selectCampers = (state) => state.campers.campers;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectLocationFilter],
//   (campers, filters) => {
//     return campers.filter((camper) =>
//       camper.location
//         .toLowerCase()
//         .trim()
//         .includes(filters.toLowerCase().trim()),
//     );
//   },
// );
