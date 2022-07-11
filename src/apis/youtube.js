import axios from 'axios';
const KEY = 'AIzaSyB_3WrwAg7_Wdbg4_2rfwg_8U7kox_OKZQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
