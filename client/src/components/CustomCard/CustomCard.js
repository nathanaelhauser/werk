import React, 
       { useState,
         useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card,
         CardActions,
         CardContent,
         Container,
         Grid,
         IconButton } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Delete'
import WorkoutContext from '../../utils/WorkoutContext'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
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

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const CustomCard = () => {
  const classes = useStyles()
  const [dense, setDense] = useState(false)
  const [secondary, setSecondary] = useState(false)
  const { workouts, handleDeleteWorkout} = useContext(WorkoutContext)

  return (
    <Container align="center">
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid item xs={12} md={6}>
            {/* <Typography variant="h6" className={classes.title}>
            WORKOUTS
          </Typography> */}
            - Workouts -
          {
            workouts.length ? workouts.map(workout => (
              <p>
             <span>{workout.name}</span> 
             <IconButton size="small" aria-label="delete" onClick={() => handleDeleteWorkout(workout._id)}><RemoveIcon fontSize="small"/></IconButton>
             </p>
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