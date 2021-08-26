import { useLocation } from 'react-router-dom';
import { Grid, Spinner } from '../../components';
import useExploreMore from '../../hooks/useExploreMore';

const LoadMore = () => {
   const {
      pathname,
      state: { list_header },
   } = useLocation();
   const typeOfProvider = pathname.split('/')[1];
   const category = pathname.split('/')[3];

   const { loading, error, data } = useExploreMore({
      providers: typeOfProvider,
      categories: category,
   });

   return (
      <>
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <Grid contents={data} header={list_header} />
         )}
      </>
   );
};

export default LoadMore;
