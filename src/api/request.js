import axios from 'axios';

import {
   API_KEY,
   API_URL,
   SEARCH_BASE_URL,
   POPULAR_BASE_URL,
   REQUEST_TOKEN_URL,
   LOGIN_URL,
   SESSION_ID_URL,
} from '../utils/config';

const ApiRequest = {
   async fetchMovies(searchTerm, page) {
      const endpoint = searchTerm
         ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
         : `${POPULAR_BASE_URL}&page=${page}`;
      return await (
         await axios.get(endpoint)
      ).data;
   },

   async fetchMovie(movieId) {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return await (
         await axios.get(endpoint)
      ).data;
   },

   async fetchCredit(movieId) {
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return await (
         await axios.get(creditsEndpoint)
      ).data;
   },

   async getRequestToken() {
      const reqToken = await (await axios.get(REQUEST_TOKEN_URL)).data;
      return reqToken.request_token;
   },

   async authenticate(requestToken, username, password) {
      const body = {
         username,
         password,
         request_token: requestToken,
      };

      const data = await (await axios.post(LOGIN_URL, body)).data;

      if (data.success) {
         const sessionId = await (
            await axios.post(SESSION_ID_URL, { request_token: requestToken })
         ).data;

         return sessionId;
      }
   },

   async rateMovie(sessionId, movieId, value) {
      const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

      const rating = await (await axios.post(endpoint, { value })).data;
      return rating;
   },
};

export default ApiRequest;
