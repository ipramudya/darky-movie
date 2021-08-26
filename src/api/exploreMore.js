import axios from 'axios';
import { CONTENT_URL } from '../utils/config';

const ApiExploreMore = {
   async fetchExploreMore(providers, categories, page) {
      const { data } = await axios.get(
         CONTENT_URL(providers, categories, page)
      );
      return data;
   },
};

export default ApiExploreMore;
