import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiMovies from '../../api/movies';
import {
   Button,
   Card,
   Hero,
   IconLink,
   List,
   MovieStats,
   Overview,
   PersonCard,
   Photos,
   Spinner,
} from '../../components';

const DetailMoviePage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [details, setDetails] = useState([]);
   const [similar, setSimilar] = useState([]);
   const [caster, setCaster] = useState([]);
   const [images, setImages] = useState([]);
   const [externalId, setExternalId] = useState([]);

   useEffect(() => {
      const fetchDetailMovie = async () => {
         setLoading(true);
         try {
            setDetails(await ApiMovies.fetchDetails(id));
            setSimilar(await ApiMovies.fetchSimilar(id));
            setCaster(await ApiMovies.fetchCaster(id));
            setImages(await ApiMovies.fetchImages(id));
            setExternalId(await ApiMovies.fetchExternalId(id));
            setLoading(false);
         } catch (err) {
            setError(err);
            setLoading(false);
         }
      };
      fetchDetailMovie();
   }, [id]);

   const buttonTypes = ['overview', 'photos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   return (
      <>
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Hero contents={details} disabled />
               <Button
                  buttonTypes={buttonTypes}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               {activeButton === buttonTypes[0] && (
                  <>
                     <Overview content={details}>
                        <MovieStats caster={caster.crew} content={details} />
                        <IconLink
                           homepage={details.homepage}
                           externalID={externalId}
                        />
                     </Overview>
                     <List>
                        {caster.cast?.map((content, idx) => (
                           <PersonCard person={content} key={idx} />
                        ))}
                     </List>
                  </>
               )}
               {activeButton === buttonTypes[1] && (
                  <>
                     <Photos contents={images.posters} title='Posters' />
                     <Photos
                        contents={images.backdrops}
                        title='Backdrops'
                        landscape
                     />
                  </>
               )}
               <List list_header='More Like This'>
                  {similar.results?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default DetailMoviePage;
