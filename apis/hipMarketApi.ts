import axios from 'axios';
import Cookies from 'js-cookie';

const hipMarketApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACK_URI}/api`,
});

hipMarketApi.interceptors.request.use(config => {
  const token: string = Cookies.get('authToken') || '';

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
})

export default hipMarketApi;