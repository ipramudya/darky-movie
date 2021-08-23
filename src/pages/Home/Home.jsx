import { Hero, List } from '../../components';
import Spinner from '../../components/Spinner/Spinner';
import useMoviesTVs from '../../context/MoviesTVsContext';

const Home = () => {
   const { movies, TVs, loading } = useMoviesTVs();

   let contents = [...movies, ...TVs];
   const randomIndex = Math.floor(Math.random() * contents.length);

   return (
      <>
         {contents && <Hero contents={contents[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List list_header={'Trending Movies'} contents={movies} />
               <List list_header={'Trending TVs'} contents={TVs} />
            </>
         )}
      </>
   );
};

export default Home;
