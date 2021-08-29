import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { SEARCH_URL } from '../utils/config';

const useSearch = () => {
   const [foundContent, setFoundContent] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(null);

   const initial = useRef(true);

   const provider = ['movie', 'tv'];

   useEffect(() => {
      const apiSearch = async () => {
         setFoundContent([]);
         setLoading(true);
         try {
            const movies = await axios({
               method: 'GET',
               url: SEARCH_URL(provider[0], searchTerm),
            });
            const tvs = await axios({
               method: 'GET',
               url: SEARCH_URL(provider[1], searchTerm),
            });

            setFoundContent([...movies.data.results, ...tvs.data.results]);
            setTotalResults(movies.data.total_results + tvs.data.total_results);
            setLoading(false);
         } catch (err) {
            setError(err);
         }
      };

      apiSearch();
   }, [searchTerm]);

   useEffect(() => {
      if (initial.current) {
         initial.current = false;
         return;
      }

      const increasePageNumber = async () => {
         setLoading(true);
         try {
            const movies = await axios({
               method: 'GET',
               url: SEARCH_URL(provider[0], searchTerm, page),
            });
            const tvs = await axios({
               method: 'GET',
               url: SEARCH_URL(provider[1], searchTerm, page),
            });

            setFoundContent((prevState) => {
               return [
                  ...prevState,
                  ...movies.data.results,
                  ...tvs.data.results,
               ];
            });
            setLoading(false);
         } catch (err) {
            setError(err);
         }
      };

      increasePageNumber();
   }, [page]);

   return {
      foundContent,
      loading,
      error,
      setSearchTerm,
      setPage,
      totalResults,
   };
};

export default useSearch;
