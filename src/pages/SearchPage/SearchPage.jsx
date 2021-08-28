import { useLocation, Redirect } from 'react-router-dom';
import { Grid, Spinner, Card } from '../../components';

const SearchPage = () => {
   // Get data from redirect
   const {
      state: { contents, loading },
   } = useLocation();

   // Get query strings
   const useQuery = () => {
      return new URLSearchParams(useLocation().search);
   };
   const query = useQuery().get('query');

   return (
      <>
         {loading && <Spinner loading={loading} />}
         {query.length <= 0 && <Redirect push />}
         {contents && (
            <>
               <div style={{ marginBottom: '6%' }} />
               <Grid header={`Results for: ${query}`}>
                  {contents?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </Grid>
            </>
         )}
      </>
   );
};

export default SearchPage;
