import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';

import { Hero, List } from '../../components';
import useMoviesTVs from '../../context/MoviesTVsContext';

const Home = () => {
   const { movies, TVs, loading } = useMoviesTVs();

   let contents = [...movies, ...TVs];
   const randomIndex = Math.floor(Math.random() * contents.length);

   const spinnerStyle = css`
      position: absolute;
      margin: auto;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
   `;

   return (
      <>
         {contents && <Hero contents={contents[randomIndex]} />}
         {loading ? (
            <ScaleLoader
               color={'#112D4E'}
               loading={loading}
               size={30}
               css={spinnerStyle}
            />
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
