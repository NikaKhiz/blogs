import axios from 'axios';

const ACCESS_TOKEN =
  'bc65aa9d77ec2065670e6d12c18a7b1e5f201a5e659db454156aab555fadc3b7';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  return config;
});

export default axiosInstance;
