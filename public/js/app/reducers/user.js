import {
  assignIn,
  map,
  isUndefined,
  union,
} from 'lodash';
import {
  USER_CURRENT_SESSION_LOADED,
  CURRENT_USER_LOADED,
  USERS_LOADING,
  USERS_LOADED,
  USER_LOADING,
  USER_LOADED,
  USER_UPDATED,
} from 'constants/user';
import getDictionary from 'utils/getDictionary';

const defaultState = {
  currentSession: undefined, // undefined to start, null if not logged in, object if has value

  // all of the users dictionary
  byId: {},

  isListLoading: false,
  isListLoadingMore: false,
};


export default function (state = defaultState, action) {

  switch (action.type) {

    case USER_CURRENT_SESSION_LOADED: {
      return assignIn({}, state, {
        currentSession: action.session,
      });
    }

    case CURRENT_USER_LOADED: {
      return assignIn({}, state, {
        currentUser: action.user,
      });
    }

    case USERS_LOADING: {
      return assignIn({}, state, {
        isListLoading: action.page === 1,
        isListLoadingMore: action.page > 1,
      });
    }

    case USERS_LOADED: {
      const userIds = map(action.users, 'id');
      const newUsersById = getDictionary(action.users);

      const newState = {
        isListLoading: false,
        isListLoadingMore: false,
        byId: assignIn({}, state.byId, newUsersById),
      };

      const isSearch = isUndefined(action.page);

      if (isSearch || action.page === 1) {
        // On search page or page 1, set the list ids straight away
        newState.listIds = userIds;
      } else {
        // On subsequent pages, merge them
        newState.listIds = union(state.listIds, userIds);
      }

      // If the total is passed on page 1, then add the total in
      if (action.page === 1 && !isUndefined(action.total)) {
        newState.total = action.total;
      }

      return assignIn({}, state, newState);
    }

    case USER_LOADING: {
      return assignIn({}, state, {
        isLoading: true,
      });
    }

    case USER_LOADED:
    case USER_UPDATED: {
      return assignIn({}, state, {
        isLoading: false,
        byId: assignIn({}, state.byId, {
          [action.user.id]: action.user,
        }),
      });
    }

    default:
      return state;

  }
}
