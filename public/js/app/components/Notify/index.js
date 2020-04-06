import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getStateByKey } from 'reducers';
import Notify from './component';

const selector = createSelector([
  getStateByKey('notify'),
], notify => ({
  createdAt: notify.created_at,
  message: notify.message,
}));

const NotifyContainer = connect(
  selector,
)(Notify);


export default NotifyContainer;
