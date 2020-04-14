import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';

import browserHistory from 'app/history';

import Home from './Home';
import SendMessage from './SendMessage';


const ViewsWrapper = ({ classes }) => (
  <div>

    <AppBar
      color="default"
      className={classes.appBar}
    >
      <Toolbar>
        <img
          alt="Beacon"
          src={`${window.assetsHost}/img/logo.png`}
          className={classes.logo}
        />

        Sample Slack App
      </Toolbar>
    </AppBar>

    <Drawer
      classes={{
        paper: classes.paperDrawer,
      }}
      variant="permanent"
    >

      <ListItem
        button
        // onClick={this.handleClick}
        onClick={() => browserHistory.push('/')}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText
          primary="Home"
          disableTypography
        />
      </ListItem>

      <ListItem
        button
        onClick={() => browserHistory.push('/send_message')}
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText
          primary="Send message"
          disableTypography
        />
      </ListItem>

    </Drawer>

    <div className={classes.content}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/send_message" component={SendMessage} />
      </Switch>
    </div>

  </div>
);

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    maxHeight: 47,
  },
  paperDrawer: {
    width: 270,
    [theme.breakpoints.up('md')]: {
      paddingTop: 80,
    },
  },
  content: {
    paddingLeft: 290,
    paddingTop: 80,
  },
});

ViewsWrapper.propTypes = {};

export default withStyles(styles)(ViewsWrapper);
