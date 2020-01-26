import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
    color: '#424242',
    textDecorationLine: 'none'
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
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
        <Link to="/" className={classes.link}>
          <ListItem button key={'Home'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <HomeIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Home
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* quickstart */}
        <Link to="/quickstart" className={classes.link}>
          <ListItem button key={'Quickstart'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <PlayArrowIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  QuickStart
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* custom */}
        <Link to="/custom" className={classes.link}>
          <ListItem button key={'Custom'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <FitnessCenterIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Custom
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* exercises */}
        <Link to="/exercises" className={classes.link}>
          <ListItem button key={'Exercises'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <DirectionsRunIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Exercises
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* about */}
        <Link to="/about" className={classes.link}>
          <ListItem button key={'About'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <InfoIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                    About
                </Typography>
              </Grid>
            </Grid>
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