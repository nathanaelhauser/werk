import React, { useContext } from 'react';
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
});

const NavDrawer = () => {
  const classes = useStyles();

  const { isOpen, toggleDrawer } = useContext(DrawerContext) 

  const redirect = page => event => window.location.href = `http://${window.location.host}${page}`

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          {/* home */}
        <ListItem button key={'Home'} onClick={redirect('/home')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        {/* quickstart */}
        <ListItem button key={'Quickstart'} onClick={redirect('/quickstart')}>
          <ListItemIcon><PlayArrowIcon /></ListItemIcon>
          <ListItemText primary={'QuickStart'} />
        </ListItem>
        {/* custom */}
        <ListItem button key={'Custom'} onClick={redirect('/custom')}>
          <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
          <ListItemText primary={'Custom'} />
        </ListItem>
        {/* exercises */}
        <ListItem button key={'Exercises'} onClick={redirect('/exercises')}>
          <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
          <ListItemText primary={'Exercises'} />
        </ListItem>
        {/* about */}
        <ListItem button key={'About'} onClick={redirect('/about')}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
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