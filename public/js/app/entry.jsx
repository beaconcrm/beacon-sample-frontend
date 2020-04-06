/* eslint import/first: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

import browserHistory from './history';
import App from './App';


// when a page changes, scroll to top of the page
browserHistory.listen(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(<App />, document.getElementById('app'));
