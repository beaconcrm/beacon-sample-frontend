import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const Go = ({
  onGoClick,
}) => (
  <Button
    onClick={onGoClick}
    variant="contained"
    color="primary"
  >
    Go
  </Button>
);

Go.propTypes = {
  onGoClick: PropTypes.func.isRequired,
};

export default Go;
