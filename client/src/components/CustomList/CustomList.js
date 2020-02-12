import React, 
       { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton,
         Button,
         Switch,
         FormControlLabel } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Delete'
import CustomContext from '../../utils/CustomContext'

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

const CustomList = () => {
  const [checked, setChecked] = React.useState(false)
  const gridClasses = useGridStyles()
  const toggleChecked = () => {
    setChecked(prev => !prev)
  }
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
          <IconButton size="small" aria-label="delete" onClick={() => handleCustomRemoveExercise(exercise._id)}><RemoveIcon fontSize="small"/></IconButton>
        </p>
        )) 
         : null
    }
    {
      exercises.length ? <FormControlLabel
      control={<Switch checked={checked} onChange={toggleChecked} />}
      label={checked ? 'Lower Body' : "Upper Body"}
    /> : null
    }
    {
      exercises.length ? <Button variant="contained" className={classes.typography} onClick={handleCustomAddWorkout}> Create Workout </Button> : null
    }
    </div>
  )
}

export default CustomList