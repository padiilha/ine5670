import axios from 'axios';
import { config } from 'dotenv';

config();

const api = axios.create({
  baseURL: `${process.env.BASE_URL}:${process.env.PORT}`
})

export default api;
