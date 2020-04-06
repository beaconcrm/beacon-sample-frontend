import {
  UNPAID_INVOICES_LOADED,
  TRIALS_LOADED,
} from 'constants/finance';
import api from 'api';


export const loadUnpaidInvoices = () => dispatch => new Promise((resolve, reject) => { // eslint-disable-line

  api.get('/internal_reporting/unpaid_invoices')

    .then(({ results }) => {
      dispatch({
        type: UNPAID_INVOICES_LOADED,
        invoices: results,
      });
    })

    .then(resolve, reject);

});

export const loadTrials = () => dispatch => new Promise((resolve, reject) => {

  api.get('/internal_reporting/trials')

    .then(({ results }) => {
      dispatch({
        type: TRIALS_LOADED,
        trials: results,
      });
    })

    .then(resolve, reject);

});
