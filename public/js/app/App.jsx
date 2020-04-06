import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Notify from 'components/Notify';

import Theme from './Theme';
import store from './store';
import browserHistory from './history';

import Home from './views/Home';


const App = () => (
  <div>

    <CssBaseline />

    <Provider store={store}>
      <Theme>
        <MuiPickersUtilsProvider utils={MomentUtils}>

          <Router history={browserHistory}>
            <div>

              <Switch>

                <Route path="/" component={Home} />

              </Switch>

            </div>
          </Router>

          {/* Wrapper component for notifications that show at the bottom */}
          <Notify />

        </MuiPickersUtilsProvider>
      </Theme>
    </Provider>
  </div>
);

export default hot(App);
