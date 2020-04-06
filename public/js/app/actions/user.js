import {
  toLower,
  trim,
} from 'lodash';
import encode from 'mout/queryString/encode';
import {
  USER_CURRENT_SESSION_LOADED,
  CURRENT_USER_LOADED,
  USERS_LOADING,
  USERS_LOADED,
  USER_LOADING,
  USER_LOADED,
  USER_UPDATED,
} from 'constants/user';
import {
  NOTIFY_SHOW_MESSAGE,
} from 'constants/notify';
import api from 'api';


export const loadCurrentSession = () => dispatch => new Promise((resolve, reject) => {

  api.get('/user/me/session/current')

    .then(({ session }) => {
      dispatch({
        type: USER_CURRENT_SESSION_LOADED,
        session,
      });
      return session;
    })

    .then(resolve, reject);

});


export const loadCurrentUser = () => dispatch => new Promise((resolve, reject) => {

  api.get('/user/me')

    .then((result) => {
      dispatch({
        type: CURRENT_USER_LOADED,
        user: result,
      });
    })

    .then(resolve, reject);

});


export const loadUsersList = ({
  page,
  query,
}) => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: USERS_LOADING,
    page,
  });

  const queryString = encode({
    per_page: 20,
    page,
  });

  const payload = {};

  const isSearch = trim(query);
  if (isSearch) {
    payload.conditions = [{
      field: 'email',
      operator: 'contains',
      value: trim(toLower(query)),
    }];
  }

  api.post(`/users/filter${queryString}`, payload)

    .then(({ results, total }) => {
      dispatch({
        type: USERS_LOADED,
        users: results,
        page: isSearch ? undefined : page,
        total,
      });
    })

    .then(resolve, reject);


});


export const loadUser = userId => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: USER_LOADING,
  });

  api.get(`/user/${userId}`)

    .then((user) => {
      dispatch({
        type: USER_LOADED,
        user,
      });
    })

    .then(resolve, reject);

});


export const updateUser = (userId, data, notifyMessage) => dispatch => new Promise((resolve, reject) => {

  api.patch(`/user/${userId}`, data)

    .then((user) => {
      dispatch({
        type: USER_UPDATED,
        user,
      });

      if (notifyMessage) {
        dispatch({
          type: NOTIFY_SHOW_MESSAGE,
          message: notifyMessage,
        });
      }
    })

    .then(resolve, reject);

});
