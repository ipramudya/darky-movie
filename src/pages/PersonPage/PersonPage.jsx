import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ApiPerson from '../../api/person';
import {
   Button,
   Card,
   Grid,
   Overview,
   Photos,
   Spinner,
} from '../../components';

const PersonPage = () => {
   const { id } = useParams();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [details, setDetails] = useState([]);
   const [externalID, setExternalID] = useState([]);
   const [images, setImages] = useState([]);
   const [credits, setCredits] = useState([]);

   useEffect(() => {
      const fetchPerson = async () => {
         setLoading(true);
         try {
            setDetails(await ApiPerson.fetchDetails(id));
            setExternalID(await ApiPerson.fetchExternalId(id));
            setCredits(await ApiPerson.fetchCredits(id));
            setImages(await ApiPerson.fetchImages(id));
            setLoading(false);
         } catch (err) {
            setError(err);
            setLoading(false);
         }
      };
      fetchPerson();
   }, [id]);

   const buttonTypes = ['known for', 'photos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   return (
      <>
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Overview
                  content={details}
                  externalID={externalID}
                  type='person'
               />
               <Button
                  buttonTypes={buttonTypes}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               {activeButton === buttonTypes[0] && (
                  <>
                     <Grid>
                        {credits.cast?.map((credit, idx) => (
                           <Card item={credit} key={idx} />
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
