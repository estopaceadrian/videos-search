import axios from 'axios';
const KEY = 'AIzaSyBwzQ4IxQUxcK_2S3q8efnFsTDAOyd_DiI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3' + '/search',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
