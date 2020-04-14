import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import grey from '@material-ui/core/colors/grey';


const AdminTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffe974',
      main: '#F5B743',
      dark: '#be8705',
      contrastText: '#fff',
    },
    secondary: {
      light: '#315464',
      main: '#012b3a',
      dark: '#000015',
      contrastText: '#fff',
    },
  },
  overrides: {

    MuiCard: {
      root: {
        marginBottom: 25,
      },
      // .MuiCardContent-root-168:last-child
    },

    MuiPaper: {
      // let's chill out on the shadows this isn't a cave
      elevation2: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
      },
    },

    MuiTypography: {
      h1: {
        fontSize: 16,
        color: '#777',
        margin: 0,
        fontWeight: 500,
        textTransform: 'uppercase',
        padding: '0 22px',
        marginBottom: 25,
        position: 'relative',
        display: 'inline-block',
      },
      caption: {
        fontSize: '0.85em',
        color: grey[700],
        fontWeight: 500,
      },
      h3: {

      },
    },

    MuiInput: {
      // make the hover underline not black! that's ugly
      underline: {
        '&:hover:not($disabled):not($focused):before': {
          borderBottom: '2px solid rgba(0, 0, 0, 0.6) !important',
          height: 2,
        },
      },
    },

    MuiDialogTitle: {
      root: {
        fontSize: 20,
      },
    },

    // make tooltips bigger and more helpful
    MuiTooltip: {
      popper: {
        maxWidth: 280,
      },
      tooltip: {
        fontSize: '0.95rem',
        padding: 10,
      },
    },

  },
});

const Theme = ({ children }) => (
  <MuiThemeProvider theme={AdminTheme}>
    {children}
  </MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
