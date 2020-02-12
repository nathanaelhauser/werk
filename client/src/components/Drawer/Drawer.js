import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SwipeableDrawer,
         List,
         ListItem,
         ListItemIcon,
         ListItemText,
         Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DrawerContext from '../../utils/DrawerContext'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const Drawer = () => {
  const classes = useStyles()

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
        <ListItem button key={'Home'} onClick={redirect('/')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button key={'About'} onClick={redirect('/about')}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
        <hr/>
        <ListItem button key={'My Profile'} onClick={redirect('/profile')}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary={'My Profile'} />
        </ListItem>
        <ListItem button key={'My Workouts'} onClick={redirect('/workout')}>
          <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
          <ListItemText primary={'My Workouts'} />
        </ListItem>
        <ListItem button key={'Logout'} onClick={() => {}}>
          <ListItemIcon><ExitToAppIcon color="secondary" /></ListItemIcon>
          <ListItemText primary={
           <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                color="secondary"
              >
                Logout
              </Typography>
            </React.Fragment>
            } />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
