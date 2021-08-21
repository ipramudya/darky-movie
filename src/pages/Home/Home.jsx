import { Hero, List } from '../../components';

import useMoviesTVs from '../../context/MoviesTVsContext';

const Home = () => {
   const { movies, TVs } = useMoviesTVs();
   console.log(TVs);
   return (
      <>
         <Hero />
         <List list_header={'Trending Movies'} contents={movies} />
         <List list_header={'Trending Tv'} contents={TVs} />
      </>
   );
};

export default Home;
