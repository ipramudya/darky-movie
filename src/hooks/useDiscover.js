import { useState, useEffect } from 'react';
import ApiDiscover from '../api/discover';

const useDiscover = (typeOfProvider, gid) => {
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);
   const [totalPages, setTotalPages] = useState(null);

   useEffect(() => {
      const fetchDiscover = async () => {
         setLoading(true);
         try {
            const response = await ApiDiscover.fetchByGenreID(
               typeOfProvider,
               gid,
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
      fetchDiscover();
   }, [page, typeOfProvider, gid]);

   return { loading, error, data, page, setPage, totalPages };
};

export default useDiscover;
