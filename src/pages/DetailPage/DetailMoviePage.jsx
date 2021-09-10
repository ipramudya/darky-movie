import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ApiMovies from '../../api/movies';
import {
   Button,
   ContentsCard,
   Hero,
   IconLink,
   List,
   MovieStats,
   Overview,
   PersonCard,
   Photos,
   Spinner,
   Topbar,
} from '../../components';

const DetailMoviePage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailMovie, setDetailMovie] = useState({
      details: [],
      similar: [],
      caster: [],
      images: [],
      externalId: [],
   });
   const { details, similar, caster, images, externalId } = detailMovie;
   useEffect(() => {
      setLoading(true);
      axios
         .all([
            ApiMovies.fetchDetails(id),
            ApiMovies.fetchSimilar(id),
            ApiMovies.fetchCaster(id),
            ApiMovies.fetchImages(id),
            ApiMovies.fetchExternalId(id),
         ])
         .then(
            axios.spread((...data) => {
               setDetailMovie({
                  details: data[0],
                  similar: data[1],
                  caster: data[2],
                  images: data[3],
                  externalId: data[4],
               });
               setLoading(false);
            })
         )
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, [id]);

   const buttonTypes = ['overview', 'photos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   return (
      <>
         <Helmet title={details.title} />
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Topbar header={details.title} />
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
                        {caster.cast?.map((content) => (
                           <PersonCard person={content} key={content.id} />
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
               <List listHeader='More Like This'>
                  {similar.results?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default DetailMoviePage;
