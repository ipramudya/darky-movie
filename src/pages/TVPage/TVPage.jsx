import { Hero, List, Spinner } from '../../components';
import { useTVs } from '../../context/TVsContext';
import { usePopular } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const TVPage = () => {
   const { TVs } = usePopular();
   const { airing, onAir, topRated, loading } = useTVs();

   const randomIndex = randomNumber(airing.length);

   return (
      <>
         {!loading && <Hero contents={airing[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  list_header='Popular TV Shows'
                  direct_to='popular'
                  contents={TVs}
               />
               <List
                  list_header='Top Rated TV Shows'
                  direct_to='top_rated'
                  contents={topRated}
               />
               <List
                  list_header='TV Shows Airing Today'
                  direct_to='airing_today'
                  contents={airing}
               />
               <List
                  list_header='Currently on the Air TV Shows'
                  direct_to='on_the_air'
                  contents={onAir}
               />
            </>
         )}
      </>
   );
};

export default TVPage;
