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
               <Home />
            </MoviesTVsProvider>
         </Router>
      </>
   );
};

export default App;
