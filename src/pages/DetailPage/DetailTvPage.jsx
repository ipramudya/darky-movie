import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiTv from '../../api/tv';
import {
   Button,
   Card,
   Hero,
   IconLink,
   List,
   Overview,
   PersonCard,
   Photos,
   Spinner,
   TvStats,
} from '../../components';

const DetailTvPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [details, setDetails] = useState([]);
   const [similar, setSimilar] = useState([]);
   const [aggregateCaster, setAggregateCaster] = useState([]);
   const [images, setImages] = useState([]);
   const [externalId, setExternalId] = useState([]);

   useEffect(() => {
      const fetchDetailTv = async () => {
         setLoading(true);
         try {
            setDetails(await ApiTv.fetchDetails(id));
            setSimilar(await ApiTv.fetchSimilar(id));
            setAggregateCaster(await ApiTv.fetchAggregateCaster(id));
            setImages(await ApiTv.fetchImages(id));
            setExternalId(await ApiTv.fetchExternalId(id));
            setLoading(false);
         } catch (err) {
            setError(err);
            setLoading(false);
         }
      };
      fetchDetailTv();
   }, [id]);

   const buttonTypes = ['overview', 'episodes', 'photos'];
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
                     <Overview content={details} caster={aggregateCaster}>
                        <TvStats caster={aggregateCaster} content={details} />
                        <IconLink
                           externalID={externalId}
                           homepage={details.homepage}
                        />
                     </Overview>
                     <List list_header='Cast'>
                        {aggregateCaster.cast?.map((content, idx) => (
                           <PersonCard person={content} key={idx} />
                        ))}
                     </List>
                  </>
               )}
               {activeButton === buttonTypes[1] && (
                  <>
                     <h3>Episodes</h3>
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
                  {similar.results?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default DetailTvPage;
