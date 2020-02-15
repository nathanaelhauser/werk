import React, 
       { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card,
         CardActions,
         CardContent,
         CardActionArea,
         Container,
         Grid,
         IconButton,
         Button } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Delete'
import WorkoutContext from '../../utils/WorkoutContext'
import Typography from '@material-ui/core/Typography'


const useCardStyles = makeStyles(theme => ({
  root: {
    maxWidth:350,
    // maxHeight: 150,
    // background: '#424242',
    

    marginBottom: 12
  },
  media: {
    height: 50,
  },
}));

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    background: '#424242',

  },
  h1Tag: {
    color: "#fafafa"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
    margin: theme.spacing(4, 0, 2),
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const CustomCard = () => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  const { workouts, handleDeleteWorkout, handleStartWorkout} = useContext(WorkoutContext)

  return (
    <Container align="center">
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid item xs={12} md={12}>
            {/* <Typography variant="h6" className={classes.title}>
            WORKOUTS
          </Typography> */}
            <h3 className={classes.h1Tag}>- Workouts -</h3>
          {
            workouts.length ? workouts.map(workout => (
       
        <Card className={cardClasses.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {workout.name}
          </Typography>
          <Button size="small" variant="contained" color="primary" onClick={() => handleStartWorkout(workout._id)}>
          Start
        </Button>
        {` `}
        <Button size="small" variant="contained" color="primary" onClick={() => handleDeleteWorkout(workout._id)}>
          Delete
        </Button>
        </CardContent>
    </Card>
    
            //   <p>
            //   <Grid container>
            //   <Grid item xs={6}>
            //  {workout.name}
            //  </Grid>
            //  <Grid item xs={3}>
            //  <Button size="small" variant="contained" color="primary" onClick={() => handleStartWorkout(workout._id)}>
            //     Start
            // </Button>
            // </Grid>
            // <Grid item xs={3}>
            //  <IconButton size="small" aria-label="delete" onClick={() => handleDeleteWorkout(workout._id)}><RemoveIcon fontSize="medium"/></IconButton>
            //  </Grid>
            //  </Grid>
            //  </p>
            )) : null
          }
          </Grid>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Container>
  )
}
export default CustomCard