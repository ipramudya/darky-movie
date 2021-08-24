import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';

render(
   <React.StrictMode>
      <Router>
         <Switch>
            <App />
         </Switch>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);
