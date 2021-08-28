import axios from 'axios';
import { useState, useEffect } from 'react';
import { SEARCH_URL } from '../utils/config';

const useSearch = () => {
   const [foundContent, setFoundContent] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

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

            setFoundContent(movies.data.results.concat(tvs.data.results));
            setLoading(false);
            console.log(foundContent);
         } catch (err) {
            setError(err);
         }
      };

      apiSearch();
   }, [searchTerm]);

   return { foundContent, loading, error, setSearchTerm };
};

export default useSearch;
