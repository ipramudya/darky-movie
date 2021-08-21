import { useState, useEffect, useContext, createContext } from 'react';
import ApiMovies from '../api/movies';
import ApiTv from '../api/tv';

const MoviesTVsContext = createContext();

export const useMoviesTVs = () => useContext(MoviesTVsContext);

export const MoviesTVsProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [movies, setMovies] = useState([]);
   const [TVs, setTVs] = useState([]);

   useEffect(() => {
      setLoading(true);
      ApiMovies.fetchPopular().then((data) => {
         setMovies(data.results);
         setLoading(false);
      });
   }, []);

   useEffect(() => {
      setLoading(true);
      ApiTv.fetchPopular().then((data) => {
         setTVs(data.results);
         setLoading(false);
      });
   }, []);

   const value = {
      loading,
      movies,
      TVs,
   };

   return (
      <MoviesTVsContext.Provider value={value}>
         {children}
      </MoviesTVsContext.Provider>
   );
};

export default useMoviesTVs;
