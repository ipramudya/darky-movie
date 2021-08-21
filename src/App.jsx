import React from 'react';
import { MoviesTVsProvider } from './context/MoviesTVsContext';

// Global Styles
import { GlobalStyle } from './GlobalStyles';

// Pages
import { Home, DetailPage } from './pages';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <MoviesTVsProvider>
            <Home />
         </MoviesTVsProvider>
      </>
   );
};

export default App;
