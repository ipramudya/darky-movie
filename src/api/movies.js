import axios from 'axios';
import {
   CONTENT_URL,
   DETAILS_CONTENT_URL,
   IMAGES_CONTENT_URL,
} from '../utils/config';

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
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('movie', id, 'similar')
      );
      return data;
   },
   async fetchCaster(id) {
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('movie', id, 'credits')
      );
      return data;
   },
   async fetchExternalId(id) {
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('movie', id, 'external_ids')
      );
      return data;
   },
   async fetchImages(id) {
      const { data } = await axios.get(IMAGES_CONTENT_URL('movie', id));
      return data;
   },
};

export default ApiMovies;
