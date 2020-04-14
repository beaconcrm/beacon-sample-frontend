import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Theme from './Theme';
import browserHistory from './history';

import Wrapper from './views/Wrapper';


const App = () => (
  <div>
    <CssBaseline />

    <Theme>

      <Router history={browserHistory}>
        <div>

          <Switch>

            <Route path="/" component={Wrapper} />

          </Switch>

        </div>
      </Router>

    </Theme>
  </div>
);

export default hot(App);
