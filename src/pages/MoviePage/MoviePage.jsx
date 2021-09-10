import { Helmet } from 'react-helmet';
import { ContentsCard, Hero, List, Spinner } from '../../components';
import { useMoviesContext } from '../../context/MoviesContext';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const MoviePage = () => {
   const { movies } = usePopularContext();
   const { nowPlaying, topRated, upcoming, loading } = useMoviesContext();

   const randomIndex = randomNumber(nowPlaying.length);

   return (
      <>
         <Helmet title='Browse Movies' />
         {!loading && <Hero contents={nowPlaying[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  listHeader='Popular Movies'
                  directTo='popular'
                  contentPathname='movie'
               >
                  {movies?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Top Rated Movies'
                  directTo='top_rated'
                  contentPathname='movie'
               >
                  {topRated?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Now Playing Movies'
                  directTo='now_playing'
                  contentPathname='movie'
               >
                  {nowPlaying?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
               <List
                  listHeader='Upcoming Movies'
                  directTo='upcoming'
                  contents={upcoming}
                  contentPathname='movie'
               >
                  {upcoming?.map((content) => (
                     <ContentsCard item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default MoviePage;
