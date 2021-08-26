import { Route } from 'react-router-dom';

import { PopularProvider, MoviesProvider, TVsProvider } from './context';
import { Home, DetailPage, MoviePage, TVPage, LoadMore } from './pages';
import { Sidebar } from './components';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Sidebar />
         <PopularProvider>
            <Route exact path='/' component={Home} />
            <Route exact path={['/movie/:id', '/tv/:id']}>
               <DetailPage />
            </Route>
            <MoviesProvider>
               <Route exact path='/movie' component={MoviePage} />
            </MoviesProvider>
            <TVsProvider>
               <Route exact path='/tv' component={TVPage} />
            </TVsProvider>
            <Route
               exact
               path={['/movie/category/:ctg', '/tv/category/:ctg']}
               component={LoadMore}
            />
         </PopularProvider>
      </>
   );
};

export default App;
