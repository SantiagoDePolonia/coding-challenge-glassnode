import { createSlice } from '@reduxjs/toolkit';

import secToMSec from '../../helpers/secToMSec';
import roundPrice from '../../helpers/roundPrice';

export const hashRateSlice = createSlice({
  name: 'hashRate',
  initialState: { 
    isLoading: true,
    isError: false,
    dataHashRates: [],
    dataPrices: []
  },
  reducers: {
    dataFetchStarted: state => {
      state.isLoading = true;
      state.isError = false;
    },
    dataFetchFinished: (state, action) => {
      const [difficulties, prices] = action.payload;

      state.dataHashRates = difficulties.map(obj => ([secToMSec(obj.t), obj.v])); 
      state.dataPrices = prices.map(obj => ([secToMSec(obj.t), roundPrice(obj.v)]));

      state.isLoading = false;
    },
    dataFetchError: state => {
      state.isLoading = false;
      state.isError = true;
    },
  }});

export const { dataFetchStarted, dataFetchFinished, dataFetchError } = hashRateSlice.actions;
export default hashRateSlice.reducer;