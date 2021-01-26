import axios from 'axios';

const KEY = '54aeebdfc8593bc9fda276dbc2aa9948';

export default axios.create({
  baseURL: 'api.openweathermap.org/data/2.5',
  params: {
    appid: KEY
  },
});
