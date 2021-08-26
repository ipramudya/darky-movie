import { Hero, List, Spinner } from '../../components';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const Home = () => {
   const { movies, TVs, loading } = usePopularContext();

   const contents = [...movies, ...TVs];
   const randomIndex = randomNumber(contents.length);

   return (
      <>
         {contents && <Hero contents={contents[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List
                  list_header='Trending Movies'
                  direct_to='popular'
                  contents={movies}
               />
               <List
                  list_header='Trending TVs'
                  direct_to='popular'
                  contents={TVs}
               />
            </>
         )}
      </>
   );
};

export default Home;
