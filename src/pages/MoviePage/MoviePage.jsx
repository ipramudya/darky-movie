import { Hero, List, Spinner } from '../../components';
import { useMovies } from '../../context/MoviesContext';
import { usePopular } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const MoviePage = () => {
   const { movies } = usePopular();
   const { nowPlaying, topRated, upcoming, loading } = useMovies();

   const randomIndex = randomNumber(nowPlaying.length);

   return (
      <>
         {!loading && <Hero contents={nowPlaying[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  list_header='Popular Movies'
                  direct_to='popular'
                  contents={movies}
               />
               <List
                  list_header='Top Rated Movies'
                  direct_to='top_rated'
                  contents={topRated}
               />
               <List
                  list_header='Now Playing Movies'
                  direct_to='now_playing'
                  contents={nowPlaying}
               />
               <List
                  list_header='Upcoming Movies'
                  direct_to='upcoming'
                  contents={upcoming}
               />
            </>
         )}
      </>
   );
};

export default MoviePage;
