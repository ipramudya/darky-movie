import { useState, useEffect, useContext, createContext } from 'react';
import ApiMovies from '../api/movies';
import ApiTv from '../api/tv';

const PopularContext = createContext();

export const usePopularContext = () => useContext(PopularContext);

export const PopularProvider = ({ children }) => {
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
      <PopularContext.Provider value={value}>
         {children}
      </PopularContext.Provider>
   );
};
