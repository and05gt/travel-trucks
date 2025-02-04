import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice.js';
import { filtersReducer } from './filters/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(persistConfig, campersReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
