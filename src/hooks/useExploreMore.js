import { useState, useEffect } from 'react';
import ApiExploreMore from '../api/exploreMore';

const useExploreMore = ({ providers, categories }) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1);
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchExploreMore = async () => {
         try {
            const response = await ApiExploreMore.fetchExploreMore(
               providers,
               categories,
               page
            );
            setData(response.results);
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
