import axios from 'axios';

const apiProducts = axios.create({
  baseURL: `http://localhost:4003/api`,
});

export default apiProducts;