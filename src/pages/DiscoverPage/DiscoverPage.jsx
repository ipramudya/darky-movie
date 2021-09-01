import { useCallback, useRef } from 'react';
import { useLocation, useParams } from 'react-router';
import { Card, Grid } from '../../components';
import useDiscover from '../../hooks/useDiscover';

const DiscoverPage = () => {
   const {
      pathname,
      state: { genres },
   } = useLocation();
   const { gid } = useParams();
   const typeOfProvider = pathname.split('/')[2];

   const { data, loading, page, setPage, totalPages } = useDiscover(
      typeOfProvider,
      gid
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
         <Grid header={genres}>
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
      </>
   );
};

export default DiscoverPage;
