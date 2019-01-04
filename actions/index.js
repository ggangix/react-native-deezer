import axios from "axios";
import _ from "lodash";
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
    const albums = response.data.data.map(item => item.album);
    // Unique albums by title.
    return _.uniqBy(albums, "title");
  });
};

export const getAlbumTracks = albumId => {
  return axiosInstance.get(`album/${albumId}`).then(response => {
    return response.data.tracks.data;
  });
};
