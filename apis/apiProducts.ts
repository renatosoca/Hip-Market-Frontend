import axios from 'axios';

const apiProducts = axios.create({
  //baseURL: `http://localhost:4003/api`,
  baseURL: `${process.env.NEXT_PUBLIC_BACK_URI}/api`,
});

export default apiProducts;