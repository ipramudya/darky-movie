import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ApiMovies from '../../api/movies';
import ApiTv from '../../api/tv';

import {
   Card,
   Hero,
   List,
   PersonCard,
   Spinner,
   Overview,
   Photos,
} from '../../components';

import { Button, ButtonContainer } from './styles';

const DetailPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailsContent, setDetailsContent] = useState({});
   const [similarContent, setSimilarContent] = useState([]);
   const [caster, setCaster] = useState([]);
   const [images, setImages] = useState([]);
   const [externalID, setExternalID] = useState([]);

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];

   const fetchForDetails = async (
      detailsEndpoint,
      similarEndpoint,
      crewEndpoint,
      externalIDEndpoints,
      imagesEndpoint
   ) => {
      setLoading(true);
      try {
         setDetailsContent(await detailsEndpoint);
         setSimilarContent(await similarEndpoint);
         setExternalID(await externalIDEndpoints);
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
            ApiMovies.fetchExternalId(id),
            ApiMovies.fetchImages(id)
         );
      } else if (type === 'tv') {
         fetchForDetails(
            ApiTv.fetchDetails(id),
            ApiTv.fetchSimilar(id),
            ApiTv.fetchCaster(id),
            ApiTv.fetchExternalId(id),
            ApiTv.fetchImages(id)
         );
      }
   }, [id, type]);

   const buttonTypes = ['overview', 'photos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);
   const Buttons = () => {
      return (
         <ButtonContainer>
            {buttonTypes.map((type, idx) => (
               <Button
                  key={idx}
                  active={activeButton === type}
                  onClick={() => setActiveButton(type)}
               >
                  {type}
               </Button>
            ))}
         </ButtonContainer>
      );
   };

   return (
      <>
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Hero contents={detailsContent} />
               <Buttons />
               {activeButton === buttonTypes[0] && (
                  <>
                     <Overview
                        content={detailsContent}
                        director={caster.crew}
                        externalID={externalID}
                     />
                     <List list_header='Cast'>
                        {caster.cast?.map((content, idx) => (
                           <PersonCard person={content} key={idx} />
                        ))}
                     </List>
                  </>
               )}
               {activeButton === buttonTypes[1] && <h3>Photos</h3>}

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
