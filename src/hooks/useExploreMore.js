import { useState, useEffect } from 'react';
import ApiExploreMore from '../api/exploreMore';

const useExploreMore = (providers, categories) => {
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);
   const [totalPages, setTotalPages] = useState(null);

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
            setTotalPages(response.total_pages);
            setLoading(false);
         } catch (err) {
            setError(err);
         }
      };
      fetchExploreMore();
   }, [page, providers, categories]);

   return { loading, error, data, page, setPage, totalPages };
};

export default useExploreMore;
