import { isArray, map, some } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import browserHistory from 'app/history';
import SubMenuItem from './SubMenuItem';


class MenuItem extends Component {

  constructor(props) {
    super();

    let isExpanded = false;

    // Expand by default if visiting directly on a submenu item
    if (isArray(props.subMenu)) {
      if (some(props.subMenu, ['link', props.location.pathname])) {
        isExpanded = true;
      }
    }

    this.state = {
      isExpanded,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { subMenu, link, toggleMobileDrawer } = this.props;
    const { isExpanded } = this.state;

    if (!isArray(subMenu)) {
      toggleMobileDrawer();
      browserHistory.push(link);
    } else {
      this.setState({
        isExpanded: !isExpanded,
      });
    }
  }

  render() {
    const {
      link,
      icon,
      label,
      subMenu,
      isActive,
      classes,
    } = this.props;
    const {
      isExpanded,
    } = this.state;

    const isSubMenu = isArray(subMenu);

    return (
      <div>

        <ListItem
          key={link}
          button
          onClick={this.handleClick}
          classes={{
            root: classNames({
              [classes.activeListItem]: isActive,
            }),
          }}
        >
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={label}
            disableTypography
            classes={{
              root: classes.listItemText,
            }}
          />

          {isSubMenu && (
            isExpanded ? <ExpandLess /> : <ExpandMore />
          )}

        </ListItem>

        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div">

            {map(subMenu, subMenuItem => (
              <SubMenuItem
                key={subMenuItem.link}
                label={subMenuItem.label}
                link={subMenuItem.link}
                isActive={subMenuItem.isActive}
              />
            ))}

          </List>
        </Collapse>

      </div>
    );

  }

}

const styles = theme => ({
  activeListItem: {
    background: 'rgba(0, 0, 0, 0.12)',
  },
  listItemText: {
    fontSize: '0.9rem',
    color: theme.palette.text.primary,
  },
  listItemIcon: {
    marginRight: 0,
  },
});

MenuItem.defaultProps = {
  isActive: false,
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  subMenu: PropTypes.array,
  location: PropTypes.object.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
};


export default withStyles(styles)(MenuItem);
