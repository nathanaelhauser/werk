import React,
       { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card,
         CardActionArea,
         CardContent,
         CardMedia,
         Modal,
         Backdrop,
         Fade,
         Typography } from '@material-ui/core'
import ModalList from '../ModalList'  

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

const useCardStyles = makeStyles({
  card: {
    maxWidth: 370,
  },
  media: {
    height: "100%",
    width: "100%"
  },
})

const LBModal = () => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Card className={cardClasses.card} onClick={handleOpen}>
    <CardActionArea>
      <CardMedia
         className={cardClasses.media}
         component="img"
         alt="upperbody"
         image={require('./qsPictures/lowerBody.jpg')}
         title="Lower body"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lower Body
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Squat til you can't squat no more, then squat some more
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
     
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
            <h2 id="transition-modal-title">Select a Lower Body Workout and get to WERK!</h2>
            {/* <h1 id="transition-modal-description">Select a workout and get to WERK!</h1> */}
            <ModalList />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default LBModal