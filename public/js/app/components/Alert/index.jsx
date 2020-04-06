import { isString } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';


class Alert extends Component {

  render() {
    const {
      classes,
      title,
      message,
      type,
    } = this.props;

    return (
      <div
        className={classNames({
          [classes.alert]: true,
          [classes.alertDanger]: type === 'danger',
          [classes.alertWarning]: type === 'warning',
          [classes.alertInfo]: type === 'info',
          [classes.alertSuccess]: type === 'success',
        })}
      >
        {title && (
          <div className={classes.alertTitle}>
            {title}
          </div>
        )}

        {isString(message) ? (
          <p className={classes.alertMessage}>{message}</p>
        ) : message}
        

      </div>
    );
  }

}


Alert.propTypes = {
  type: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
  title: PropTypes.node,
  message: PropTypes.node.isRequired,
};

export default withStyles(styles)(Alert);
