import { get } from 'lodash';
import guid from 'mout/random/guid';
import axios from 'axios';
import { host as apiHost } from 'config/api';


// a unique ID is used for every single tab - used to prevent
// reloading things via websockets in response to a change that has
// been made by the user in the current tab
const clientId = guid();


export default {

  getClientId() {
    return clientId;
  },

  get(path) {
    return new Promise((resolve, reject) => {

      axios({
        method: 'get',
        url: apiHost + path,
        headers: {
          'Beacon-Application': 'admin_dashboard',
          'Beacon-Client-Id': clientId,
        },
        responseType: 'json',
        withCredentials: true,
      })

        .then((response) => {
          resolve(response.data);
        })

        .catch(this.handleError(reject));

    });
  },

  post(path, data) {
    return new Promise((resolve, reject) => {

      axios({
        method: 'post',
        url: apiHost + path,
        data,
        headers: {
          'Content-Type': 'application/json',
          'Beacon-Application': 'admin_dashboard',
          'Beacon-Client-Id': clientId,
        },
        withCredentials: true,
        responseType: 'json',
      })

        .then((response) => {
          resolve(response.data);
        })

        .catch(this.handleError(reject));

    });
  },

  patch(path, data) {
    return new Promise((resolve, reject) => {

      axios({
        method: 'patch',
        url: apiHost + path,
        data,
        headers: {
          'Content-Type': 'application/json',
          // Authorization: this.getAuthorizationHeader(),
          'Beacon-Application': 'admin_dashboard',
          'Beacon-Client-Id': clientId,
        },
        withCredentials: true,
        responseType: 'json',
      })

        .then((response) => {
          resolve(response.data);
        })

        .catch(this.handleError(reject));

    });
  },

  put(path, data) {
    return new Promise((resolve, reject) => {

      axios({
        method: 'put',
        url: apiHost + path,
        data,
        headers: {
          'Content-Type': 'application/json',
          'Beacon-Application': 'admin_dashboard',
          'Beacon-Client-Id': clientId,
        },
        withCredentials: true,
        responseType: 'json',
      })

        .then((response) => {
          resolve(response.data);
        })

        .catch(this.handleError(reject));

    });
  },

  delete(path) {
    return new Promise((resolve, reject) => {

      axios({
        method: 'delete',
        url: apiHost + path,
        headers: {
          'Content-Type': 'application/json',
          'Beacon-Application': 'admin_dashboard',
          'Beacon-Client-Id': clientId,
        },
        withCredentials: true,
        responseType: 'json',
      })

        .then((response) => {
          resolve(response.data);
        })

        .catch(this.handleError(reject));

    });
  },

  // Note: the upload functions have been removed

  handleError(reject) {
    return (err) => {

      // const statusCode = get(err, 'response.status');
      // const errorCode = get(err, 'response.data.error.code');

      // const isLoggedOut = includes([
      //   'session_invalid',
      //   'session_expired',
      //   'session_revoked',
      // ], errorCode);

      // const isForbidden = statusCode === 403;
      // if (isForbidden) {
      //   store.dispatch(setGlobalError({ code: 'forbidden' }));
      // }

      reject(get(err, 'response.data') || err);

    };
  },

};
