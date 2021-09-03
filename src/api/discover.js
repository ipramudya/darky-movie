import axios from 'axios';
import { DISCOVER_URL } from '../utils/config';

const ApiDiscover = {
   async fetchByGenreID(content, gid, page) {
      return await (
         await axios.get(DISCOVER_URL(content, gid, page))
      ).data;
   },
};

export default ApiDiscover;
