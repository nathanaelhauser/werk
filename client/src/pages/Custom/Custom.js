import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import AsyncAutoComplete from '../../components/AsyncAutoComplete'
import CustomForm from '../../components/CustomForm'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import CustomList from '../../components/CustomList'
import CustomContext from '../../utils/CustomContext'
import ExerciseAPI from '../../utils/ExerciseAPI'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

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
  const [spacing, setSpacing] = useState(2)
  const [authorizedState, setAuthorizedState] = useState(true)
  const [customState, setCustomState] = useState({
    workoutTitle: '',
    exercise: '',
    exercises: []
  })

  customState.handleCustomInputChange = (event, exercise) => {
    setCustomState({ ...customState, exercise })
  }

  customState.handleCustomAddExercise = event => {
    event.preventDefault()
    addExercise({ name: customState.exercise })
      .then(({ data: exercise }) => {
        let exercises = JSON.parse(JSON.stringify(customState.exercises))
        exercises.push(exercise)
        setCustomState({ ...customState, exercises })
      })
      .catch(e => console.error(e))
  }

  customState.handleCustomTitleChange = (event) => {
    setCustomState({ ...customState, workoutTitle: event.target.value })
    console.log(customState.workoutTitle)
  }
  customState.handleCustomRemoveExercise = (id) => {
    deleteExercise(id)
      .then(() => {
        let exercises = JSON.parse(JSON.stringify(customState.exercises))
        let exercisesFiltered = exercises.filter(exercise => exercise._id !== id)
        setCustomState({ ...customState, exercises: exercisesFiltered })
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
  )
}
export default Custom