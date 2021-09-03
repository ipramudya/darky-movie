import axios from 'axios';
import { PEOPLE_URL } from '../utils/config';

const ApiPerson = {
   async fetchDetails(id) {
      const { data } = await axios.get(PEOPLE_URL(id));
      return data;
   },
};

export default ApiPerson;
