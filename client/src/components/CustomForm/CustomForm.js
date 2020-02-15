import React,
       { useContext,
         useEffect,
         useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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
    paddingTop: 5,
    paddingBottom: 10
    
  },
}))

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      

    },
    backgroundColor: '#f44336'
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
    <Paper elevation={10} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Workout Name" variant="outlined" value={workoutTitle} onChange={handleCustomTitleChange} />
        <AsyncAutoComplete />
        <Grid component="label" container alignItems="center" spacing={1} direction="column" justify="center" >
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
              label={checked ? "Lower Body" : "Upper Body"}
            />
          </Grid>
        </Grid>

        <br></br>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center">
          <Button className={buttonClasses.root} variant="contained" color="primary" alignItems="center" onClick={handleCustomAddExercise}>
            Add Exercise
          </Button>
        </Grid>


      </form>
    </Paper>
    
  )
}

export default CustomForm