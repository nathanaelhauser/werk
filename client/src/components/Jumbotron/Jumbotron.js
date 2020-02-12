import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import UserAuthAPI from '../../utils/UserAuthAPI'
import LandingContext from '../../utils/LandingContext'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import RegForm from '../RegForm'
import LoginForm from '../LoginForm'
import logo from './JumbotronImages/logo.png'
import werkSubtitle from './JumbotronImages/werkSubtitle.png'
import werkLogo from './JumbotronImages/werkLogo.png'

const useStyles = makeStyles({
  root: {
    height: 100
  }
})

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

const Jumbotron = () => {
  const classes = useStyles()
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [toHome, setToHome] = useState(false)
  const { name, username, password, confirmPassword, age, weight } = useContext(LandingContext)

  const handleClickOpen = type => event => {
    if (type === 'register') {
      setOpenRegister(true)
    } else {
      setOpenLogin(true)
    }
  }

  const handleClose = type => event => {
    if (type === 'register') {
      setOpenRegister(false)
    } else {
      setOpenLogin(false)
    }
  }

  const handleLogin = event => {
    UserAuthAPI.loginUser({ username, password })
      .then(({ data: { token } }) => {
        sessionStorage.setItem('werkToken', token)
        setToHome(true)
      })
      .catch(e => console.error(e))
  }

  const handleRegister = async event => {
    if (password !== confirmPassword) {
      return
    }
    const response = await UserAuthAPI.registerUser({ name, username, password, age, weight })
    const { status } = await response
    if (status === 200) {
      handleLogin(event)
    }
  }

  const renderRedirect = () => {
    if (toHome) {
      return <Redirect to="/home" />
    }
  }

  return (
    <Container className={classes.root}>
      {renderRedirect()}
      <Grid
        container
        spacing={3}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          {/* <Typography variant="h3">WERK</Typography> */}
          <img src={werkLogo} alt="werk logo"/>
        </Grid>
        <Grid item>
          {/* <Typography variant="subtitle1">© the-group 2020</Typography> */}
          <img src={werkSubtitle} alt="subtitle"/>
        </Grid>
        <br/><br/><br/><br/><br/><br/>
        <Grid item>
          {/* button */}
          <Button onClick={handleClickOpen('login')}color="secondary" variant="contained">Login</Button>
          <Dialog onClose={handleClose('login')} aria-labelledby="customized-dialog-title" open={openLogin}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose('login')}>
              Welcome back bitch!
            </DialogTitle>
            <DialogContent dividers>
              <LoginForm />
            </DialogContent>
            <DialogActions>
              <Button 
                autofocus
                onClick={handleLogin} 
                color="black" 
                variant="contained"
              >
              Login
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item>
          {/* button */}
          <Button onClick={handleClickOpen('register')} color="secondary" variant="contained">Register</Button>
          <Dialog onClose={handleClose('register')} aria-labelledby="customized-dialog-title" open={openRegister}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose('register')}>
              Register urself!
            </DialogTitle>
            <DialogContent dividers>
              <RegForm />
            </DialogContent>
            <DialogActions>
              <Button 
                autoFocus 
                onClick={handleRegister} 
                color="primary"
                variant="contained"
              >
                Create Account
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Jumbotron