import {
  assignIn,
} from 'lodash';
import {
  UNPAID_INVOICES_LOADED,
  TRIALS_LOADED,
} from 'constants/finance';

const defaultState = {
  unpaidInvoices: undefined,
  trials: undefined,
};


export default function (state = defaultState, action) {

  switch (action.type) {

    case UNPAID_INVOICES_LOADED: {
      return assignIn({}, state, {
        unpaidInvoices: action.invoices,
      });
    }

    case TRIALS_LOADED: {
      return assignIn({}, state, {
        trials: action.trials,
      });
    }

    default:
      return state;

  }
}
