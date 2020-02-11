// 
import React, { useState, useEffect, useContext } from 'react'
import UserAPI from '../../utils/UserAPI'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Container from '@material-ui/core/Container'
import EditForm from '../EditForm'
import ProfileContext from '../../utils/ProfileContext'
import UserContext from '../../utils/UserContext'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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

const MyProfileCard = () => {
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false)
  const [ userState, setUserState ] = useState({
    username: '',
    name: '',
    age: '',
    weight: ''
  })
  const { name: inputName, age: inputAge, weight: inputWeight } = useContext(ProfileContext)
  const { username, name, age, weight, updateUserContext } = useContext(UserContext)
  
  useEffect(() => {
    setUserState({ username, name, age, weight })
  }, [username, name, age, weight])

  const handleClickOpen = type => event => {
    if (type === 'edit') {
      setOpenEdit(true)
    }
  }

  const handleClose = type => event => {
    if (type === 'edit') {
      setOpenEdit(false)
    }
  }

  const handleUpdate = event => {
    let user = {}
    if (inputName) {
      user = { ...user, inputName }
    }
    if (inputAge) {
      user = { ...user, inputAge }
    }
    if (inputWeight) {
      user = { ...user, inputWeight }
    }
    UserAPI.updateUser(sessionStorage.getItem('werkToken'), user)
      .then(() => updateUserContext(user))
      .catch(e => console.error(e))
  }

  return (
    <Container>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {/* user's username will populate */}
          <Typography variant="h5" component="h2">
            {userState.username}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                {/* user's name will populate */}
                <p>Name: {userState.name}</p>
                {/* age will populate as N/A */}
                <p>Age: {userState.age} </p>
                {/* weight will populate as N/A */}
                <p>Weight: {userState.weight}</p>
              </Typography>
            </CardContent>
            <CardActions>
              {/* user can add age and weight here */}
              <Button size="small" onClick={handleClickOpen('edit')} color="secondary" variant="contained">Edit Information</Button>
              <Dialog onClose={handleClose('edit')} aria-labelledby="customized-dialog-title" open={openEdit}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose('edit')}>
                  EDIT INFO
            </DialogTitle>
                <DialogContent dividers>
                  <EditForm />
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    // needs to handleEdit
                    onClick={handleUpdate}
                    color='secondary'
                    variant="contained"
                  >
                    SAVE
              </Button>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Container>
  )
}
export default MyProfileCard