import axios from 'axios';

const apiProducts = axios.create({
  baseURL: `${process.env.NEXT_BACK_URI}/api`,
});

export default apiProducts;