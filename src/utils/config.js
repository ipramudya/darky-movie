export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// Mine

/* 
Keyword berisikan id ataupun kategori yang akan di fetching (upcoming, now airing, popular, dsb)
Details berisikan detail yang akan di fetching (fetch similar, crew dsb)
*/

export const CONTENT_URL = (content, keyword, page = 1) =>
   `${API_URL}${content}/${keyword}?api_key=${API_KEY}&language=en-US&page=${page}`;

export const DETAILS_CONTENT_URL = (content, keyword, details) =>
   `${API_URL}${content}/${keyword}/${details}?api_key=${API_KEY}&language=en-US&page=1`;

export const SEARCH_URL = (content, query, page = 1) =>
   `${API_URL}search/${content}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;

// For login and voting
export const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
export const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
export const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w780';
