import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import difficultyReducer from './features/difficulty/difficultySlice'
import hashRateReducer from './features/hashRate/hashRateSlice'

export default configureStore({
  reducer: {
    difficulty: difficultyReducer,
    hashRate: hashRateReducer,
  },
  middleware: [thunk]
});
