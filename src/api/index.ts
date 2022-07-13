import axios, { AxiosInstance } from 'axios';

const serverApi: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/movies',
});

serverApi.interceptors.response.use((response) => response.data);

export default serverApi;
