import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import { Hero, List } from '../../components';
import useMoviesTVs from '../../context/MoviesTVsContext';

const Home = () => {
   const { movies, TVs, loading } = useMoviesTVs();

   let contents = [...movies, ...TVs];

   const randomIndex = Math.floor(Math.random() * contents.length);

   return (
      <>
         {contents && <Hero contents={contents[randomIndex]} />}
         {loading ? (
            <CircleLoader color={'#112D4E'} loading={loading} size={50} />
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
