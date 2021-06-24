import { API_URL_PRICE_USD_CLOSE } from '../constants/glassnode';
import { API_KEY } from '../constants/glassnode_key';

export default function fetchPriceUSDClose() {
  return fetch(`${API_URL_PRICE_USD_CLOSE}&api_key=${API_KEY}`);
}
