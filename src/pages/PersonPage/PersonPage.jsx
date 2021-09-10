import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ApiPerson from '../../api/person';
import {
   Button,
   ContentsCard,
   Grid,
   IconLink,
   Overview,
   PersonStats,
   Photos,
   Spinner,
   Topbar,
} from '../../components';
import axios from 'axios';

const PersonPage = () => {
   const { id } = useParams();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailsPerson, setDetailsPerson] = useState({
      details: [],
      externalID: [],
      images: [],
      credits: [],
   });
   const { details, externalID, images, credits } = detailsPerson;

   useEffect(() => {
      setLoading(true);
      axios
         .all([
            ApiPerson.fetchDetails(id),
            ApiPerson.fetchExternalId(id),
            ApiPerson.fetchCredits(id),
            ApiPerson.fetchImages(id),
         ])
         .then(
            axios.spread((...data) => {
               setDetailsPerson({
                  details: data[0],
                  externalID: data[1],
                  credits: data[2],
                  images: data[3],
               });
               setLoading(false);
            })
         )
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, [id]);

   const buttonTypes = ['known for', 'photos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   return (
      <>
         <Helmet title={details.name} />
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Topbar header={details.name} />
               <Overview content={details} externalID={externalID}>
                  <PersonStats content={details} />
                  <IconLink
                     homepage={details.homepage}
                     externalID={externalID}
                  />
               </Overview>
               <Button
                  buttonTypes={buttonTypes}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               {activeButton === buttonTypes[0] && (
                  <>
                     <Grid>
                        {credits.cast?.map((credit) => (
                           <ContentsCard item={credit} key={credit.id} />
                        ))}
                     </Grid>
                  </>
               )}
               {activeButton === buttonTypes[1] && (
                  <Photos contents={images?.profiles} title='Photos' />
               )}
            </>
         )}
      </>
   );
};

export default PersonPage;
