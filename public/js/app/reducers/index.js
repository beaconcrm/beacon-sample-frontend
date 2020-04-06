import { get } from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import account from './account';
import user from './user';
import finance from './finance';
import entityType from './entity_type';
import notify from './notify';

const appReducer = combineReducers({
  account,
  user,
  entityType,
  finance,
  notify,
  routing: routerReducer,
});


// Return a function that returns the state at any level of the redux store.
// Good for getting the top level state, or a more nested level of state
// (more efficient for selectors)
export const getStateByKey = key => state => get(state, key);

export default appReducer;
