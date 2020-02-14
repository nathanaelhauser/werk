import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useTimer } from 'react-timer-hook'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import WorkoutContext from '../../utils/WorkoutContext'
import UserContext from '../../utils/UserContext'
import Button from '@material-ui/core/Button'
import EventAPI from '../../utils/EventAPI'


const white = '#FFFFFF'
const black = '#000000'
const green = '#2DC937'
const yellow = '#E7B416'
const red = '#CC3232'
const azure = '#0080FF'

const useStyles = makeStyles({
  grid: {
    height: '100%',
    display: 'fluid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    height: '100%',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    color: white,
    textDecorationLine: 'underline'
  },
  text: {
    color: white
  },
  button: {
    color: black,
    backgroundColor: white
  }
})

const WorkoutTimerCard = () => {
  const classes = useStyles()
  const { workout } = useContext(WorkoutContext)
  const { _id: user } = useContext(UserContext)
  const [colorState, setColorState] = useState('')
  const [goRecent, setGoRecent] = useState(false)
  const [exerciseState, setExerciseState] = useState({
    exerciseIndex: 0,
    onExercise: true,
    startedWorkout: false,
    paused: false
  })
  const { seconds, restart, resume, pause } = useTimer({
    onExpire: () => {
      // Last exercise has ended so end workout
      if (exerciseState.exerciseIndex === workout.exercises.length - 1) {
        EventAPI.createEvent({ user, workout: workout._id })
          .then(() => setGoRecent(true))
          .catch(e => console.error(e))
        return
      }
      // If user just finished exercise, then start rest
      if (exerciseState.onExercise) {
        setExerciseState({
          ...exerciseState,
          onExercise: false,
          paused: false
        })
        restart(Date.now() + 6000)
      } else {
        // Else user just finished rest, increment exercise and start exercise
        setExerciseState({
          ...exerciseState,
          onExercise: true,
          exerciseIndex: exerciseState.exerciseIndex + 1,
          paused: false
        })
        restart(Date.now() + 16000)
      }
    }
  })

  const renderRedirectRecent = () => {
    if (goRecent) {
      return <Redirect to="/recent" />
    }
  }

  useEffect(() => {
    // Haven't started the workout yet
    if (!exerciseState.startedWorkout) {
      setExerciseState({ ...exerciseState, startedWorkout: true })
      restart(Date.now() + 15000)
    } else if (exerciseState.paused) {
      // If timer pauser, set background color to black
      setColorState(black)
    } else if (exerciseState.onExercise) {
      // If user on exercise, set background color according to seconds left
      if (seconds > 10) {
        setColorState(green)
      } else if (seconds > 5) {
        setColorState(yellow)
      } else {
        setColorState(red)
      }
    } else {
      // If user on rest, set background color to azure
      setColorState(azure)
    }
  }, [seconds, exerciseState.onExercise, exerciseState.paused])

  const handlePause = () => {
    if (exerciseState.paused) {
      setExerciseState({ ...exerciseState, paused: false })
      resume()
    }
    else {
      setExerciseState({ ...exerciseState, paused: true })
      pause()
    }
  }

  return (
    <Container>
      {renderRedirectRecent()}
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={8} lg={6} className={classes.grid}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: colorState }}
          >
            <Typography variant="h4" className={classes.title}>
              {
                exerciseState.onExercise
                  ? workout.exercises[exerciseState.exerciseIndex].name
                  : 'Rest'
              }
            </Typography>
            <br />
            <Typography variant="h5" className={classes.text}>
              {seconds}
            </Typography>
            <Button variant="contained" className={classes.button} onClick={handlePause}>
              {
                exerciseState.paused
                  ? 'Resume'
                  : 'Pause'
              }
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkoutTimerCard