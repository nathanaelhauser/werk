import React,
       { useContext } from 'react'
import { Link,
         withRouter } from 'react-router-dom'
import { makeStyles, 
         ThemeProvider,
         createMuiTheme } from '@material-ui/core/styles'
import { SwipeableDrawer,
         List,
         ListItem,
         Grid,
         Typography } from '@material-ui/core'
//  icons
import HomeIcon from '@material-ui/icons/Home'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InfoIcon from '@material-ui/icons/Info'
import DrawerContext from '../../utils/DrawerContext'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      // main: '#bf360c',
      main: "#f44336"
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  }

})

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
})

const NavDrawer = withRouter(props => <NavDrawerGuts {...props} />)

const NavDrawerGuts = props => {
  const classes = useStyles()

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
        <Link to="/home" className={classes.link}>
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
        <Link to="/exercise" className={classes.link}>
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
        {/* recent */}
        <Link to="/recent" className={classes.link}>
          <ListItem button key={'Recent'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <AccessTimeIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Recent
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
  )

  return (
    <ThemeProvider theme={theme}>
      <div>
        {
          props.location.pathname !== '/'
            ? <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
               {sideList()}
              </SwipeableDrawer>
            : ''
        }
      </div>
    </ThemeProvider>

  )
}

export default NavDrawer