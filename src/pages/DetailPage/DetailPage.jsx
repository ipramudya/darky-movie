import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ApiMovies from '../../api/movies';
import ApiTv from '../../api/tv';

import { Hero, Spinner } from '../../components';

const DetailPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailsContent, setDetailsContent] = useState({});
   const [similarContent, setSimilarContent] = useState([]);

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];

   const fetchForDetails = async (detailsEndpoint, similarEndpoint) => {
      setLoading(true);
      try {
         setDetailsContent(await detailsEndpoint);
         setSimilarContent(await similarEndpoint);
         setLoading(false);
      } catch (err) {
         setError(err);
         setLoading(false);
      }
   };

   useEffect(() => {
      setLoading(true);
      if (type === 'movie') {
         fetchForDetails(
            ApiMovies.fetchDetails(id),
            ApiMovies.fetchSimilar(id)
         );
      } else if (type === 'tv') {
         fetchForDetails(ApiTv.fetchDetails(id), ApiTv.fetchSimilar(id));
      }
   }, [id, type]);

   return (
      <>
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <Hero contents={detailsContent} />
         )}
         <h1>
            DetailPage of {id} on {type}
         </h1>
      </>
   );
};

export default DetailPage;
