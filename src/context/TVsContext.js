import { useState, useEffect, useContext, createContext } from 'react';
import ApiTVs from '../api/tv';

const TVsContext = createContext();

export const useTVs = () => useContext(TVsContext);

export const TVsProvider = ({ children }) => {
   const [airing, setAiring] = useState([]);
   const [onAir, setOnAir] = useState([]);
   const [topRated, setTopRated] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchingTVs = async () => {
      try {
         const atData = await ApiTVs.fetchWithCategories('airing_today');
         setAiring(atData.results);

         const oaData = await ApiTVs.fetchWithCategories('on_the_air');
         setOnAir(oaData.results);

         const trData = await ApiTVs.fetchWithCategories('top_rated');
         setTopRated(trData.results);

         setLoading(false);
      } catch (error) {
         setError(error);
      }
   };

   useEffect(() => {
      fetchingTVs();
   }, []);

   const value = {
      airing,
      onAir,
      topRated,
      loading,
      error,
   };

   return <TVsContext.Provider value={value}>{children}</TVsContext.Provider>;
};
