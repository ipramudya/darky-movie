import axios from 'axios';
import { CONTENT_URL, SIMILAR_CONTENT_URL } from '../utils/config';

const ApiMovies = {
   async fetchPopular() {
      const { data } = await axios.get(CONTENT_URL('movie', 'popular'));
      return data;
   },
   async fetchDetails(id) {
      const { data } = await axios.get(CONTENT_URL('movie', id));
      return data;
   },
   async fetchWithCategories(categories) {
      const { data } = await axios.get(CONTENT_URL('movie', categories));
      return data;
   },
   async fetchSimilar(id) {
      const { data } = await axios.get(SIMILAR_CONTENT_URL('movie', id));
      return data;
   },
};

export default ApiMovies;
