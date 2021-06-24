import { createSlice } from '@reduxjs/toolkit'

import secToMSec from '../../helpers/secToMSec';
import roundPrice from '../../helpers/roundPrice';

export const difficultySlice = createSlice({
  name: 'difficulty',
  initialState: { 
    isLoading: true,
    isError: false,
    dataDifficulties: [],
    dataPrices: []
  },
  reducers: {
    dataFetchStarted: state => {
      state.isLoading = true;
      state.isError = false;
    },
    dataFetchFinished: (state, action) => {
      const [difficulties, prices] = action.payload;

      state.dataDifficulties = difficulties.map(obj => ([secToMSec(obj.t), obj.v])); 
      state.dataPrices = prices.map(obj => ([secToMSec(obj.t), roundPrice(obj.v)]));

      state.isLoading = false;
    },
    dataFetchError: state => {
      state.isLoading = false;
      state.isError = true;
    },
  }});

export const { dataFetchStarted, dataFetchFinished, dataFetchError } = difficultySlice.actions;
export default difficultySlice.reducer;