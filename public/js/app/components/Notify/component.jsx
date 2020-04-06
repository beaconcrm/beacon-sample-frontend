import { isInteger } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';


class Notify extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
      message: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { createdAt } = this.props;
    const { message } = this.state;

    if (createdAt !== nextProps.createdAt && isInteger(nextProps.createdAt)) {

      // Stop the close timeout
      clearTimeout(this.closeTimeout);
      clearTimeout(this.clearMessageTimeout);

      // Update the snackbar message, if necessary
      if (nextProps.message !== message) {
        this.setState({
          message: nextProps.message,
          open: true,
        });
      }

      // Close the message after 2.5 seconds
      this.closeTimeout = setTimeout(() => {
        this.setState({
          open: false,
        });

        // And clear the message 0.5 seconds after that. We do this because
        // sometimes snackbars are wider and we don't want to shrink them while
        // they're going through the close animation
        this.clearMessageTimeout = setTimeout(() => {
          this.setState({
            message: '',
          });
        }, 500);
      }, 2500);
    }
  }

  render() {
    const { open, message } = this.state;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        message={message}
      />
    );
  }

}

Notify.propTypes = {
  createdAt: PropTypes.number,
  message: PropTypes.string,
};

export default Notify;
