import React, { useContext, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { createMuiTheme } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import LogoutContext from '../../utils/LogoutContext'
import UserAuthAPI from '../../utils/UserAuthAPI'

const { logoutUser } = UserAuthAPI

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: "#f44336"
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36,
    color: '#eceff1'
  }

})

const useStyles = makeStyles(theme => ({
  link: {
    color: '#424242',
    textDecorationLine: 'none'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // color: "#86DEB7"
    color: "#f44336"
  },
  signInButton: {
    // color: "#86DEB7"
    color: "#f44336"
  },
  link: {
    color: '#424242',
    textDecorationLine: 'none'
  },
  title: {
    flexGrow: 1,
    // color: "#86DEB7"
    // color: "#f44336"
  },
}))

const Nav = withRouter(props => <NavGuts {...props} />)

const NavGuts = props => {
  const classes = useStyles()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  // const [goLanding, setGoLanding] = useState(false)

  const { toggleDrawer } = useContext(DrawerContext)
  const { loggingOut, setLoggingOut } = useContext(LogoutContext)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(false)
  }

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        setAnchorEl(false)
        sessionStorage.removeItem('werkToken')
        setLoggingOut(true)
      })
      .catch(e => console.error(e))
  }

  const renderRedirectLanding = () => {
    if (loggingOut) {
      return <Redirect to="/" />
    }
  }


  return (
    <>
      {props.location.pathname !== '/'
        ? <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.signInButton}
                  color='inherit'
                  aria-label="menu"
                  onClick={toggleDrawer(true)}>
                  <MenuOpenIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  W E R K
                </Typography>
                {auth && (
                  <div>
                    <IconButton
                      className={classes.menuButton}
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <Link to= "/profile" className={classes.link}>
                        <MenuItem onClick={handleClose}>My Profile</MenuItem>
                      </Link>
                      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                      {renderRedirectLanding()}
                    </Menu>
                    
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </div>
        : ''
      }

    </>
  )

}

export default Nav