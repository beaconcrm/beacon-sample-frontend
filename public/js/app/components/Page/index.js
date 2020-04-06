import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getStateByKey } from 'reducers';
import Page from './component';


const selector = createSelector([
  getStateByKey('account.account'),
  getStateByKey('user.currentUser'),
  getStateByKey('user.currentUserAccounts'),
], (account, user, userAccounts) => ({
  account,
  user,
  userAccounts,
}));


const mapDispatchToProps = {

};


export default connect(
  selector,
  mapDispatchToProps,
)(Page);
