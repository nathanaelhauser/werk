import React, { useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import Custom from '../../pages/Custom/Custom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
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
    

    }));

const CustomList = () => {
  const classes = useStyles()
  const { exercises, handleCustomRemoveExercise, workoutTitle } = useContext(CustomContext)

  return(
    <div className={classes.root}>
      {
        <p className={classes.titleTypography}>{workoutTitle}</p>
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
      exercises.length ? <Button varian="contained" className={classes.typography}> Create Workout </Button> : null
    }
    </div>
  )
}

export default CustomList