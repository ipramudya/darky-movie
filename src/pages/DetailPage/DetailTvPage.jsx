import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ApiTv from '../../api/tv';
import {
   Button,
   Card,
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
} from '../../components';

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
   });
   const [optionValue, setOptionValue] = useState(1);

   const {
      details,
      similar,
      aggregateCaster,
      images,
      externalId,
      seasonDetails,
   } = detailTv;

   console.log(seasonDetails);

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

   const buttonTypes = ['overview', 'episodes', 'photos'];
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
                     <List list_header='Cast'>
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
                     <Grid long episodes>
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
               <List list_header='More Like This'>
                  {similar.results?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default DetailTvPage;
