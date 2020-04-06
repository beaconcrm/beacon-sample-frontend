import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const CardTitle = ({ children, className, classes }) => (
  <Typography
    variant="h3"
    className={classNames(classes.title, className)}
  >
    {children}
  </Typography>
);

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 5,
    marginBottom: 15,
  },
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withStyles(styles)(CardTitle);
