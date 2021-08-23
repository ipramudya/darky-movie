import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ApiMovies from '../../api/movies';
import ApiTv from '../../api/tv';

import { Hero } from '../../components';
import Spinner from '../../components/Spinner/Spinner';

const DetailPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [detailsContent, setDetailsContent] = useState({});

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];

   useEffect(() => {
      if (type === 'movie') {
         setLoading(true);
         ApiMovies.fetchDetails(id).then((res) => {
            setDetailsContent(res);
            setLoading(false);
         });
      } else if (type === 'tv') {
         setLoading(true);
         ApiTv.fetchDetails(id).then((res) => {
            setDetailsContent(res);
            setLoading(false);
         });
      }
   }, [id, type]);

   return (
      <>
         {loading && <Spinner loading={loading} />}
         {detailsContent && <Hero contents={detailsContent} />}
         <h1>
            DetailPage of {id} on {type}
         </h1>
      </>
   );
};

export default DetailPage;
