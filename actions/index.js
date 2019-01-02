import axios from axios;

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
  timeout: 2000,
  headers: {'X-Mashape-Key': '4Zlwt3EqQsmshQHliLHtEFcyfX9up13YiUjjsn9YLo5XmMeDwc'}
});