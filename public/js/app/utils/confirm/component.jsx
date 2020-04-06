/*
* Modified ver
*/
import { isFunction, isError } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import Loading from 'components/Loading';
import Alert from 'components/Alert';
import Theme from '../../Theme';


class Confirm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      loading: false,
      errorMessage: null,
    };

    this.proceed = this.proceed.bind(this);
    this.cancel = this.cancel.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillUnmount() {
    this.close();
  }

  dismiss() {
    const { dismissable, onDismiss } = this.props;

    if (!dismissable) {
      return;
    }

    this.showLoadingUntilResolved(onDismiss(), this.close);
  }

  cancel() {
    const { onCancel } = this.props;
    if (!isFunction(onCancel)) {
      return this.close();
    }
    this.showLoadingUntilResolved(onCancel(), this.close);
  }

  proceed() {
    const { onConfirm } = this.props;
    if (!isFunction(onConfirm)) {
      return this.close();
    }
    this.showLoadingUntilResolved(onConfirm(), this.close);
  }

  showLoadingUntilResolved(promise, cb) {
    if (promise && isFunction(promise.then)) {
      this.setState({
        loading: true,
        errorMessage: null,
      });
      promise.then(cb).catch((err) => {
        this.setState({
          loading: false,
          errorMessage: isError(err) ? err.message : null,
        });
      });
    } else {
      setTimeout(cb, 0);
    }
  }

  close() {
    const { dispose } = this.props;
    this.setState({
      show: false,
    }, dispose);
  }

  render() {
    const {
      okLabel,
      cancelLabel,
      title,
      message,
      classes,
    } = this.props;
    const {
      show,
      loading,
      errorMessage,
    } = this.state;

    const messageEl = React.isValidElement(message) ? message : (
      <DialogContentText id="confirm-dialog-description">
        {message}
      </DialogContentText>
    );

    return (
      <Theme>

        <Dialog
          open={show}
          onClose={this.dismiss}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
          fullWidth
        >

          {!loading ? (
            <DialogTitle id="confirm-dialog-title">
              {title}
            </DialogTitle>
          ) : undefined}

          <DialogContent>

            {errorMessage && (
              <Alert
                type="danger"
                message={errorMessage}
              />
            )}

            {loading ? (
              <div className={classes.loading}>
                <Loading />
              </div>
            ) : messageEl}

          </DialogContent>

          {!loading && (
            <DialogActions>
              <Button onClick={this.cancel}>
                {cancelLabel}
              </Button>
              <Button
                onClick={this.proceed}
                color="primary"
                variant="contained"
                autoFocus
              >
                {okLabel}
              </Button>
            </DialogActions>
          )}

        </Dialog>

      </Theme>
    );
  }

}

Confirm.defaultProps = {
  dismissable: false,
  okLabel: 'OK',
  cancelLabel: 'Cancel',
};


Confirm.propTypes = {
  onDismiss: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  dismissable: PropTypes.bool,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  dispose: PropTypes.func.isRequired, // internal only
};


const styles = {
  loading: {
    margin: '40px 0 30px 0',
  },
};


export default withStyles(styles)(Confirm);
