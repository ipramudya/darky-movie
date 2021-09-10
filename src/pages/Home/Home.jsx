import { Helmet } from 'react-helmet';
import { ContentsCard, Hero, List, Spinner } from '../../components';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const Home = () => {
   const { movies, TVs, loading, popularContents } = usePopularContext();

   const randomIndex = randomNumber(popularContents?.length);

   return (
      <>
         <Helmet title='DarkyMovie - Browse Your Favorite' />
         {popularContents && <Hero contents={popularContents[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  listHeader='Trending Movies'
                  directTo='popular'
                  contentPathname='movie'
               >
                  {movies?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Trending TVs'
                  directTo='popular'
                  contentPathname='tv'
               >
                  {TVs?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default Home;
