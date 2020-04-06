import {
  assignIn,
} from 'lodash';
import { ENTITY_TYPES_LOADED } from 'constants/entity_type';


const defaultState = {
  byAccountId: {},
};


export default function (state = defaultState, action) {

  switch (action.type) {

    case ENTITY_TYPES_LOADED: {
      return assignIn({}, state, {
        byAccountId: assignIn({}, state.byAccountId, {
          [action.accountId]: action.entityTypes,
        }),
      });
    }

    default:
      return state;

  }
}
