import axios from "axios";
import API_KEY from "../config";

const axiosInstance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.mashape.com/",
  timeout: 2000,
  headers: {
    "X-Mashape-Key": API_KEY
  }
});

export const searchTracks = singerName => {
  return axiosInstance.get(`search/?q=${singerName}`).then(response => {
    return response.data.data.map(item => item.album);
  });
};
