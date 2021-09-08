import { Helmet } from 'react-helmet';
import { Card, Hero, List, Spinner } from '../../components';
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
                  list_header='Popular Movies'
                  direct_to='popular'
                  contents={movies}
                  isMovie
               >
                  {movies?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
               <List
                  list_header='Top Rated Movies'
                  direct_to='top_rated'
                  isMovie
               >
                  {topRated?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
               <List
                  list_header='Now Playing Movies'
                  direct_to='now_playing'
                  isMovie
               >
                  {nowPlaying?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
               <List
                  list_header='Upcoming Movies'
                  direct_to='upcoming'
                  contents={upcoming}
                  isMovie
               >
                  {upcoming?.map((content, idx) => (
                     <Card item={content} key={idx} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default MoviePage;
