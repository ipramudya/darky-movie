import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Spinner, Card } from '../../components';
import usePage from '../../hooks/usePage';
import useLastItemRef from '../../hooks/useLastItemRef';
import ApiExploreMore from '../../api/exploreMore';

const LoadMore = () => {
   const {
      pathname,
      state: { list_header },
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
         <Helmet title={list_header} />
         {loading && <Spinner loading={loading} />}
         <Grid header={list_header}>
            {data?.map((singleData, idx) => {
               if (data?.length === idx + 1) {
                  return (
                     <Card
                        item={singleData}
                        key={singleData.id}
                        ref={lastItemRef}
                     />
                  );
               } else {
                  return <Card item={singleData} key={singleData.id} />;
               }
            })}
         </Grid>
      </>
   );
};

export default LoadMore;
