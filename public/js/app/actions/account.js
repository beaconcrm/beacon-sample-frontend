import encode from 'mout/queryString/encode';
import { trim } from 'lodash';
import {
  ACCOUNTS_LOADING,
  ACCOUNTS_LOADED,
  ACCOUNT_LOADING,
  ACCOUNT_LOADED,
  ACCOUNT_UPDATED,
  ACCOUNT_USERS_LOADING,
  ACCOUNT_USERS_LOADED,
  ACCOUNT_USER_UPDATED,
  ACCOUNT_BILLING_LOADING,
  ACCOUNT_BILLING_LOADED,
  ACCOUNT_BILLING_UPDATED,
  ACCOUNT_BILLING_ACCOUNT_USER_TYPE_CREATED,
  ACCOUNT_BILLING_ACCOUNT_USER_TYPE_UPDATED,
  ACCOUNT_BILLING_ACCOUNT_USER_TYPE_DELETED,
} from 'constants/account';
import {
  NOTIFY_SHOW_MESSAGE,
} from 'constants/notify';
import api from 'api';


export const loadAccountsList = ({
  page,
  query,
}) => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: ACCOUNTS_LOADING,
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
      field: 'name',
      operator: 'contains',
      value: trim(query),
    }];
  }

  api.post(`/accounts/filter${queryString}`, payload)

    .then(({ results, total }) => {
      dispatch({
        type: ACCOUNTS_LOADED,
        accounts: results,
        page: isSearch ? undefined : page,
        total,
      });
    })

    .then(resolve, reject);

});


export const loadAccount = accountId => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: ACCOUNT_LOADING,
  });

  api.get(`/account/${accountId}`)

    .then((account) => {
      dispatch({
        type: ACCOUNT_LOADED,
        account,
      });
    })

    .then(resolve, reject);

});


export const updateAccount = (accountId, data) => dispatch => new Promise((resolve, reject) => {

  api.patch(`/account/${accountId}`, data)

    .then((account) => {
      dispatch({
        type: ACCOUNT_UPDATED,
        account,
      });
    })

    .then(resolve, reject);

});


export const loadAccountBilling = accountId => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: ACCOUNT_BILLING_LOADING,
  });

  api.get(`/account/${accountId}/billing`)

    .then((billing) => {
      dispatch({
        type: ACCOUNT_BILLING_LOADED,
        billing,
      });
    })

    .then(resolve, reject);

});


export const createUpdateAccountBilling = (accountId, data, notifyMessage) => dispatch => new Promise((resolve, reject) => {

  api.put(`/account/${accountId}/billing`, data)

    .then((billing) => {
      dispatch({
        type: ACCOUNT_BILLING_UPDATED,
        billing,
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


export const createAccountStripeSubscription = (accountId, notifyMessage) => dispatch => new Promise((resolve, reject) => {

  api.post(`/account/${accountId}/billing/stripe_subscription`, {})

    .then(() => {
      if (notifyMessage) {
        dispatch({
          type: NOTIFY_SHOW_MESSAGE,
          message: notifyMessage,
        });
      }
    })

    .then(resolve, reject);

});


export const createBillingAccountUserType = ({
  accountId,
  data,
  notifyMessage,
}) => dispatch => new Promise((resolve, reject) => {

  api.post(`/account/${accountId}/billing_account_user_type`, data)

    .then((result) => {
      dispatch({
        type: ACCOUNT_BILLING_ACCOUNT_USER_TYPE_CREATED,
        accountUserType: result,
        accountId,
      });

      if (notifyMessage) {
        dispatch({
          type: NOTIFY_SHOW_MESSAGE,
          message: notifyMessage,
        });
      }

      return result;
    })

    .then(resolve, reject);

});


export const updateBillingAccountUserType = ({
  accountId,
  billingAccountUserTypeId,
  data,
  notifyMessage,
}) => dispatch => new Promise((resolve, reject) => {

  api.patch(`/account/${accountId}/billing_account_user_type/${billingAccountUserTypeId}`, data)

    .then((result) => {
      dispatch({
        type: ACCOUNT_BILLING_ACCOUNT_USER_TYPE_UPDATED,
        accountUserType: result,
        accountId,
      });

      if (notifyMessage) {
        dispatch({
          type: NOTIFY_SHOW_MESSAGE,
          message: notifyMessage,
        });
      }

      return result;
    })

    .then(resolve, reject);

});


export const destroyBillingAccountUserType = ({
  accountId,
  billingAccountUserTypeId,
  notifyMessage,
}) => dispatch => new Promise((resolve, reject) => {

  api.delete(`/account/${accountId}/billing_account_user_type/${billingAccountUserTypeId}`)

    .then((result) => {
      dispatch({
        type: ACCOUNT_BILLING_ACCOUNT_USER_TYPE_DELETED,
        accountUserTypeId: billingAccountUserTypeId,
        accountId,
      });

      if (notifyMessage) {
        dispatch({
          type: NOTIFY_SHOW_MESSAGE,
          message: notifyMessage,
        });
      }

      return result;
    })

    .then(resolve, reject);

});


export const loadAccountUsers = accountId => dispatch => new Promise((resolve, reject) => {

  dispatch({
    type: ACCOUNT_USERS_LOADING,
  });

  api.get(`/account/${accountId}/users`)

    .then(({ results }) => {
      dispatch({
        type: ACCOUNT_USERS_LOADED,
        accountId,
        accountUsers: results,
      });
    })

    .then(resolve, reject);

});


export const updateAccountUser = ({
  accountId,
  accountUserId,
  data,
  notifyMessage,
}) => dispatch => new Promise((resolve, reject) => {

  api.patch(`/account/${accountId}/account_user/${accountUserId}`, data)

    .then((result) => {
      dispatch({
        type: ACCOUNT_USER_UPDATED,
        accountId,
        accountUser: result,
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
