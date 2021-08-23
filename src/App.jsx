import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesTVsProvider } from './context/MoviesTVsContext';

// Global Styles
import { GlobalStyle } from './GlobalStyles';

// Pages
import { Home, DetailPage } from './pages';

const App = () => {
   return (
      <>
         <Router>
            <GlobalStyle />
            <MoviesTVsProvider>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route
                     exact
                     path={['/movie/:id', '/tv/:id']}
                     component={DetailPage}
                  />
               </Switch>
            </MoviesTVsProvider>
         </Router>
      </>
   );
};

export default App;
