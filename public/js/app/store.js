import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import env from 'config/env';
import reducers from './reducers';


// Add logging middleware in development
let middleware;
if (env === 'development' || env === 'staging') {
  const logger = createLogger({
    collapsed: true,
  });
  middleware = applyMiddleware(
    thunkMiddleware,
    logger,
  );
} else {
  middleware = applyMiddleware(
    thunkMiddleware,
  );
}

// Create the redux store
const store = createStore(
  reducers,
  middleware,
);

export default store;
