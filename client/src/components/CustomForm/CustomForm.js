import React, { useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AsyncAutoComplete from '../AsyncAutoComplete'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
  
    },
  },
}));

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    
    },
  },
}));

const CustomForm = () => {
  
  const [checked, setChecked] = React.useState(false);
  const [lbchecked, lbsetChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const toggleLBChecked = () => {
    lbsetChecked(prev => !prev);
  };


  const classes = useStyles();
  const buttonClasses = useButtonStyles()
  const { handleCustomAddExercise, workoutTitle, handleCustomTitleChange} = useContext(CustomContext)

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name your workout" variant="outlined" value={workoutTitle} onChange={handleCustomTitleChange}/>
      <AsyncAutoComplete />
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label= "Upper Body"       
      />
      <FormControlLabel
        control={<Switch checked={lbchecked} onChange={toggleLBChecked} />}
        label= "Lower Body"       
      />
      <br></br>
      <Button className={buttonClasses.root} variant="contained" color="primary" onClick={handleCustomAddExercise}>
        Add Exercise
      </Button>

    </form>
  );
}



export default CustomForm