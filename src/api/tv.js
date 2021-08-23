import axios from 'axios';
import { CONTENT_URL } from '../utils/config';

const ApiTv = {
   async fetchPopular() {
      const { data } = await axios.get(CONTENT_URL('tv', 'popular'));
      return data;
   },
   async fetchDetails(id) {
      const { data } = await axios.get(CONTENT_URL('tv', id));
      return data;
   },
};

export default ApiTv;
