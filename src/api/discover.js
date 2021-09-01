import axios from 'axios';
import { DISCOVER_URL } from '../utils/config';

const ApiDiscover = {
   async fetchByGenreID(content, gid, page) {
      const { data } = await axios.get(DISCOVER_URL(content, gid, page));
      return data;
   },
};

export default ApiDiscover;
