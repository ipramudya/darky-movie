import axios from 'axios';
import { IMAGES_CONTENT_URL, PEOPLE_URL } from '../utils/config';

const ApiPerson = {
   async fetchDetails(id) {
      return await (
         await axios.get(PEOPLE_URL(id))
      ).data;
   },
   async fetchExternalId(id) {
      return await (
         await axios.get(PEOPLE_URL(id, 'external_ids'))
      ).data;
   },
   async fetchImages(id) {
      return await (
         await axios.get(IMAGES_CONTENT_URL('person', id))
      ).data;
   },
   async fetchCredits(id) {
      return await (
         await axios.get(PEOPLE_URL(id, 'combined_credits'))
      ).data;
   },
};

export default ApiPerson;
