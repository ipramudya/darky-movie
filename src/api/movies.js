import axios from 'axios';
import { CONTENT_URL } from '../utils/config';

const ApiMovies = {
   async fetchPopular() {
      const { data } = await axios.get(CONTENT_URL('movie', 'popular'));
      return data;
   },
};

export default ApiMovies;
