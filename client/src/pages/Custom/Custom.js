import React, { useState, useEffect, useContext } from 'react'
import CustomForm from '../../components/CustomForm'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CustomList from '../../components/CustomList'
import CustomContext from '../../utils/CustomContext'
import ExerciseAPI from '../../utils/ExerciseAPI'
import WorkoutAPI from '../../utils/WorkoutAPI'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import UserAPI from '../../utils/UserAPI'
import WorkoutContext from '../../utils/WorkoutContext'
const { getUser } = UserAPI
const { createWorkout } = WorkoutAPI
const { deleteExercise, addExercise } = ExerciseAPI
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))


const Custom = () => {
  const classes = useStyles()
  const [workoutState, setWorkoutState] = useState({ workout: {} })
  const { setWorkout } = useContext(WorkoutContext)
  const [authorizedState, setAuthorizedState] = useState(true)
  const [customState, setCustomState] = useState({
    workoutTitle: '',
    exercise: {},
    area: '',
    exercises: []
  })

  customState.handleCustomInputChange = (event, exercise) => {
    setCustomState({ ...customState, exercise })
  }

  customState.handleCustomAddExercise = event => {
    event.preventDefault()
    if (!customState.exercise) {
      return
    }
    let exercises = JSON.parse(JSON.stringify(customState.exercises))
    exercises.push(customState.exercise)
    setCustomState({ ...customState, exercises })
  }

  customState.handleCustomTitleChange = (event) => {
    setCustomState({ ...customState, workoutTitle: event.target.value })
    console.log(customState.workoutTitle)
  }
  customState.handleCustomRemoveExercise = (id) => {
    let exercises = JSON.parse(JSON.stringify(customState.exercises))
    let exercisesFiltered = exercises.filter(exercise => exercise._id !== id)
    setCustomState({ ...customState, exercises: exercisesFiltered })
  }

  customState.handleCustomAddWorkout = (event) => {
    createWorkout({ name: customState.workoutTitle, exercises: customState.exercises, area: customState.area })
      .then(({ data }) => {
        setWorkout({ name: data.name, area: data.area, exercises: data.exercises })
        console.log(workoutState.workout)
      })
      .catch(e => console.error(e))
  }
  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <WorkoutContext.Provider value={workoutState}>
      <CustomContext.Provider value={customState}>
        <UnauthorizedRedirect authorized={authorizedState} />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomForm />
          </Grid>
          <Grid item xs={6} sm={6} >
            <CustomList />
          </Grid>
        </Grid>
      </CustomContext.Provider>
    </WorkoutContext.Provider>

  )
}

export default Custom