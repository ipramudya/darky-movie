import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ApiTv from '../../api/tv';
import {
   Button,
   ContentsCard,
   EpisodeCard,
   Grid,
   Hero,
   IconLink,
   List,
   Overview,
   PersonCard,
   Photos,
   Select,
   Spinner,
   Topbar,
   TvStats,
   VideosCard,
} from '../../components';
import Videos from '../../components/Videos/Videos';
import NoImageLandscape from '../../assets/no_image_landscape.jpg';

const DetailTvPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [detailTv, setDetailTv] = useState({
      details: [],
      similar: [],
      aggregateCaster: [],
      images: [],
      externalId: [],
      seasonDetails: [],
      videos: [],
   });
   const [optionValue, setOptionValue] = useState(1);

   const {
      details,
      similar,
      aggregateCaster,
      images,
      externalId,
      seasonDetails,
      videos,
   } = detailTv;

   useEffect(() => {
      setLoading(true);
      axios
         .all([
            ApiTv.fetchDetails(id),
            ApiTv.fetchSimilar(id),
            ApiTv.fetchAggregateCaster(id),
            ApiTv.fetchImages(id),
            ApiTv.fetchExternalId(id),
            ApiTv.fetchSeasonDetail(id, 1),
            ApiTv.fetchVideos(id),
         ])
         .then(
            axios.spread((...data) => {
               setDetailTv({
                  details: data[0],
                  similar: data[1],
                  aggregateCaster: data[2],
                  images: data[3],
                  externalId: data[4],
                  seasonDetails: data[5],
                  videos: data[6],
               });
               setLoading(false);
            })
         )
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, [id]);

   const seasons = details.seasons?.filter(
      (detail) => detail.name !== 'Specials'
   );

   /* Prevent First Run */
   const initial = useRef(true);
   useEffect(() => {
      if (initial.current) {
         initial.current = false;
         return;
      }

      ApiTv.fetchSeasonDetail(id, optionValue).then((res) => {
         setDetailTv((prev) => {
            return { ...prev, seasonDetails: res };
         });
      });
   }, [optionValue, id]);

   /* Button Functionality */
   const buttonTypes = ['overview', 'episodes', 'photos', 'videos'];
   const [activeButton, setActiveButton] = useState(buttonTypes[0]);

   /* Show and Play Videos */
   const [playVideo, setPlayVideo] = useState(false);
   const [videoResource, setVideoResource] = useState('');

   return (
      <>
         <Helmet title={details.name} />
         {error && <h3>{error}</h3>}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <Topbar header={details.name} />
               <Hero contents={details} disabled />
               <Button
                  buttonTypes={buttonTypes}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               {activeButton === buttonTypes[0] && (
                  <>
                     <Overview content={details}>
                        <TvStats caster={aggregateCaster} content={details} />
                        <IconLink
                           externalID={externalId}
                           homepage={details.homepage}
                        />
                     </Overview>
                     <List listHeader='Cast'>
                        {aggregateCaster.cast?.slice(0, 19).map((content) => (
                           <PersonCard person={content} key={content.id} />
                        ))}
                     </List>
                  </>
               )}
               {activeButton === buttonTypes[1] && (
                  <>
                     <Select
                        options={seasons}
                        contents={seasonDetails}
                        setOptionValue={setOptionValue}
                     />
                     <Grid episodes>
                        {seasonDetails.episodes?.map((episode) => (
                           <EpisodeCard
                              episode={episode}
                              key={episode.id}
                              epNumber={episode.episode_number}
                           />
                        ))}
                     </Grid>
                  </>
               )}
               {activeButton === buttonTypes[2] && (
                  <>
                     <Photos contents={images.posters} title='Posters' />
                     <Photos
                        contents={images.backdrops}
                        title='Backdrops'
                        landscape
                     />
                  </>
               )}
               {activeButton === buttonTypes[3] && (
                  <>
                     {videos.results?.length <= 0 && (
                        <Grid header='Not Available' episodes>
                           <img
                              src={NoImageLandscape}
                              alt='Videos not available'
                           />
                        </Grid>
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

export default DetailTvPage;
