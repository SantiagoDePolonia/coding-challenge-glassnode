import { API_URL_HASH_RATE } from '../../constants/glassnode';
import { API_KEY } from '../../constants/glassnode_key';

import fetchPriceUSDClose from '../fetchPriceUSDClose';

import {dataFetchStarted, dataFetchError, dataFetchFinished} from './hashRateSlice';

function fetchHashRate() {
  return fetch(`${API_URL_HASH_RATE}&api_key=${API_KEY}`);
}

export function getDifficultiesData() {

  return function(dispatch) {
    dispatch(dataFetchStarted())
    
    return Promise.all([fetchHashRate(), fetchPriceUSDClose()]).then(
      async (responses) => {
        responses.forEach((response) => {
          if(response.status !== 200) {
            throw Error("The response code is not valid!");
          }
        });
        const [difficultiesResponse, pricesResponse] = responses;

        return dispatch(dataFetchFinished([
          await difficultiesResponse.json(),
          await pricesResponse.json()
        ]));
      }
    ).catch(error => dispatch(dataFetchError()));
  };
}