import { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Spinner, Card } from '../../components';
import useExploreMore from '../../hooks/useExploreMore';

const LoadMore = () => {
   const {
      pathname,
      state: { list_header },
   } = useLocation();
   const typeOfProvider = pathname.split('/')[1];
   const category = pathname.split('/')[3];

   const { loading, data, page, setPage, totalPages } = useExploreMore(
      typeOfProvider,
      category
   );

   const observer = useRef();
   const lastMoviesRef = useCallback(
      (node) => {
         if (loading) return;
         if (observer.current) observer.current.disconnect();
         observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && page < totalPages) {
               setPage((prevPageNumber) => {
                  return prevPageNumber + 1;
               });
            }
         });
         if (node) observer.current.observe(node);
      },
      [loading, totalPages, page]
   );

   return (
      <>
         <Grid header={list_header}>
            {data?.map((singleData, idx) => {
               if (data?.length === idx + 1) {
                  return (
                     <Card item={singleData} key={idx} ref={lastMoviesRef} />
                  );
               } else {
                  return <Card item={singleData} key={idx} />;
               }
            })}
         </Grid>
         {loading && <Spinner loading={loading} />}
      </>
   );
};

export default LoadMore;
