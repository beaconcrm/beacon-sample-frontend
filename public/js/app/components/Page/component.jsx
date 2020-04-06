import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Sidebar from './Sidebar';


class Page extends Component {

  constructor() {
    super();

    this.state = {
      isMobileDrawerOpen: false,
    };

    this.toggleMobileDrawer = this.toggleMobileDrawer.bind(this);
  }

  toggleMobileDrawer() {
    const { isMobileDrawerOpen } = this.state;

    this.setState({
      isMobileDrawerOpen: !isMobileDrawerOpen,
    });
  }

  render() {
    const { sidebarTabs, user, logout, location, children, classes } = this.props;
    const { isMobileDrawerOpen } = this.state;

    return (
      <div>

        <Header
          toggleMobileDrawer={this.toggleMobileDrawer}
        />

        <Sidebar
          tabs={sidebarTabs}
          user={user}
          location={location}
          isMobileDrawerOpen={isMobileDrawerOpen}
          toggleMobileDrawer={this.toggleMobileDrawer}
        />

        <main
          className={classNames({
            [classes.content]: true,
            [classes.contentShift]: true,
          })}
        >
          {children}
        </main>

      </div>
    );
  }

}

const styles = theme => ({
  content: {
    marginTop: 65,
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      padding: 30,
    },
  },
  contentShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 270,
    },
  },
});


Page.propTypes = {
  location: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  sidebarTabs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  children: PropTypes.node.isRequired,
};


export default withStyles(styles)(Page);
