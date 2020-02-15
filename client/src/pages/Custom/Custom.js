import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import CustomForm from '../../components/CustomForm'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CustomList from '../../components/CustomList'
import CustomContext from '../../utils/CustomContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import WorkoutContext from '../../utils/WorkoutContext'
import UserContext from '../../utils/UserContext'

const { createWorkout } = WorkoutAPI

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
  const { _id: author } = useContext(UserContext)
  const [authorizedState, setAuthorizedState] = useState(true)
  const [goWorkout, setGoWorkout] = useState(false)

  const renderRedirectWorkout = () => {
    if (goWorkout) {
      return <Redirect to="/workout" />
    }
  }

  const [customState, setCustomState] = useState({
    workoutTitle: '',
    exercise: {},
    area: 'upper',
    exercises: []
  })

  customState.setArea = area => setCustomState({ ...customState, area })

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
    if (!customState.workoutTitle || !customState.exercises || !customState.area || !author) {
      return
    }
    const workout = { 
      name: customState.workoutTitle, 
      exercises: customState.exercises,
      area: customState.area,
      author
    }
    createWorkout({ 
      name: customState.workoutTitle, 
      exercises: customState.exercises.map(exercise => exercise._id), 
      area: customState.area,
      author
    })
      .then(({ data: { _id } }) => {
        setWorkout({ ...workout, _id })
        setGoWorkout(true)
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
        {renderRedirectWorkout()}
        <Grid container className={classes.root} spacing={2} direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={6} justify="center" direction="column" alignItems="center">
            <CustomForm />
          </Grid>
          <Grid item xs={6} sm={6}
            direction="column"
            justify="center"
            alignItems="center">
            <CustomList />
          </Grid>
        </Grid>
      </CustomContext.Provider>
    </WorkoutContext.Provider>

  )
}

export default Custom