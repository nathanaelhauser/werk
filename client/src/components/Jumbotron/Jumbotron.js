import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import RegForm from '../RegForm'
import LoginForm from '../LoginForm'

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
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Jumbotron = () => {
  const classes = useStyles()
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

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

  const handleLogin = async event => {
    console.log('Trying to login!')
    // const response = await 
  }

  const login = () => {
    const username = 'JoEdIrT'
    const password = 'pass1234'
    axios.post('/login', { username, password })
      .then(token => localStorage.setItem('werkToken', token))
      .catch(e => console.error(e))
  }

  return (
    <Container className={classes.root}>
      <Grid
        container
        spacing={3}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Typography variant="h3">WERK</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h7">© the-group 2020</Typography>
        </Grid>
        <br /><br /><br />
        <Grid item>
          <Button onClick={handleClickOpen('login')}>Login</Button>
          <Dialog onClose={handleClose('login')} aria-labelledby="customized-dialog-title" open={openLogin}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose('login')}>
              Welcome back bitch!
            </DialogTitle>
            <DialogContent dividers>
              <LoginForm />
            </DialogContent>
            <DialogActions>
              <Button 
                autoFocus 
                onClick={handleLogin} 
                color="primary" 
                variant="contained"
                name="login"
              >
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item>
          <Button onClick={handleClickOpen('register')}>Register</Button>
          <Dialog onClose={handleClose('register')} aria-labelledby="customized-dialog-title" open={openRegister}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose('register')}>
              Register urself!
            </DialogTitle>
            <DialogContent dividers>
              <RegForm />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose('register')} color="primary">
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