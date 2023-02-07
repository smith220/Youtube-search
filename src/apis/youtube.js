import axios from 'axios';

const KEY = 'AIzaSyCMaWlQIqFfxf11bBqnYHgsIzvWS8fwTYM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
