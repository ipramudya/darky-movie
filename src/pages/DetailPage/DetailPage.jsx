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
   const [aggregateCaster, setAggregateCaster] = useState([]);
   const [images, setImages] = useState([]);
   const [externalID, setExternalID] = useState([]);

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];

   const fetchForDetails = async ({
      detailsEndpoint,
      similarEndpoint,
      crewEndpoint,
      aggregateEndpoint,
      externalIDEndpoints,
      imagesEndpoint,
   }) => {
      setLoading(true);
      try {
         setDetailsContent(await detailsEndpoint);
         setSimilarContent(await similarEndpoint);
         setExternalID(await externalIDEndpoints);
         setCaster(await crewEndpoint);
         setAggregateCaster(await aggregateEndpoint);
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
         fetchForDetails({
            detailsEndpoint: ApiMovies.fetchDetails(id),
            similarEndpoint: ApiMovies.fetchSimilar(id),
            crewEndpoint: ApiMovies.fetchCaster(id),
            externalIDEndpoints: ApiMovies.fetchExternalId(id),
            imagesEndpoint: ApiMovies.fetchImages(id),
         });
      } else if (type === 'tv') {
         fetchForDetails({
            detailsEndpoint: ApiTv.fetchDetails(id),
            similarEndpoint: ApiTv.fetchSimilar(id),
            crewEndpoint: ApiTv.fetchCaster(id),
            aggregateEndpoint: ApiTv.fetchAggregateCaster(id),
            externalIDEndpoints: ApiTv.fetchExternalId(id),
            imagesEndpoint: ApiTv.fetchImages(id),
         });
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
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Hero contents={detailsContent} disabled />
               <Buttons />
               {activeButton === buttonTypes[0] && (
                  <>
                     {type === 'movie' && (
                        <Overview
                           content={detailsContent}
                           caster={caster.crew}
                           externalID={externalID}
                           type='movie'
                        />
                     )}
                     {type === 'tv' && (
                        <Overview
                           content={detailsContent}
                           caster={aggregateCaster}
                           externalID={externalID}
                           type='tv'
                        />
                     )}
                     <List list_header='Cast'>
                        {type === 'movie' &&
                           caster.cast?.map((content, idx) => (
                              <PersonCard person={content} key={idx} />
                           ))}
                        {type === 'tv' &&
                           aggregateCaster.cast?.map((content, idx) => (
                              <PersonCard person={content} key={idx} tv />
                           ))}
                     </List>
                  </>
               )}
               {activeButton === buttonTypes[1] && <Photos content={images} />}
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
