import { useState, useEffect, useContext, createContext } from 'react';
import ApiMovies from '../api/movies';

const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
   const [nowPlaying, setNowPlaying] = useState([]);
   const [topRated, setTopRated] = useState([]);
   const [upcoming, setUpcoming] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchingMovies = async () => {
      try {
         const npData = await ApiMovies.fetchWithCategories('now_playing');
         setNowPlaying(npData.results);

         const trData = await ApiMovies.fetchWithCategories('top_rated');
         setTopRated(trData.results);

         const upcoming = await ApiMovies.fetchWithCategories('upcoming');
         setUpcoming(upcoming.results);

         setLoading(false);
      } catch (error) {
         setError(error);
      }
   };

   useEffect(() => {
      fetchingMovies();
   }, []);

   const value = {
      nowPlaying,
      topRated,
      upcoming,
      loading,
      error,
   };

   return (
      <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
   );
};
