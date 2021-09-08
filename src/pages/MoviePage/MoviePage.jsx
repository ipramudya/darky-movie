import { Helmet } from 'react-helmet';
import { Card, Hero, List, Spinner } from '../../components';
import { useMoviesContext } from '../../context/MoviesContext';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const MoviePage = () => {
   const { movies } = usePopularContext();
   const { nowPlaying, topRated, upcoming, loading } = useMoviesContext();

   const randomIndex = randomNumber(nowPlaying.length);
   console.log(nowPlaying, topRated);

   return (
      <>
         <Helmet title='Browse Movies' />
         {!loading && <Hero contents={nowPlaying[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  list_header='Popular Movies'
                  direct_to='popular'
                  contents={movies}
                  isMovie
               >
                  {movies?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List
                  list_header='Top Rated Movies'
                  direct_to='top_rated'
                  isMovie
               >
                  {topRated?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List
                  list_header='Now Playing Movies'
                  direct_to='now_playing'
                  isMovie
               >
                  {nowPlaying?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List
                  list_header='Upcoming Movies'
                  direct_to='upcoming'
                  contents={upcoming}
                  isMovie
               >
                  {upcoming?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default MoviePage;
