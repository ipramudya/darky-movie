import { Helmet } from 'react-helmet';
import { Card, Hero, List, Spinner } from '../../components';
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
                  list_header='Popular TV Shows'
                  direct_to='popular'
                  contents={TVs}
               >
                  {TVs?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List list_header='Top Rated TV Shows' direct_to='top_rated'>
                  {topRated?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List
                  list_header='TV Shows Airing Today'
                  direct_to='airing_today'
               >
                  {airing?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List
                  list_header='Currently on the Air TV Shows'
                  direct_to='on_the_air'
               >
                  {onAir?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default TVPage;
