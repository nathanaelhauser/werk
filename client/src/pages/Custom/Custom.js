import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import AsyncAutoComplete from '../../components/AsyncAutoComplete'
import CustomForm from '../../components/CustomForm'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CustomList from '../../components/CustomList'
import CustomContext from '../../utils/CustomContext'
import ExerciseAPI from '../../utils/ExerciseAPI'

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
}));


const Custom = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 
  const [customState, setCustomState] = useState({
    workoutTitle: '',
    exercise: '',
    exercises: []
  })

  customState.handleCustomInputChange = event => {
    setCustomState({ ...customState, value: event.target.value })
  }

  customState.handleCustomAddExercise = event => {
    event.preventDefault()
    addExercise({ text: customState.exercise })
      .then(({data: exercise}) => {
        let exercises = JSON.parse(JSON.stringify(customState.exercises))
        exercises.push(exercise)
        setCustomState({...customState, exercises})
      })
      .catch(e => console.error(e))
  }

  customState.handleCustomRemoveExercise = (id) => {
    deleteExercise(id)
    .then(() => {
      let exercises = JSON.parse(JSON.stringify(customState.exercises))
      let exercisesFiltered = exercises.filter(exercise => exercise._id !== id)
      setCustomState({...customState, exercises: exercisesFiltered})
    })
    .catch(e => console.error(e))
  }

  return (
    <CustomContext.Provider value={customState}>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
    <CustomForm/>
    </Grid>
    <Grid item xs={12}>
    <CustomList />
    </Grid>
  </Grid>
  </CustomContext.Provider>
  )
}
export default Custom