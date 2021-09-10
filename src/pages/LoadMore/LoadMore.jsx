import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Spinner, ContentsCard, Topbar } from '../../components';
import usePage from '../../hooks/usePage';
import useLastItemRef from '../../hooks/useLastItemRef';
import ApiExploreMore from '../../api/exploreMore';

const LoadMore = () => {
   const {
      pathname,
      state: { listHeader },
   } = useLocation();
   const typeOfProvider = pathname.split('/')[1];
   const category = pathname.split('/')[3];

   const { loading, data, page, setPage, totalPages } = usePage({
      typeOfProvider,
      queryString: category,
      cbFunction: ApiExploreMore.fetchExploreMore,
   });

   const lastItemRef = useLastItemRef({
      page,
      setPage,
      totalPages,
      loading,
   });

   return (
      <>
         <Helmet title={listHeader} />
         {loading && <Spinner loading={loading} />}
         <Topbar header={listHeader} />
         <Grid header={listHeader}>
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

export default LoadMore;
