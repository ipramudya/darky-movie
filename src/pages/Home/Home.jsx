import CircleLoader from 'react-spinners/CircleLoader';
import { Hero, List } from '../../components';
import useMoviesTVs from '../../context/MoviesTVsContext';

const Home = () => {
   const { movies, TVs, loading } = useMoviesTVs();
   console.log(TVs, movies);
   return (
      <>
         <Hero />
         {loading ? (
            <CircleLoader color={'#112D4E'} loading={loading} size={50} />
         ) : (
            <>
               <List list_header={'Trending Movies'} contents={movies} />
               <List list_header={'Trending Tv'} contents={TVs} />
            </>
         )}
      </>
   );
};

export default Home;
