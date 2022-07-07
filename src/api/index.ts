import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'http://localhost:4000',
});

serverApi.interceptors.response.use((response) => response.data);

export default serverApi;
