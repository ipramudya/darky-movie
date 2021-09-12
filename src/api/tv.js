import axios from 'axios';
import {
   CONTENT_URL,
   DETAILS_CONTENT_URL,
   IMAGES_CONTENT_URL,
   SEASON_URL,
} from '../utils/config';

const ApiTv = {
   async fetchPopular() {
      return await (
         await axios.get(CONTENT_URL('tv', 'popular'))
      ).data;
   },
   async fetchDetails(id) {
      return await (
         await axios.get(CONTENT_URL('tv', id))
      ).data;
   },
   async fetchWithCategories(categories) {
      return await (
         await axios.get(CONTENT_URL('tv', categories))
      ).data;
   },
   async fetchSimilar(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('tv', id, 'similar'))
      ).data;
   },
   async fetchAggregateCaster(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('tv', id, 'aggregate_credits'))
      ).data;
   },
   async fetchExternalId(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('tv', id, 'external_ids'))
      ).data;
   },
   async fetchImages(id) {
      return await (
         await axios.get(IMAGES_CONTENT_URL('tv', id))
      ).data;
   },
   async fetchSeasonDetail(id, season_num) {
      return await (
         await axios.get(SEASON_URL(id, season_num))
      ).data;
   },
   async fetchVideos(id) {
      return await (
         await axios.get(DETAILS_CONTENT_URL('tv', id, 'videos'))
      ).data;
   },
};

export default ApiTv;
