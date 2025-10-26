import axios from 'axios';

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '741b660d329e4f55a824eed2a492daa4' },
});
