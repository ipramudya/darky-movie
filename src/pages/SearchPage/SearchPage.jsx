import { useCallback, useEffect, useRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { Grid, Spinner, Card } from '../../components';
import useSearch from '../../hooks/useSearch';

const SearchPage = () => {
   // Get query strings
   const useQuery = () => {
      return new URLSearchParams(useLocation().search);
   };
   const query = useQuery().get('query');

   const {
      foundContent,
      loading,
      error,
      setSearchTerm,
      setPage,
      totalResults,
   } = useSearch();
   console.log(foundContent);
   const initial = useRef(true);

   useEffect(() => {
      if (initial.current) {
         initial.current = false;
         return;
      }
      const delay = setTimeout(() => {
         setSearchTerm(query);
      }, 500);

      return () => clearTimeout(delay);
   }, [setSearchTerm, query]);

   const observer = useRef();
   const lastMoviesRef = useCallback(
      (node) => {
         if (loading) return;
         if (observer.current) observer.current.disconnect();
         observer.current = new IntersectionObserver((entries) => {
            if (
               entries[0].isIntersecting &&
               foundContent.length < totalResults
            ) {
               setPage((prevPageNumber) => prevPageNumber + 1);
            }
         });
         if (node) observer.current.observe(node);
      },
      [loading, foundContent, totalResults]
   );

   console.log(foundContent.length);
   console.log(totalResults);

   return (
      <>
         {loading && <Spinner loading={loading} />}
         {query.length <= 0 && <Redirect push />}
         <div style={{ marginBottom: '6%' }} />
         <Grid header={`Results for: ${query}`}>
            {foundContent?.map((content, idx) => {
               if (foundContent?.length === idx + 1) {
                  return <Card item={content} key={idx} ref={lastMoviesRef} />;
               } else {
                  return <Card item={content} key={idx} />;
               }
            })}
         </Grid>
      </>
   );
};

export default SearchPage;
