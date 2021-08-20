import React from 'react';

// Global Styles
import { GlobalStyle } from './GlobalStyles';

// Components
import { Hero } from './components';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Hero />
      </>
   );
};

export default App;
