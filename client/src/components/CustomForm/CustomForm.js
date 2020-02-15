import React,
       { useContext,
         useEffect,
         useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button,
         TextField,
         Grid,
         Switch,
         FormControlLabel } from '@material-ui/core'
import AsyncAutoComplete from '../AsyncAutoComplete'
import CustomContext from '../../utils/CustomContext'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),

    },
  },
}))

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}))

const CustomForm = () => {

  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(prev => !prev)
  }

  const classes = useStyles()
  const buttonClasses = useButtonStyles()
  const { handleCustomAddExercise, workoutTitle, handleCustomTitleChange, setArea } = useContext(CustomContext)

  useEffect(() => {
    setArea(checked ? 'lower' : 'upper')
  }, [checked])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name your workout" variant="outlined" value={workoutTitle} onChange={handleCustomTitleChange} />
      <AsyncAutoComplete />
      <Grid component="label" container alignItems="center" spacing={1}direction="column" justify="center" >
        <Grid item container
            direction="column"
            justify="center"
            alignItems="left">
          {/* <Switch
            checked={checked}
            onChange={toggleChecked}
          /> */}
          <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label= {checked ? "Lower Body" : "Upper Body"}      
      />
        </Grid>
      </Grid>
      
      <br></br>
      <Grid container
            direction="column"
            justify="center"
            alignItems="center">
        <Button className={buttonClasses.root} variant="contained" color="primary" onClick={handleCustomAddExercise}>
        Add Exercise
      </Button>
      </Grid>
      

    </form>
  )
}

export default CustomForm