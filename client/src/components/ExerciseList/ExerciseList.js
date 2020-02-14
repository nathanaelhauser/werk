import React,{useState, useStyle} from 'react'
import ExceriseContext from '../../utils/ExerciseContext'
import ExerciseAPI from '../../utils/ExerciseAPI'
import { makeStyles } from '@material-ui/core/styles'

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
  const{exerciseName, mainMuscles, secondaryMuscles, exerciseDespcription, exerciseEquipment} = useState(ExceriseContext)

  const classes = useStyle()

  return(
    <div className={classes.root}>
      {
       <ul>
<li className={classes.titleTypography} value={ExceriseContext}>
  <span>
   Exercise Name: {exerciseName}
   Main Muscles: {mainMuscles}
   Secondary Muscle:{secondaryMuscles}
   Despcription:{exerciseDespcription}
   Equipment: {exerciseEquipment}
  </span>
  </li>
     </ul>
    }

    </div>
  )
  }
export default ExerciseList