import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import InfoIcon from '@material-ui/icons/Info';
import { createMuiTheme } from '@material-ui/core/styles';
import DrawerContext from '../../utils/DrawerContext'
import QuickStart from '../../pages/Quickstart'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#bf360c',
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  }

});

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: 'white'
  }
});

const NavDrawer = () => {
  const classes = useStyles();

  const { isOpen, toggleDrawer } = useContext(DrawerContext)

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* home */}
        <Link to="/">
          <ListItem button key={'Home'}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        {/* quickstart */}
        <Link to="/quickstart">
          <ListItem button key={'Quickstart'}>
            <ListItemIcon><PlayArrowIcon /></ListItemIcon>
            <ListItemText primary={'QuickStart'} />
          </ListItem>
        </Link>
        {/* custom */}
        <Link to="/custom">
          <ListItem button key={'Custom'}>
            <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
            <ListItemText primary={'Custom'} />
          </ListItem>
        </Link>
        {/* exercises */}
        <Link to="/exercises">
          <ListItem button key={'Exercises'}>
            <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
            <ListItemText primary={'Exercises'} />
          </ListItem>
        </Link>
        {/* about */}
        <Link to="/about">
          <ListItem button key={'About'}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <SwipeableDrawer
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList()}
        </SwipeableDrawer>
      </div>
    </ThemeProvider>

  );
}

export default NavDrawer