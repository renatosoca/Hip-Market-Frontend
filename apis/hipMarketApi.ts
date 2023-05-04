import axios from 'axios';

const hipMarketApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACK_URI}/api`,
});

export default hipMarketApi;