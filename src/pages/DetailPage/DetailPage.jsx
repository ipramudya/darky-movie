import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ApiMovies from '../../api/movies';
import ApiTv from '../../api/tv';

import { Card, Hero, List, PersonCard, Spinner } from '../../components';

const DetailPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailsContent, setDetailsContent] = useState({});
   const [similarContent, setSimilarContent] = useState([]);
   const [caster, setCaster] = useState([]);
   const [images, setImages] = useState([]);
   const [buttons, setButtons] = useState('overview');

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];

   const fetchForDetails = async (
      detailsEndpoint,
      similarEndpoint,
      crewEndpoint,
      imagesEndpoint
   ) => {
      setLoading(true);
      try {
         setDetailsContent(await detailsEndpoint);
         setSimilarContent(await similarEndpoint);
         setCaster(await crewEndpoint);
         setImages(await imagesEndpoint);
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
            ApiMovies.fetchSimilar(id),
            ApiMovies.fetchCaster(id),
            ApiMovies.fetchImages(id)
         );
      } else if (type === 'tv') {
         fetchForDetails(
            ApiTv.fetchDetails(id),
            ApiTv.fetchSimilar(id),
            ApiTv.fetchCaster(id),
            ApiTv.fetchImages(id)
         );
      }
   }, [id, type]);

   // console.log(detailsContent, similarContent, caster, images);
   console.log(similarContent);

   // const Buttons = () => {
   //    return (

   //    )
   // }

   return (
      <>
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Hero contents={detailsContent} />
               <List list_header='Cast'>
                  {caster.cast?.map((content, idx) => (
                     <PersonCard person={content} key={idx} />
                  ))}
               </List>

               <List list_header='Similar Film'>
                  {similarContent.results?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default DetailPage;
