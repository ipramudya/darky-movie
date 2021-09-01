import { useState, useEffect } from 'react';

/*
    typeOfProvider = tv ,movie, atau person
    queryString = string yang diperlukan (id ataupun categories)
*/

const usePage = ({ typeOfProvider, queryString, cbFunction }) => {
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);
   const [totalPages, setTotalPages] = useState(null);

   useEffect(() => {
      const fetchNextPage = async () => {
         setLoading(true);
         try {
            const response = await cbFunction(
               typeOfProvider,
               queryString,
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
      fetchNextPage();
   }, [page, typeOfProvider, queryString, cbFunction]);

   return { loading, error, data, page, setPage, totalPages };
};

export default usePage;
