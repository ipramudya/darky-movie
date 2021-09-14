import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ApiMovies from '../../api/movies';
import {
   Button,
   ContentsCard,
   Grid,
   Hero,
   IconLink,
   List,
   MovieStats,
   Overview,
   PersonCard,
   Photos,
   Spinner,
   Topbar,
   VideosCard,
} from '../../components';
import Videos from '../../components/Videos/Videos';
import NoImageLandscape from '../../assets/no_image_landscape.jpg';

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
      videos: [],
   });
   const { details, similar, caster, images, externalId, videos } = detailMovie;
   useEffect(() => {
      setLoading(true);
      axios
         .all([
            ApiMovies.fetchDetails(id),
            ApiMovies.fetchSimilar(id),
            ApiMovies.fetchCaster(id),
            ApiMovies.fetchImages(id),
            ApiMovies.fetchExternalId(id),
            ApiMovies.fetchVideos(id),
         ])
         .then(
            axios.spread((...data) => {
               setDetailMovie({
                  details: data[0],
                  similar: data[1],
                  caster: data[2],
                  images: data[3],
                  externalId: data[4],
                  videos: data[5],
               });
               setLoading(false);
            })
         )
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, [id]);

   /* Toggling section on detail page */
   const buttonTypes = ['overview', 'photos', 'videos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   /* Show and Play Videos */
   const [playVideo, setPlayVideo] = useState(false);
   const [videoResource, setVideoResource] = useState('');

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
               {activeButton === buttonTypes[2] && (
                  <>
                     {videos.results?.length <= 0 && (
                        <>
                           <Grid header='Not Available' episodes>
                              <img
                                 src={NoImageLandscape}
                                 alt='Videos not available'
                              />
                           </Grid>
                        </>
                     )}
                     <Grid header='Available videos' videos>
                        {videos.results?.map((video) => (
                           <VideosCard
                              video={video}
                              key={video.id}
                              setUrl={setVideoResource}
                              setPlayVideo={setPlayVideo}
                           />
                        ))}
                     </Grid>
                     {playVideo && (
                        <Videos
                           url={videoResource}
                           setPlayVideo={setPlayVideo}
                        />
                     )}
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
