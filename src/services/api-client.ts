import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '741b660d329e4f55a824eed2a492daa4' },
});
