import React, { useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'


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

const CustomList = () => {
  const classes = useStyles()
  const { exercises, handleCustomRemoveExercise, workoutTitle, handleCustomAddWorkout } = useContext(CustomContext)

  return(
    <div className={classes.root}>
      {
        <p className={classes.titleTypography} value={workoutTitle}>{workoutTitle}</p>
      }
    {
      exercises.length ? exercises.map(exercise => (
        <p className={classes.typography}>
          <span>{exercise.name}</span>
          <IconButton aria-label="delete" onClick={() => handleCustomRemoveExercise(exercise._id)}><RemoveIcon /></IconButton>
        </p>
        )) 
         : null
    }
    {
      exercises.length ? <Button varian="contained" className={classes.typography} onClick={handleCustomAddWorkout}> Create Workout </Button> : null
    }
    </div>
  )
}

export default CustomList