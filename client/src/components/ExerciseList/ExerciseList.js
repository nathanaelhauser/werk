import React,{useState, useStyle, useEffect, useContext} from 'react'
import ExceriseContext from '../../utils/ExerciseContext'
import ExerciseAPI from '../../utils/ExerciseAPI'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ExerciseCard from '../../components/FriendsListItem'
import ExerciseContext from '../../utils/ExerciseContext'

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
  const classes = useStyles()
  const {exercises, mainMuscles, secondaryMuscles, exerciseDespcription, exerciseEquipment, setExercises}= useState(ExerciseContext)



  useEffect(() => {
    
    getExercises()
      .then(({ data: exercises }) => setExercises(exercises))
  }, [])

  return(
    <List className={classes.root}>
  {
  exercises
  ? exercises.map(exercise => 
    {{console.log(exercise._id)}
  return <ExerciseCard 
   Exercise Name= {exercise.name}
   Main Muscles={exercise.mainMuscles}
   Secondary Muscle={exercise.secondaryMuscles}
   Despcription={exercise.exerciseDespcription}
   Equipment= {exercise.exerciseEquipment}
   />
  })
  : null
 
}
  </List> 
  )
}
  
export default ExerciseList