import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import browserHistory from 'app/history';


const SubMenuItem = ({ link, label, isActive, classes }) => (
  <ListItem
    key={link}
    button
    onClick={() => browserHistory.push(link)}
    classes={{
      root: classNames({
        [classes.activeListItem]: isActive,
      }),
    }}
  >
    <ListItemText
      primary={label}
      disableTypography
      classes={{
        root: classes.listItemText,
        inset: classes.listItemTextInset,
      }}
      inset
    />
  </ListItem>
);

const styles = theme => ({
  activeListItem: {
    background: 'rgba(0, 0, 0, 0.12)',
  },
  listItemText: {
    fontSize: '0.9rem',
    color: theme.palette.text.primary,
  },
  listItemTextInset: {
    '&:first-child': {
      paddingLeft: 39,
    },
  },
});


SubMenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SubMenuItem);
