import axios from 'axios';
import { SEARCH_URL } from '../utils/config';

const ApiSearch = {
   async searchContent(content, query, page) {
      const { data } = await axios.get(SEARCH_URL(content, query, page));
      return data;
   },
};
