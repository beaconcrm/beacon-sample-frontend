import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = ({ style }) => (
  <div style={style}>
    <CircularProgress
      size={50}
      thickness={2}
    />
  </div>
);

Loading.defaultProps = {
  style: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
};

Loading.propTypes = {
  style: PropTypes.object,
};

export default Loading;
