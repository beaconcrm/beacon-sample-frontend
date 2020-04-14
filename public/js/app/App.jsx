import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Theme from './Theme';
import browserHistory from './history';

import Views from './views';


const App = () => (
  <div>
    <CssBaseline />

    <Theme>

      <Router history={browserHistory}>
        <div>

          <Switch>

            {/*
            * Delegate all routes to the `views` folder, where there is more routing.
            * The `component` is expecting a function, and `Views` is an object so
            * fails the `Route` validation. Wrap in a function to make it work,
            * it's not important.
            */}
            <Route path="/" component={props => <Views {...props} />} />

          </Switch>

        </div>
      </Router>

    </Theme>
  </div>
);

export default hot(App);
