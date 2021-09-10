import { Helmet } from 'react-helmet';
import { ContentsCard, Hero, List, Spinner } from '../../components';
import { useTVsContext } from '../../context/TVsContext';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const TVPage = () => {
   const { TVs } = usePopularContext();
   const { airing, onAir, topRated, loading } = useTVsContext();

   const randomIndex = randomNumber(airing.length);

   return (
      <>
         <Helmet title='Browse TVs' />
         {!loading && <Hero contents={airing[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  listHeader='Popular TV Shows'
                  directTo='popular'
                  contentPathname='tv'
               >
                  {TVs?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Top Rated TV Shows'
                  directTo='top_rated'
                  contentPathname='tv'
               >
                  {topRated?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='TV Shows Airing Today'
                  directTo='airing_today'
                  contentPathname='tv'
               >
                  {airing?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Currently on the Air TV Shows'
                  directTo='on_the_air'
                  contentPathname='tv'
               >
                  {onAir?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default TVPage;
