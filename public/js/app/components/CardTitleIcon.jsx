import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const CardTitleIcon = ({ children, classes }) => (
  <div className={classes.cardTitleIcon}>
    {children}
  </div>
);

const styles = theme => ({
  cardTitleIcon: {
    marginRight: theme.spacing(1),
    display: 'inline',
    position: 'relative',
    top: 5,
  },
});

CardTitleIcon.propTypes = {
  children: PropTypes.node,
};

export default withStyles(styles)(CardTitleIcon);
