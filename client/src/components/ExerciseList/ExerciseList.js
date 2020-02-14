import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseListItem from '../ExerciseListItem'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 25
  },
  titleTypography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 20
  }
}))

const ExerciseList = () => {
  const classes = useStyles()
  const { exercises } = useContext(ExerciseContext)

  return (
    <List className={classes.root}>
      {
        exercises
          ? exercises.map(exercise =>  
            <ExerciseListItem
            className= {classes.titleTypography}
              key={exercise._id}
              name={exercise.name}
              mainMuscles={exercise.mainMuscles}
              secondaryMuscles={exercise.secondaryMuscles}
              description={exercise.description}
              equipment={exercise.equipment}
            />)
          : null
      }
    </List>
  )
}

export default ExerciseList