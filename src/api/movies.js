import axios from 'axios';
import {
   CONTENT_URL,
   DETAILS_CONTENT_URL,
   IMAGES_CONTENT_URL,
} from '../utils/config';

const ApiMovies = {
   async fetchPopular() {
      return await (
         await axios.get(CONTENT_URL('movie', 'popular'))
      ).data;
   },
   async fetchDetails(id) {
      return await (
         await axios.get(CONTENT_URL('movie', id))
      ).data;
   },
   async fetchWithCategories(categories) {
      return await (
         await axios.get(CONTENT_URL('movie', categories))
      ).data;
   },
   async fetchSimilar(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('movie', id, 'similar'))
      ).data;
   },
   async fetchCaster(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('movie', id, 'credits'))
      ).data;
   },
   async fetchExternalId(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('movie', id, 'external_ids'))
      ).data;
   },
   async fetchImages(id) {
      return await (
         await axios.get(IMAGES_CONTENT_URL('movie', id))
      ).data;
   },
};

export default ApiMovies;
