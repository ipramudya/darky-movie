import { useState, useEffect, useContext, createContext } from 'react';
import ApiMovies from '../api/movies';
import ApiTv from '../api/tv';

const PopularContext = createContext();

export const usePopularContext = () => useContext(PopularContext);

export const PopularProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [movies, setMovies] = useState([]);
   const [TVs, setTVs] = useState([]);
   const [popularContents, setPopularContents] = useState([]);

   useEffect(() => {
      setLoading(true);
      const fetchPopular = async () => {
         const getMovies = await ApiMovies.fetchPopular();
         const getTvs = await ApiTv.fetchPopular();
         setMovies(getMovies.results);
         setTVs(getTvs.results);
         setPopularContents((prev) => {
            return prev.concat(getMovies.results, getTvs.results);
         });
         setLoading(false);
      };
      fetchPopular();
   }, []);

   const value = {
      loading,
      movies,
      TVs,
      popularContents,
   };

   return (
      <PopularContext.Provider value={value}>
         {children}
      </PopularContext.Provider>
   );
};
