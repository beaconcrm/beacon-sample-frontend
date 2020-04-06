import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { host as dashboardHost } from 'config/dashboard';


class PageHeader extends Component {

  static handleLogout() {
    window.location.href = `${dashboardHost}/logout`;
  }

  constructor() {
    super();

    this.state = {
      mobileAnchorEl: null,
    };

    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
  }

  handleMobileMenuClick(e) {
    this.setState({
      mobileAnchorEl: e.currentTarget,
    });
  }

  handleMobileMenuClose() {
    this.setState({
      mobileAnchorEl: null,
    });
  }

  render() {
    const {
      classes,
      toggleMobileDrawer,
    } = this.props;
    const {
      mobileAnchorEl,
    } = this.state;

    return (
      <div>
        <AppBar
          color="default"
          className={classes.appBar}
        >
          <Toolbar>

            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={toggleMobileDrawer}
                // className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <img
              alt="Beacon"
              src={`${window.assetsHost}/img/logo.png`}
              className={classes.logo}
            />

            Admin


            <div className={classes.right}>

              <Button
                onClick={PageHeader.handleLogout}
                color="inherit"
              >
                Logout
              </Button>

            </div>


            <div className={classes.rightMobile}>

              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuClick}
                // className={classes.mobileMenuIcon}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>

              <Menu
                anchorEl={mobileAnchorEl}
                open={Boolean(mobileAnchorEl)}
                onClose={this.handleMobileMenuClose}
              >
                <MenuItem
                  onClick={PageHeader.handleLogout}
                >
                  Logout
                </MenuItem>
              </Menu>

            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

PageHeader.propTypes = {
  toggleMobileDrawer: PropTypes.func.isRequired,
};

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    maxHeight: 47,
  },
  right: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rightLinks: {
    marginTop: 5,
  },
  accountSwitch: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  rightMobile: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileMenuIcon: {
    color: 'white',
  },
});

export default withStyles(styles)(PageHeader);
