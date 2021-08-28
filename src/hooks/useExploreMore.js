import { useState, useEffect } from 'react';
import ApiExploreMore from '../api/exploreMore';

const useExploreMore = (providers, categories) => {
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchExploreMore = async () => {
         setLoading(true);
         try {
            const response = await ApiExploreMore.fetchExploreMore(
               providers,
               categories,
               page
            );
            setData((prevData) => {
               return [...prevData, ...response.results];
            });
            setLoading(false);
         } catch (err) {
            setError(err);
         }
      };
      fetchExploreMore();
   }, [page]);

   return { loading, error, data, setPage };
};

export default useExploreMore;
