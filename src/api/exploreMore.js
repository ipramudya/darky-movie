import axios from 'axios';
import { CONTENT_URL } from '../utils/config';

const ApiExploreMore = {
   async fetchExploreMore(providers, categories, page) {
      return await (
         await axios.get(CONTENT_URL(providers, categories, page))
      ).data;
   },
};

export default ApiExploreMore;
