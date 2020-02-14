import React,{useState, useStyle, useEffect, useContext} from 'react'
import ExceriseContext from '../../utils/ExerciseContext'
import ExerciseAPI from '../../utils/ExerciseAPI'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import FriendsListItem from '../../components/FriendsListItem'

const {getExercises} =ExerciseAPI

const useGridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
}));

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
      
  },
},
typography: {"fontFamily": "\"Bangers\"",
    "fontSize": 30},
titleTypography: {"fontFamily": "\"Bangers\"",
    "fontSize": 36}
    

    }))

const ExerciseList = () => {
  const classes = useStyle()
  const {exerciseName, mainMuscles, secondaryMuscles, exerciseDespcription, exerciseEquipment}= useContext(ExceriseContext)

  useEffect(() => {
    getExercises()
      .then(({ data: exercises }) => setExerciseState({ ...exerciseState, exercises }))
  }, [])

  return(
    <List className={classes.root}>
  {
  exercises
  ? exercises.map(exercise => 
    {{console.log(exercise._id)}
  return <FriendsListItem 
   Exercise Name= {exercise._id}
   Main Muscles={mainMuscles}
   Secondary Muscle={secondaryMuscles}
   Despcription={exerciseDespcription}
   Equipment= {exerciseEquipment}
   />
  })
  : null
 
}
  </List> 
  )
}
  
export default ExerciseList