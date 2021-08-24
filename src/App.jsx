import { Route } from 'react-router-dom';

import { PopularProvider, MoviesProvider, TVsProvider } from './context';
import { Home, DetailPage, MoviePage, TVPage } from './pages';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <PopularProvider>
            <Route exact path='/' component={Home} />
            <Route path={['/movie/:id', '/tv/:id']}>
               <DetailPage />
            </Route>
            <MoviesProvider>
               <Route exact path='/movie' component={MoviePage} />
            </MoviesProvider>
            <TVsProvider>
               <Route exact path='/tv' component={TVPage} />
            </TVsProvider>
         </PopularProvider>
      </>
   );
};

export default App;
