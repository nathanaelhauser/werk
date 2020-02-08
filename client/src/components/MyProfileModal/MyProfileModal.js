import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import LandingContext from '../../utils/LandingContext'
import TextField from '@material-ui/core/TextField'

const useCardStyles = makeStyles({
  card: {
    maxWidth: 370
  },
  media: {
    height: "100%",
    width: "100%",
  },
});

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: "#f44336",
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    fontFamily: 'Bangers',
    borderRadius: '25px'
  },
}))

const MyProfileModal = () => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  const [open, setOpen] = React.useState(false)
  const { name, username, password, confirmPassword, age, weight, handleInputChange } = useContext(LandingContext)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  return (
    
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Update Your Shit!
              </Typography>
              <Typography variant="h5" component="h2">
                <Container maxWidth="sm">
                  <FormControl>
                    <div className={classes.root}>
                      <TextField
                        label="username"
                        id="margin-none"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                      <TextField
                        label="name"
                        id="margin-none"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                      <TextField
                        type="password"
                        label="Password"
                        id="margin-none"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                      <TextField
                        type="password"
                        label="confirm pass"
                        id="margin-none"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                      <TextField
                        type="number"
                        label="age"
                        id="margin-none"
                        name="age"
                        value={age}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                      <TextField
                        type="number"
                        label="weight"
                        id="margin-none"
                        name="weight"
                        value={weight}
                        onChange={handleInputChange}
                        className={classes.textField}
                      />
                    </div>
                  </FormControl>
                </Container>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Fade>
    </Modal>
  )
}