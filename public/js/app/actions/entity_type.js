import { sortBy } from 'lodash';
import { ENTITY_TYPES_LOADED } from 'constants/entity_type';
import api from 'api';


export const loadEntityTypes = accountId => dispatch => new Promise((resolve, reject) => { // eslint-disable-line

  api.get(`/account/${accountId}/entity_types`)

    .then((response) => {
      dispatch({
        type: ENTITY_TYPES_LOADED,
        accountId,
        entityTypes: sortBy(response.results, 'label'),
      });
      return response.results;
    })

    .then(resolve, reject);

});
