import { useState, useEffect } from 'react';
import ApiExploreMore from '../api/exploreMore';

const useExploreMore = (providers, categories, page) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchExploreMore = async () => {
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

   return { loading, error, data };
};

export default useExploreMore;
