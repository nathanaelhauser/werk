import React, { useContext, useState, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import WorkoutContext from '../../utils/WorkoutContext'
import UserContext from '../../utils/UserContext'

const white = '#FFFFFF'
const green = '#2DC937'
const yellow = '#E7B416'
const red = '#CC3232'
const azure = '#0080FF'

const useStyles = makeStyles({
  grid: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    height: '100%',
    width: '100%'
  }
})

const WorkoutTimerCard = () => {
  const classes = useStyles()
  const { workout } = useContext(WorkoutContext)
  const { _id: userID } = useContext(UserContext)
  const [ colorState, setColorState ] = useState('')
  const [exerciseState, setExerciseState] = useState({
    exerciseIndex: 0,
    onExercise: true,
    startedWorkout: false
  })
  const { seconds, restart, resume, pause } = useTimer({ onExpire: () => {
    // Last exercise has ended so end workout
    if (exerciseState.exerciseIndex === workout.exercises.length - 1) {
      /** 
       * NEED MORE CODE HERE, NEED TO DECIDE WHAT HAPPENS WHEN WORKOUT HAS ENDED
       * Workout Ended
       * MAKE SURE TO CREATE EVENT using workout._id and userID
       * */ 
      return
    }
    // If user just finished exercise, then start rest
    if (exerciseState.onExercise) {
      setExerciseState({ ...exerciseState, onExercise: false })
      restart(Date.now() + 6000)
    } else {
      // Else user just finished rest, increment exercise and start exercise
      setExerciseState({ 
        ...exerciseState, 
        onExercise: true, 
        exerciseIndex: exerciseState.exerciseIndex + 1
      })
      restart(Date.now() + 16000)
    }
  }})

  useEffect(() => {
    // Haven't started the workout yet
    if (!exerciseState.startedWorkout) {
      setExerciseState({ ...exerciseState, startedWorkout: true })
      restart(Date.now() + 15000)
    }
    // If user on exercise, set color according to seconds left
    if (exerciseState.onExercise) {
      if (seconds > 10) {
        setColorState(green)
      } else if (seconds > 5) {
        setColorState(yellow)
      } else {
        setColorState(red)
      }
    } else {
      // Else user on rest, set color to azure
      setColorState(azure)
    }
  }, [seconds, exerciseState.onExercise])

  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item sm={12} md={6} className={classes.grid}>
          <Paper 
            className={classes.paper} 
            style={{ backgroundColor: colorState }}
          >
            <h1 style={{ color: white }}>
              {
                exerciseState.onExercise
                ? workout.exercises[exerciseState.exerciseIndex].name
                : 'Rest'
              }
            </h1>
            <p style={{ color: white }}>{seconds}</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkoutTimerCard