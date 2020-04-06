import {
  assignIn,
  union,
  map,
  isUndefined,
  reject,
} from 'lodash';
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

import getDictionary from 'utils/getDictionary';

const defaultState = {
  byId: {},

  isLoading: false,

  billingById: {},
  isBillingLoading: false,

  accountUsersById: {},
  isLoadingUsers: false,

  isListLoading: false,
  isListLoadingMore: false,
};

export default function (state = defaultState, action) {


  switch (action.type) {

    case ACCOUNTS_LOADING: {
      return assignIn({}, state, {
        isListLoading: action.page === 1,
        isListLoadingMore: action.page > 1,
      });
    }

    case ACCOUNTS_LOADED: {
      const accountIds = map(action.accounts, 'id');
      const newAccountsById = getDictionary(action.accounts);

      const newState = {
        isListLoading: false,
        isListLoadingMore: false,
        byId: assignIn({}, state.byId, newAccountsById),
      };

      const isSearch = isUndefined(action.page);

      if (isSearch || action.page === 1) {
        // On search page or page 1, set the list ids straight away
        newState.listIds = accountIds;
      } else {
        // On subsequent pages, merge them
        newState.listIds = union(state.listIds, accountIds);
      }

      // If the total is passed on page 1, then add the total in
      if (action.page === 1 && !isUndefined(action.total)) {
        newState.total = action.total;
      }

      return assignIn({}, state, newState);
    }

    case ACCOUNT_LOADING: {
      return assignIn({}, state, {
        isLoading: true,
      });
    }

    case ACCOUNT_LOADED:
    case ACCOUNT_UPDATED: {
      return assignIn({}, state, {
        isLoading: false,
        byId: assignIn({}, state.byId, {
          [action.account.id]: action.account,
        }),
      });
    }

    case ACCOUNT_USERS_LOADING: {
      return assignIn({}, state, {
        isLoadingUsers: true,
      });
    }

    case ACCOUNT_USERS_LOADED: {
      return assignIn({}, state, {
        isLoadingUsers: false,
        accountUsersById: assignIn({}, state.accountUsersById, {
          [action.accountId]: action.accountUsers,
        }),
      });
    }

    case ACCOUNT_USER_UPDATED: {
      return assignIn({}, state, {
        isLoadingUsers: false,
        accountUsersById: assignIn({}, state.accountUsersById, {
          [action.accountId]: map(state.accountUsersById[action.accountId], (existingAccountUser) => {
            if (existingAccountUser.id === action.accountUser.id) {
              return assignIn({}, existingAccountUser, action.accountUser);
            }
            return existingAccountUser;
          }),
        }),
      });
    }

    case ACCOUNT_BILLING_LOADING: {
      return assignIn({}, state, {
        isBillingLoading: true,
      });
    }

    case ACCOUNT_BILLING_UPDATED:
    case ACCOUNT_BILLING_LOADED: {
      return assignIn({}, state, {
        isBillingLoading: false,
        billingById: assignIn({}, state.billingById, {
          [action.billing.account_id]: action.billing,
        }),
      });
    }

    case ACCOUNT_BILLING_ACCOUNT_USER_TYPE_CREATED: {
      const existingBilling = state.billingById[action.accountId];

      return assignIn({}, state, {
        billingById: assignIn({}, state.billingById, {
          [action.accountId]: assignIn({}, existingBilling, {
            // append new one to list
            account_user_types: union(existingBilling.account_user_types, [action.accountUserType]),
          }),
        }),
      });
    }

    // when a type is updated, change it
    case ACCOUNT_BILLING_ACCOUNT_USER_TYPE_UPDATED: {
      const existingBilling = state.billingById[action.accountId];

      return assignIn({}, state, {
        billingById: assignIn({}, state.billingById, {
          [action.accountId]: assignIn({}, existingBilling, {

            // update in the list with the new one
            account_user_types: map(existingBilling.account_user_types, (type) => {
              if (type.id === action.accountUserType.id) {
                return action.accountUserType;
              }
              return type;
            }),

          }),
        }),
      });
    }

    case ACCOUNT_BILLING_ACCOUNT_USER_TYPE_DELETED: {
      const existingBilling = state.billingById[action.accountId];

      return assignIn({}, state, {
        billingById: assignIn({}, state.billingById, {
          [action.accountId]: assignIn({}, existingBilling, {
            // remove from list
            account_user_types: reject(existingBilling.account_user_types, [
              'id',
              action.accountUserTypeId,
            ]),
          }),
        }),
      });
    }

    default:
      return state;
  }


}
