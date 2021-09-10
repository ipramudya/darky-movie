import { useLocation, useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ApiDiscover from '../../api/discover';
import { ContentsCard, Grid, Spinner, Topbar } from '../../components';
import useLastItemRef from '../../hooks/useLastItemRef';
import usePage from '../../hooks/usePage';

const DiscoverPage = () => {
   const {
      pathname,
      state: { genres },
   } = useLocation();
   const { gid } = useParams();
   const typeOfProvider = pathname.split('/')[2];

   const { data, loading, page, setPage, totalPages } = usePage({
      typeOfProvider,
      queryString: gid,
      cbFunction: ApiDiscover.fetchByGenreID,
   });

   const lastItemRef = useLastItemRef({
      page,
      setPage,
      totalPages,
      loading,
   });

   return (
      <>
         <Helmet title={`Genre: ${genres}`} />
         {loading && <Spinner loading={loading} />}
         <Topbar header={`Genre: ${genres}`} />
         <Grid header={genres}>
            {data?.map((singleData, idx) => {
               if (data?.length === idx + 1) {
                  return (
                     <ContentsCard
                        item={singleData}
                        key={singleData.id}
                        ref={lastItemRef}
                     />
                  );
               } else {
                  return <ContentsCard item={singleData} key={singleData.id} />;
               }
            })}
         </Grid>
      </>
   );
};

export default DiscoverPage;
