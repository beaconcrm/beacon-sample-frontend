/* eslint lodash/prefer-map: 0 */
import { forEach } from 'lodash';

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';

import MenuItem from './MenuItem';


class Sidebar extends Component {

  renderSidebarTabs() {
    const {
      tabs,
      location,
      toggleMobileDrawer,
      classes,
    } = this.props;

    const elements = [];

    forEach(tabs, (section, index) => {
      forEach(section, (tab) => {
        elements.push(
          <MenuItem
            key={tab.link}
            icon={tab.icon}
            link={tab.link}
            label={tab.label}
            isActive={tab.isActive}
            subMenu={tab.subMenu}
            location={location}
            toggleMobileDrawer={toggleMobileDrawer}
          />,
        );
      });

      elements.push(
        <Divider
          key={`divider_${index}`}
          classes={{
            root: classes.sectionDivider,
          }}
        />,
      );

    });

    return (
      <List component="nav">
        {elements}
      </List>
    );
  }

  render() {
    const { user, isMobileDrawerOpen, toggleMobileDrawer, classes } = this.props;

    return (
      <div>

        <Hidden smDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.paperDrawer,
            }}
          >
            <div
              tabIndex={0}
              role="button"
            >

              {this.renderSidebarTabs()}

            </div>
          </Drawer>
        </Hidden>

        <Hidden mdUp>
          <Drawer
            classes={{
              paper: classes.paperDrawer,
            }}
            open={isMobileDrawerOpen}
            onClose={toggleMobileDrawer}
          >
            <div
              tabIndex={0}
              role="button"
            >

              {this.renderSidebarTabs()}

            </div>
          </Drawer>
        </Hidden>

      </div>
    );
  }

}


const styles = theme => ({
  paperDrawer: {
    width: 270,
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
    },
  },
  profileWrapper: {
    position: 'relative',
    height: 129,
    marginBottom: 5,
    width: '100%',
    background: `url(${window.assetsHost}/img/profile-menu.png) no-repeat left top`,
    backgroundSize: '100%',
  },
  userAvatar: {
    border: '3px solid rgba(226, 226, 226, 0.14)',
    position: 'absolute',
    left: 12,
    top: 20,
  },
  userName: {
    background: 'rgba(0, 0, 0, 0.37)',
    padding: '7px 14px',
    color: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    fontWeight: 500,
  },
  sectionDivider: {
    marginTop: 8,
    marginBottom: 8,
  },
});


Sidebar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  user: PropTypes.object.isRequired,
  isMobileDrawerOpen: PropTypes.bool.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};


export default withStyles(styles)(Sidebar);
